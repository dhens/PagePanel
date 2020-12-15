import isValidUrl from './formValidation.js';
import databaseCommands from './db.js';

// DOM ELEMENTS
const urlInputField = document.getElementById('url-input-field');
const fetchBtn = document.getElementById('submit-url-input');

// Listening Events
fetchBtn.addEventListener('click', event => {
    event.preventDefault(); // Prevent reload of page on button click
    toggleLoadingAnimation(fetchBtn);   // Set Track! button to run loading animation

    // Save submitted user data from input form
    const submittedUrl = urlInputField.value.trim();

    if (!isValidUrl(submittedUrl)) {    // Validate form
        alert('Error: URL is blank, or you\'re already tracking this page');
        toggleLoadingAnimation(fetchBtn)
        return;
    }
    else {
        const validatedSubmittedUrl = urlInputField.value.trim();
        const jsonSubmittedUrl = JSON.stringify({ "message": `${urlInputField.value.trim()}` }); // convert validated string to json
        const myHeaders = new Headers({
            "Content-Type": "application/json",
            "User-Agent":
                "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.169 Safari/537.36",
        });

        const requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: jsonSubmittedUrl,
            redirect: 'follow'

        };

        fetch("http://localhost:8004/page", requestOptions)
            .then(response => response.text())
            .then(result => {
                const jsonResponse = JSON.parse(result);
                // Verify the domain we requested didnt return
                // a blank string or empty object
                if (result === '{}' || result === '' || jsonResponse.name === 'Error') {             
                    toggleLoadingAnimation(fetchBtn);                        
                    console.warn('Result response from fetch was blank, an empty object, or returned an error') 
                    return;
                }
                databaseCommands.addUrl(validatedSubmittedUrl, result) // add url, DOM data to localStorage
                toggleLoadingAnimation(fetchBtn); // turn off loading animation 
            })
            .catch(error => {
                console.warn('error', error);
                toggleLoadingAnimation(fetchBtn);
            });
    }
});

const toggleLoadingAnimation = domElement => {
    // If element is not currently set to is-loading, make it so
    if (!domElement.className.includes('is-loading')) {
        domElement.className = domElement.className + ' is-loading';
        return true;
    }
    // If element className is currently set to is-loading, remove is from the className
    if (domElement.className.includes('is-loading')) {
        domElement.className = removeSubstring(domElement.className, 'is-loading');
        return true;
    }
}

const removeSubstring = (string, substring) => {
    const seperatedArray = string.split(substring);    // split the string, removing the substring
    const seperatedString = seperatedArray.join('');   // join seperatedArray with empty string
    return seperatedString;
}
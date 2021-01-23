import isValidUrl from './formValidation.js';
import databaseCommands from './db.js';

// DOM ELEMENTS
const urlInputField = document.getElementById('url-input-field');
const fetchBtn = document.getElementById('submit-url-input');

// Fetch! button click event
fetchBtn.addEventListener('click', event => {
    event.preventDefault(); // Prevent reload of page on button click
    toggleLoadingAnimation(fetchBtn);   // Set Track! button to run loading animation

    // Save submitted user data from input form
    const submittedUrl = urlInputField.value.trim();

    if (!isValidUrl(submittedUrl)) {
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

        // Send user submitted URL to backend
        fetch("http://localhost:8004/page", requestOptions)
            .then(response => response.text())
            .then(result => {
                console.log(`response: ${result}`)
                // Verify the domain we requested didnt return
                // a blank string or empty object, and that the 
                // server didnt return Error from proessing the submitted data
                // on the backend
                if (result === '{}' || result === '' || result === 'Error') {
                    toggleLoadingAnimation(fetchBtn);
                    console.warn('Result response from fetch was blank, an empty object, or returned an error')
                    return;
                }
                if (result.name) {
                    toggleLoadingAnimation(fetchBtn);
                    console.warn('Result response from fetch returned an error')
                    return;
                }
                else {
                    databaseCommands.addUrl(validatedSubmittedUrl, result) // add url, DOM data to localStorage
                    toggleLoadingAnimation(fetchBtn); // turn off loading animation 
                }
            })
            .catch(error => {
                console.warn('error', error);
                toggleLoadingAnimation(fetchBtn);
            });
    }
});

//  toggle className value of domElement by either appending is-loading className or removing it
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
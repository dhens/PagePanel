import urlSubmission from '../utils/formValidation.js';

// DOM ELEMENTS
const urlInputField = document.getElementById('url-input-field');
const fetchBtn = document.getElementById('submit-url-input');

// Listening Events
fetchBtn.addEventListener('click', event => {
    event.preventDefault(); // Prevent reload of page on button click
    toggleLoadingAnimation(fetchBtn);   // Set Track! button to run loading animation

    // Save submitted user data from input form
    const submittedUrl = urlInputField.value.trim();

    // Validate form
    if (urlSubmission(submittedUrl) === false) {
        alert('Form validation failed! Please double check your URL.');
        toggleLoadingAnimation(fetchBtn)
        return;
    }
    else {
        // Since the submittedUrl has been validated, we now will package it up in JSON format
    const validatedSubmittedUrl = JSON.stringify({ "message": `${urlInputField.value.trim()}` });
    const myHeaders = new Headers({
        "Content-Type": "application/json", 
        // Prevents certain websites from blocking due to blank UserAgent string
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.169 Safari/537.36",
    });

    const requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: validatedSubmittedUrl,
        redirect: 'follow'

    };

    fetch("http://localhost:8004/page", requestOptions)
        .then(response => response.text())
        .then(result => {
            console.log(result);
            toggleLoadingAnimation(fetchBtn);
        })
        .catch(error => {
            console.log('error', error);
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
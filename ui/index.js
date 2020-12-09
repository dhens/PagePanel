// DOM ELEMENTS
const urlInputField = document.getElementById('url-input-field');
const submitUrlInputBtn = document.getElementById('submit-url-input');
const submitUrlInputBtnDefaultState = submitUrlInputBtn.className;

// DOM ELEMENT ANIMATIONS
const submitUrlInputBtnIsLoading = submitUrlInputBtn.className + ' is-loading';

const sanitizeInput = input => {
}

// Listening Events
submitUrlInputBtn.addEventListener('click', event => {
    event.preventDefault();
    submitUrlInputBtn.className = submitUrlInputBtnIsLoading;  // toggle loading icon for Track! btn

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const submittedUrl = JSON.stringify({ "message": `${urlInputField.value}` });

    const requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: submittedUrl,
        redirect: 'follow'
    };

    fetch("http://localhost:8004/page", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
});
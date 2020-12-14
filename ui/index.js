// DOM ELEMENTS
const urlInputField = document.getElementById('url-input-field');
const fetchBtn = document.getElementById('submit-url-input');

// DOM ELEMENT DEFAULT STATES
const fetchBtnDefaultState = fetchBtn.className;

// DOM ELEMENT ANIMATIONS
const fetchBtnIsLoading = fetchBtn.className + ' is-loading';

// Listening Events
fetchBtn.addEventListener('click', event => {
    event.preventDefault();

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const submittedUrl = JSON.stringify({ "message": `${urlInputField.value.trim()}` });

    const requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: submittedUrl,
        redirect: 'follow'
    };

    fetch("http://localhost:8004/page", requestOptions)
        .then(response => response.text())
        .then(result => {
            console.log(result);
            fetchBtn.className = fetchBtnDefaultState;
        })
        .catch(error => console.log('error', error));
});

const toggleLoadingAnimation = domElement => {
    // If element is not currently set to is-loading, make it so
    if (!domElement.className.includes('is-loading')) {
        domElement.className = domElement.className + ' is-loading';
        return true;
    }
    // If element className is currently set to is-loading, remove is from the className
    else {
        domElement.className = domElement.className + ' is-loading';
        return true;
    }
}
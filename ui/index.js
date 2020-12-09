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
    fetchBtn.className = fetchBtnIsLoading;  // toggle loading icon for Track! btn

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
        .then(result => {
            console.log(result);
            fetchBtn.className = fetchBtnDefaultState;
        })
        .catch(error => console.log('error', error));
});
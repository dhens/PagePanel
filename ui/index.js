const urlInputField = document.getElementById('url-input-field');
const submitUrlInputBtn = document.getElementById('submit-url-input');
const submitUrlInputBtnDefaultState = submitUrlInputBtn.className;

const sanitizeInput = input => {
    
}

// Listening Events
submitUrlInputBtn.addEventListener('click', event => {
    event.preventDefault();
    submitUrlInputBtn.className = submitUrlInputBtn.className + ' is-loading'

    fetch('http://localhost:8004/page', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: urlInputField.textContent,
    })
    .then(response => response.json())
    .then(data => {
        console.log(`Success: ${JSON.stringify(data)}`)
        submitUrlInputBtn.className = submitUrlInputBtnDefaultState;
    })
    .catch((error) => {
        console.log(`Error: ${error}`)
    })
});
import runAlert from './actionNotification.js'

const isValidUrl = url => {
    if (url.trim() === '' || url.length === 0) {
       runAlert('Your URL cannot be blank!', 'notification is-danger');
       return false;
    }
    if (localStorage.getItem(url)) {   // check if item already exists in localStorage
        runAlert('You are already monitoring this page 😀', 'notification is-info');
        return false;
    }
    else {
        return true;
    }
}

export default isValidUrl;
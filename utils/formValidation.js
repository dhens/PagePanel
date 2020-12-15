const isValidUrl = url => {
    if (url.trim() === '' || url.length === 0) {
        return false;
        // return 'Your URL cannot be blank!';
    }
    else if (localStorage.getItem(url)) {   // check if item already exists in localStorage
        return false;
        // return 'You already are monitoring ' + url;
    }
    else {
        return true;
    }
}

export default isValidUrl;
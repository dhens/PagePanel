const urlSubmission = url => {
    if (url === '') {
        return false;
    }
    else if (url.length === 0) {
        return false;
    }
    else {
        return true;
    }
}

export default urlSubmission;
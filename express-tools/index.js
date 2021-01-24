const removeSubstring = (string, substring) => {
    const seperatedArray = string.split(substring);    // split the string, removing the substring
    const seperatedString = seperatedArray.join('');   // join seperatedArray with empty string
    return seperatedString;
}

const urlToFilename = url => {
    let removedSpecialChars = url.replace(/[^\w\s\b.]/g, '');
    let removedHypertext = removedSpecialChars.replace(/^(https|http)/g, '');

    if (removedHypertext.length <= 50) {
        console.log('final filename is less than 50 chars')
        return removedHypertext;
    }
    else {
        return removedHypertext.slice(0, 50);
    }
}

module.exports = { removeSubstring, urlToFilename };
export const removeSubstring = (string, substring) => {
    const seperatedArray = string.split(substring);    // split the string, removing the substring
    const seperatedString = seperatedArray.join('');   // join seperatedArray with empty string
    return seperatedString;
}

export const urlToFilename = url => {
    let removedSpecialChars = url.replace(/[\/\\\:\s]/g, '');
    let removeHypertext = removedSpecialChars.replace(/^(https|http)/g, '');
    return removeHypertext.replace(/(.com)/g, '');
}
"use strict";

const axios = require('axios');
module.exports =  {
    getPageDom: pageUrl => {
        axios.get(pageUrl, {
            params: {
                'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.103 Safari/537.36'
            }
        })
        .then(function(success) {
            console.log('Success! Sending data back to client.')
            console.log('\nsuccess.data: '+success.data)
            return success.data;
        })
        .catch(function (error) {
           return error.message;
        })
    },

    parsePage: request => {
        let pageToParse = getPageStatus(request);
        return cheerio.load(pageToParse);
    }
}

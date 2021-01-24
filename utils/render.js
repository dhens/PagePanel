'use strict';

import * as algos from './algos.js';

const renderSavedPages = () => {

    // Grab the URLs saved in localStorage and render each one
    // onto our pagesContainer id element
    Object.keys(localStorage).forEach(element => {
        // Create our elements we want rendered onto the page
        let divZero = document.createElement('div');
        let divZeroClassName = divZero.className = 'column';

        let article = document.createElement('article');
        let articleClassName = article.className = 'message';

        let divOne = document.createElement('div');
        let divOneClassName = divOne.className = 'message-header';

        let pElement = document.createElement('p');
        let pElementText = document.createTextNode(element)
        pElement.appendChild(pElementText);

        // Screenshot div
        let imgDiv = document.createElement('div');
        let imgDivClassName = imgDiv.className = 'message-body is-dark';

        let imgElement = document.createElement('img');
        let imgFilename = algos.urlToFilename(element);   // Strip https://, http://, .com, slashes, with regex
        imgElement.src = `../ui/assets/img/${imgFilename}.jpg`

        document.getElementById('pagesContainer').appendChild(divZero)
        divZero.appendChild(article);
        article.appendChild(divOne);
        divOne.appendChild(pElement);
        divOne.appendChild(imgDiv);
        imgDiv.appendChild(imgElement);
    });

}

renderSavedPages();

export default renderSavedPages;
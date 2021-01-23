'use strict';
// import elements from '../utils/pagesDomElements';

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


        document.getElementById('pagesContainer').appendChild(divZero)
        divZero.appendChild(article);
        article.appendChild(divOne);
        divOne.appendChild(pElement);
        });

}

renderSavedPages();

export default renderSavedPages;
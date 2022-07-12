import createHeader from './header.js';

function initialiseWebsite() {
    const pageContent = document.querySelector('#content');
    pageContent.appendChild(createHeader());
}

export default initialiseWebsite;
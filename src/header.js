import createNavBar from "./navBar.js";

function createHeader() {
    const header = document.createElement('div');
    header.classList.add('header');
    header.appendChild(createNavBar());

    return header;
}

export default createHeader;
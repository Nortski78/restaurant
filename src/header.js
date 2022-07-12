import CreateNavigationMenu from "./navbar.js";

function createHeader() {
    const header = document.createElement('div');
    header.classList.add('header');

    navBar.getItems().forEach(element => {
        header.appendChild(element);
    });

    return header;
}



export default createHeader;
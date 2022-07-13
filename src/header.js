import navbar from "./navBar";

function createHeader() {
    const header = document.createElement('div');
    header.classList.add('header');
    header.appendChild(navbar());

    return header;
}

export default createHeader;
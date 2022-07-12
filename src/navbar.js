import CreateNavigation from "./menuBar.js";

function createNavBar {
    let menu = CreateNavigation();
    menu.addItem('Button 1', true);
    menu.addItem('Button 2');
    menu.addItem('Button 3');

    const navBar = document.createElement('div');
    navBar.classList.add('navbar');

    menu.getItems().forEach((element) => {
        const menuItem = document.createElement('button');
        menuItem.classList.add('nav-item');

        navBar.appendChild(menuItem);
    });

    return navBar;
}
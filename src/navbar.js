import CreateNavigation from "./menuBar.js";
import CreateMenuItem from "./menuButton.js";

function createNavBar() {
    // Create a new menu object
    let menu = CreateNavigation();

    // Create new menu items
    let homeBtn = CreateMenuItem('Home', true);
    let menuBtn = CreateMenuItem('Menu');
    let contactBtn = CreateMenuItem('Contact');

    // Add menu items to the menu object
    menu.addItem(homeBtn);
    menu.addItem(menuBtn);
    menu.addItem(contactBtn);

    const navBar = document.createElement('div');
    navBar.classList.add('navbar');

    menu.getItems().forEach((element) => {
        const menuItem = document.createElement('button');
        menuItem.classList.add('nav-item');
        menuItem.textContent = element.getName();

        // If a menu item had a pre-defined status of active then add the .active class
        if(element.getActiveStatus()) {
            menuItem.classList.add('active');
        }

        //bind events
        menuItem.addEventListener('click', () => {
            menuItem.classList.add('active');
            setActive(element, menu, menuItem);
        });

        //Append menu items to the navbar
        navBar.appendChild(menuItem);
    });

    return navBar;
}

function setActive(button, menu, buttonElement) {

    // Cache all the DOM nav buttons
    const buttons = document.querySelectorAll('.nav-item');

    // Remove the active class
    buttons.forEach((button) => {
        if (button !== buttonElement) {
          button.classList.remove("active");
        }
    });
    
    // Set the active status of each button object in the menu object
    for(let btn of menu.getItems()) {
        if(btn === button) {
            btn.setActiveStatus(true);
        } else {
            btn.setActiveStatus(false);
        }
    }
    
    menu.getItems().forEach((element) => {
        console.log(`${element.getName()} : ${element.getActiveStatus()}`);
    })
}

export default createNavBar;
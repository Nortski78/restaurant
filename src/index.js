import pageLoad from "./pageload";
import menuModule from "./menumodule";
import contactModule from "./contactmodule";
import homeModule from "./homemodule";

pageLoad();

const createEvents = (() => {
    const documentContainer = document.querySelector('#content');
    const homeBtn = document.querySelector('#home');
    const menuBtn = document.querySelector('#menu');
    const contactBtn = document.querySelector('#contact');
    const pageContent = document.querySelector('.data-container');
    
    // Bind events
    homeBtn.addEventListener('click', () => {
        homeBtn.classList.add('active');
        menuBtn.classList.remove('active');
        contactBtn.classList.remove('active');
        pageContent.innerHTML = "";
        pageContent.appendChild(homeModule());
    })
    menuBtn.addEventListener('click', () => {
        menuBtn.classList.add('active');
        homeBtn.classList.remove('active');
        contactBtn.classList.remove('active');
        pageContent.innerHTML = "";
        pageContent.appendChild(menuModule());
    })
    contactBtn.addEventListener('click', () => {
        contactBtn.classList.add('active');
        menuBtn.classList.remove('active');
        homeBtn.classList.remove('active');
        pageContent.innerHTML = "";
        pageContent.appendChild(contactModule());
    })
})();
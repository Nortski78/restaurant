import pageLoad from "./pageload";

pageLoad();

const createEvents = (() => {
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
    })
    menuBtn.addEventListener('click', () => {
        menuBtn.classList.add('active');
        homeBtn.classList.remove('active');
        contactBtn.classList.remove('active');
        pageContent.innerHTML = "";
    })
    contactBtn.addEventListener('click', () => {
        contactBtn.classList.add('active');
        menuBtn.classList.remove('active');
        homeBtn.classList.remove('active');
        pageContent.innerHTML = "";
    })
})();
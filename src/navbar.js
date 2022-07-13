function navbar() {
    const navContainer = document.createElement('nav');
    const homeBtn = document.createElement('button');
    const menuBtn = document.createElement('button');
    const contactBtn = document.createElement('button');

    navContainer.classList.add('main-nav');
    homeBtn.classList.add('main-btn');
    homeBtn.classList.add('active');
    homeBtn.setAttribute('id', 'home');
    menuBtn.classList.add('main-btn');
    menuBtn.setAttribute('id', 'menu');
    contactBtn.classList.add('main-btn');
    contactBtn.setAttribute('id', 'contact');

    homeBtn.textContent = 'Home';
    menuBtn.textContent = 'Menu';
    contactBtn.textContent = 'Contact'

    navContainer.appendChild(homeBtn);
    navContainer.appendChild(menuBtn);
    navContainer.appendChild(contactBtn);

    return navContainer;
}

export default navbar;
const contactModule = () => {
    // Cache DOM
    const dataContainer = document.createElement('div');
    const dataContent = document.createElement('div');
    const headingContainer = document.createElement('div');
    const heading = document.createElement('h1');

    //dataContainer.classList.add('data-container');
    headingContainer.classList.add('heading-container');
    
    heading.textContent = "CONTACT US";

    headingContainer.appendChild(heading);
    dataContainer.appendChild(headingContainer);

    return dataContainer;
}

export default contactModule;
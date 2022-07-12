function pageLoad() {
    const pageContent = document.querySelector('#content');
    const dataContainer = document.createElement('div');
    const headingContainer = document.createElement('div');
    const imageContainer = document.createElement('div');
    const heading = document.createElement('h1');
    const image = document.createElement('img');

    dataContainer.classList.add('data-container');
    headingContainer.classList.add('heading-container');
    imageContainer.classList.add('image-container');
    image.classList.add('contain');
    
    image.src = "./parmo.webp";
    heading.textContent = "The Parmo King";

    headingContainer.appendChild(heading);
    imageContainer.appendChild(image);

    dataContainer.appendChild(headingContainer);
    dataContainer.appendChild(imageContainer);
    pageContent.appendChild(dataContainer);
}

export default pageLoad;
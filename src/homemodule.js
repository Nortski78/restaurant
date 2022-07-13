const homeModule = () => {
    // Cache DOM
    const dataContainer = document.createElement('div');
    const headingContainer = document.createElement('div');
    const heading = document.createElement('h1');
    const imageContainer = document.createElement('div');
    const image = document.createElement('img');
    const textContainer = document.createElement('div');
    const pageText = document.createElement('p');

    //dataContainer.classList.add('data-container');
    headingContainer.classList.add('heading-container');
    imageContainer.classList.add('image-container');
    image.classList.add('contain');
    textContainer.classList.add('text-container');
    
    heading.textContent = "The Parmo King";
    image.src = "./parmo.webp";
    pageText.textContent = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean dapibus, 
    turpis ut ornare tincidunt, est ipsum eleifend tellus, ac sodales enim mauris in dui. Proin fermentum 
    pretium lobortis. Vivamus dictum tortor ac molestie malesuada. Sed rhoncus odio finibus, consectetur 
    lectus eu, vestibulum elit. Sed viverra risus eu posuere consectetur. Nunc porttitor fermentum 
    facilisis. Sed venenatis eu magna at aliquam. Sed.`;

    headingContainer.appendChild(heading);
    imageContainer.appendChild(image);
    textContainer.appendChild(pageText);
    dataContainer.appendChild(headingContainer);
    dataContainer.appendChild(imageContainer);
    dataContainer.appendChild(textContainer);

    return dataContainer;
}

export default homeModule;
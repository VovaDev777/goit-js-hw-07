import { galleryItems } from './gallery-items.js';
// Change code below this line

 
const imageList = document.querySelector(".gallery");

galleryItems.forEach((image) => {
    const listItem = document.createElement("li");
    listItem.insertAdjacentHTML(
      "beforeend",
      `<a class="gallery__link" href="large-image.jpg">
      <img class = "gallery__image" src="${image.preview}" data-source="large-image.jpg" alt="${image.description}" width = "100%" height = "100%"/>
      </a>`
    );
    listItem.classList.add('gallery__item');
    

    listItem.addEventListener('click', (event) => {
      event.preventDefault();
        const lightbox = basicLightbox.create(`
          <img src="${image.original}" alt="${image.description}" width="100%" height="100%"/>
        `);
    
        lightbox.show();
      });
      imageList.appendChild(listItem);
  });

  
  
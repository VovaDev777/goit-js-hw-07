import { galleryItems } from './gallery-items.js';
// Change code below this line

 
const imageList = document.querySelector(".gallery");

galleryItems.forEach((image) => {
    const listItem = document.createElement("li");
    listItem.insertAdjacentHTML(
      "beforeend",
      `<img class = "image-animation" src="${image.preview}" alt="${image.description}" width = "100%" height = "100%"/>`
    );
    
    

    listItem.addEventListener('click', () => {
        const lightbox = basicLightbox.create(`
          <img src="${image.original}" alt="${image.description}" width="100%" height="100%"/>
        `);
    
        lightbox.show();
      });
      imageList.appendChild(listItem);
  });

  
  
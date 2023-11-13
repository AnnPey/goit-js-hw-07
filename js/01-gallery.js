import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector(".gallery");

const createGalleryItem = ({preview, original, description}) => {
    return `<li class="gallery__item">
                <a class="gallery__link" href="${original}">
                    <img class="gallery__image" src="${preview}" loading="lazy" alt="${description}" width="300px"/>
                </a>
            </li>`;
    };

const resoult = galleryItems.map(createGalleryItem).join("");
gallery.innerHTML = resoult;
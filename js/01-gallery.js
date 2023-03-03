import { galleryItems } from "./gallery-items.js";
// Change code below this line

const ref = {
	gallery: document.querySelector(".gallery"),
};

const newELements = createGalleryElement(galleryItems);
ref.gallery.innerHTML = newELements;
ref.gallery.addEventListener("click", onCLickImg);

function onCLickImg(event) {
	event.preventDefault();
	if (event.target.nodeName !== "IMG") return;

	//creating + show modal
	const modalWindow = basicLightbox.create(`
      <img src="${event.target.dataset.source}" width="800" height="600">
  `);
	modalWindow.show();

	//close modal
	ref.gallery.addEventListener("keydown", event => {
		if (event.code === "Escape") {
			modalWindow.close();
		}
	});
}

function createGalleryElement(galleryItems) {
	return galleryItems
		.map(({ preview, original, description }) => {
			return `<div class="gallery__item">
      <a class="gallery__link" href="${original}">
        <img
          class="gallery__image"
          src="${preview}"
          data-source="${original}"
          alt="${description}"
        />
      </a>
    </div>`;
		})
		.join("");
}

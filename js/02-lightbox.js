import { galleryItems } from "./gallery-items.js";
// Change code below this line

const ref = {
	gallery: document.querySelector(".gallery"),
};

ref.gallery.innerHTML = createDivELem(galleryItems);
ref.gallery.addEventListener("click", onClick);

function onClick(event) {
	event.preventDefault();
	if (event.target.nodeName !== "IMG") return;
}

function createDivELem(item) {
	return item
		.map(({ preview, original, description }) => {
			return `<a class="gallery__item" href="${original}">
        <img class="gallery__image" src="${preview}" alt="${description}" />
      </a>`;
		})
		.join("");
}

const gallery = new SimpleLightbox(".gallery a", {
	captionsData: "alt",
	captionDelay: 250,
	captionType: "alt",
});

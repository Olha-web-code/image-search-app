// render-functions.js
export function createImageCard(image) {
    return `
        <li class="gallery-item">
            <a class="gallery-link" href="${image.largeImageURL}">
                <img
                    class="gallery-image"
                    src="${image.webformatURL}"
                    alt="${image.tags}"
                />
            </a>
            <div class="info">
                <p class="info-item"><b>Likes:</b> ${image.likes}</p>
                <p class="info-item"><b>Views:</b> ${image.views}</p>
                <p class="info-item"><b>Comments:</b> ${image.comments}</p>
                <p class="info-item"><b>Downloads:</b> ${image.downloads}</p>
            </div>
        </li>
    `;
}

export function renderGallery(images, galleryElement) {
    const markup = images.map(image => createImageCard(image)).join('');
    galleryElement.innerHTML = markup;
}
// main.js
import { fetchImages } from './pixabay-api.js';
import { renderGallery } from './render-functions.js';
import SimpleLightbox from 'simplelightbox'; 

const searchForm = document.querySelector('.search-form');
const galleryElement = document.querySelector('.gallery');
const loader = document.querySelector('.loader');

let lightbox;

searchForm.addEventListener('submit', onSearch);

function onSearch(event) {
    event.preventDefault();

    const searchQuery = event.currentTarget.elements.searchQuery.value.trim();

    if (searchQuery === '') {
        iziToast.warning({
            title: 'Input error',
            message: 'Please enter a search query.',
            position: 'topRight',
        });
        return;
    }

    galleryElement.innerHTML = ''; 
    showLoader();

    fetchImages(searchQuery)
        .then(images => {
            renderGallery(images, galleryElement);
            if (lightbox) {
                lightbox.refresh(); 
            } else {
                lightbox = new SimpleLightbox('.gallery a', {
                    captionsData: 'alt',
                    captionDelay: 250,
                });
            }
        })
        .catch(error => {
            console.error('Search failed:', error);
        })
        .finally(() => {
            hideLoader();
            searchForm.reset(); 
        });
}

function showLoader() {
    loader.style.display = 'block';
}

function hideLoader() {
    loader.style.display = 'none';
}
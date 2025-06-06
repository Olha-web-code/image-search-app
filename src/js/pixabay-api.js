import iziToast from "izitoast"; 

const API_KEY = '50705645-335054ed3642b7567a21a52e7'; 

export function fetchImages(query) {
    const BASE_URL = 'https://pixabay.com/api/';
    const params = new URLSearchParams({
        key: API_KEY,
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
    });

    return fetch(`${BASE_URL}?${params}`)
        .then(response => {
            if (!response.ok) {
                throw new Error(response.status);
            }
            return response.json();
        })
        .then(data => {
            if (data.hits.length === 0) {
                iziToast.info({
                    title: 'No results',
                    message: 'Sorry, there are no images matching your search query. Please try again!',
                    position: 'topRight',
                });
            }
            return data.hits;
        })
        .catch(error => {
            iziToast.error({
                title: 'Error',
                message: 'Something went wrong. Please try again later.',
                position: 'topRight',
            });
            console.error('Error fetching images:', error);
            throw error; // Re-throw to propagate the error
        });
}
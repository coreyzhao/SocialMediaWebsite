const searchButtonElement = document.querySelector('.js-search-button');

searchButtonElement.addEventListener('click', () => {
    document.querySelector('.js-search-bg-screen').style.display = 'block';
});

const xsearchButtonElement = document.querySelector('.x-search-icon');

xsearchButtonElement.addEventListener('click', () => {
    document.querySelector('.js-search-bg-screen').style.display = 'none';
});
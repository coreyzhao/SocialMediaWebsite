const addFavoritesButtons = document.querySelectorAll('.button-add-to-favorites');

const tiktokPreviewsHTML = []
const tiktokPreviewsArray = document.querySelectorAll('.tiktok-preview');

tiktokPreviewsArray.forEach((value,i) => {
    tiktokPreviewsHTML[i] = value.outerHTML
});

const htmlArrayFavorites = JSON.parse(localStorage.getItem('html')) || []

if (htmlArrayFavorites.length === 0) {
    document.querySelector('.fav-circle').style.backgroundColor = 'transparent'
} else {
    document.querySelector('.fav-number').innerHTML = htmlArrayFavorites.length
}



addFavoritesButtons.forEach((button, index) => {
    
    button.addEventListener('click', () => {
    const tiktokPreviewHTML = tiktokPreviewsHTML[index];
    
    if (htmlArrayFavorites.includes(tiktokPreviewHTML)) {
        document.querySelector('.negative-fav-bg-screen').style.display = 'block';
        setTimeout(() => {
            document.querySelector('.negative-fav-bg-screen').style.display = 'none'
        }, 1000);
    } else {
        htmlArrayFavorites.push(tiktokPreviewHTML)
        localStorage.setItem("html",JSON.stringify(htmlArrayFavorites))

        document.querySelector('.fav-number').innerHTML = htmlArrayFavorites.length

        document.querySelector('.fav-circle').style.backgroundColor = 'rgba(196, 196, 196, 0.5)'

        document.querySelector('.fav-bg-screen').style.display = 'block';
        setTimeout(() => {
            document.querySelector('.fav-bg-screen').style.display = 'none'
        }, 1000);
    }
    
    });
});






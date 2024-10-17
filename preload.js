window.addEventListener('load', () => {
    const preload = document.querySelector('.preload');
    setTimeout( function() {
        preload.classList.add('preload-end')
    }, 1000);
});
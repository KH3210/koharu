document.addEventListener("DOMContentLoaded", function () {
    /* ここから記述します。 */
    const hamburger = document.querySelector('.hamburger');
    const nav = document.querySelector('.global-nav');
    const mask = document.querySelector('.nav-mask');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('is-open');
        nav.classList.toggle('is-open');
        mask.classList.toggle('is-open');
    });

    mask.addEventListener('click', () => {
        hamburger.classList.remove('is-open');
        nav.classList.remove('is-open');
        mask.classList.remove('is-open');
    });
    console.log(hamburger);
})


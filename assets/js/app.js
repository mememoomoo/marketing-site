let button = document.getElementById('mobile-nav-button');
let nav = document.getElementById('nav-mobile');
let close = document.getElementById('close-mobile-menu');

button.addEventListener('click', function(e) {
    nav.classList.toggle('is-open');
});

close.addEventListener('click', function(f) {
    nav.classList.toggle('is-open');
});
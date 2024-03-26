document.querySelector('.scroll-cta').addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector('#scroll-target').scrollIntoView({ behavior: 'smooth' });
});
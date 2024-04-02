document.querySelector('.scroll-cta').addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector('#scroll-target').scrollIntoView({ behavior: 'smooth' });
});


const ctaIcon = document.querySelector('.scroll-cta i');
gsap.to(ctaIcon, { duration: 0.5, y: 5, repeat: -1, yoyo: true });

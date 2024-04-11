document.querySelector('.scroll-cta').addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector('#scroll-target').scrollIntoView({ behavior: 'smooth' });
});


const ctaIcon = document.querySelector('.scroll-cta i');


gsap.to("#cta-icon", {
    y: 20, 
    duration: 1,
    repeat: -1,
    yoyo: true, 
    ease: "power1.inOut"
  });
  
  window.addEventListener('scroll', function() {
    console.log('Scroll détecté !');
});

let scrollTimer;

window.addEventListener('scroll', function() {
    document.body.classList.add('is-scrolling');
    clearTimeout(scrollTimer);
    scrollTimer = setTimeout(function() {
        document.body.classList.remove('is-scrolling');
    }, 100);
});

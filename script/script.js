
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


const body = document.querySelector('is-scrolling');

let scrollTimer;

window.addEventListener('scroll', function() {
    document.body.classList.add('is-scrolling');

});

window.addEventListener('scrollend', function() {
    scrollTimer = setTimeout(function() {
        document.body.classList.remove('is-scrolling');
    }, 100);
   
})

gsap.to("#sprite-sheet", {
    backgroundPosition: "-100% 0",
    duration: 5, 
    repeat: -1, 
    ease: "steps(15)", 
    x: "100vw", 
  });
  
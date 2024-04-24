
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
  


  
gsap.to("#desert-ball", {
    x: "100vw",
    duration: 3,
    ease: "linear", 
    rotation: 360, 
    repeat: -1 
  });

  gsap.to("#planet-1", {
    duration: 5,
    ease: "linear", 
    rotation: 90, 
    repeat: -1 
  });


  
  let planets = gsap.timeline({ repeat: -1});


  planets.to("#planet-2", {
    duration: 5,
    ease: "linear", 
    rotation: 360,
  });
  
  planets.to("#planet-3", {
    duration: 5,
    ease: "linear", 
    rotation: 360, 
}, "-=5");

gsap.to("#spaceship", {
    x: "-100vw",
    duration: 2,
    ease: "linear",  
    repeat: -1 
});

gsap.to("#spaceship", {
    scale: 0.5, 
    duration: 1,
    ease: "linear",
    repeat: -1,
    yoyo: true, 
  });
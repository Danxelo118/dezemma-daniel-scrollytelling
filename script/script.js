// animation page générale //
const ctaIcon = document.querySelector('.scroll-cta i');


gsap.to("#cta-icon", {
    y: 20,
    duration: 1,
    repeat: -1,
    yoyo: true,
    ease: "power1.inOut"
});


const body = document.querySelector('is-scrolling');

let scrollTimer;

window.addEventListener('scroll', function () {
    document.body.classList.add('is-scrolling');

});

window.addEventListener('scrollend', function () {
    scrollTimer = setTimeout(function () {
        document.body.classList.remove('is-scrolling');
    }, 100);

});


gsap.to(".image-header", {
    duration: 2,
    ease: "power4.inOut",
    y: "-100vh",
    x: "100vh",
    repeat: -1,
    yoyo: true,
});




// animation chapitre 0 //


gsap.fromTo(".mask", {
    width: '100%',
    scale: 1.5,
    scrollTrigger: {
        trigger: ".wrapper",
        scrub: true,
        pin: true,
        markers: true,
    },
}, {
    scale: 1,
    duration: 1,
    start: '50% 50%',
});



// -- chapitre 0 //





// animation chapitre 1 //

gsap.to("#sprite-sheet-bird", {
    x: "-30vw",
    x: "+=100vw",
    duration: 50,
    repeat: -1,
});


// -- chapitre 1 //





// animation chapitre 2 //


gsap.to("#desert-ball", {
    x: "100vw",
    duration: 3,
    ease: "linear",
    rotation: 360,
    repeat: -1,
});


// -- chapitre 2 //




// animation chapitre 3 //


gsap.to("#sprite-sheet-whale", {
    x: "-30vw",
    x: "+=100vw",
    duration: 50,
    repeat: -1,
});


// -- chapitre 3 //






// animation chapitre 4 //


gsap.to("#lune-1", {
    x: "15vw",
    y: "15vh",
    rotation: 40,
    duration: 2,
    ease: "power4.inOut",
    opacity: 0,
    scale: 1.5,
    repeat: -1,
    yoyo: true,
});

gsap.to("#lune-2", {
    x: "-15vw",
    y:  "6vh",
    rotation: -30,
    duration: 2,
    repeat: -1,
    opacity: 0,
    ease: "power4.inOut",
    
    scale: 1.5,
    yoyo: true,
});

// -- chapitre 4 //





// animation chapitre 5 //

let planets = gsap.timeline({ repeat: -1 });

planets.to("#planete-2", {
    duration: 3,
    ease: "power1.inOut",
    y: "100vh",
    rotation: 360,
});

planets.to("#planete-3", {
    duration: 3,
    ease: "power1.inOut",
    y: "100vh",
    rotation: 360,
}, "-=0.5");

planets.to("#planete-2", {
    duration: 3,
    ease: "linear",
    y: 0,
    rotation: 180,
});


planets.to("#planete-3", {
    duration: 3,
    ease: "linear",
    y: 0,
    rotation: 180,
}, "-=0.5");


// -- chapitre 5 //



// animation chapitre 6 //


gsap.fromTo("#desert", {
    width: '100%',
    scale: 1.5,
    scrollTrigger: {
        scrub: true,
    },
}, {
    scale: 1,
    duration: 1,
});



gsap.to("#planete-1", {
    duration: 2,
    ease: "linear",
    rotation: 360,
    repeat: -1
});

gsap.to("#spaceship", {
    x: "-100vw",
    duration: 2,
    ease: "power4.inOut",
});

gsap.to("#spaceship", {
    scale: 0.5,
    duration: 1,
    ease: "power4.inOut",
    yoyo: true,
});

// -- chapitre 6 //





// animation chapitre 7 //


let text = gsap.timeline({ repeat: -1, });

text.to("#paper", {
    duration: 2,
    x: "-30vw",
    ease: "power3.inOut",
    opacity: 0,
}, "-=0.5");


text.to("#bubble", {
    opacity: 100,
    yoyo: true,
    duration: 1,
    scale: 0.5,
    ease: "power4.inOut",
});


// -- chapitre 7 //




















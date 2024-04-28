
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

})

gsap.to("#sprite-sheet-bird", {
    x: "-30vw",
    x: "+=100vw",
    duration: 50,
    repeat: -1,
})

gsap.to("#sprite-sheet-whale", {
    x: "-30vw",
    x: "+=100vw",
    duration: 50,
    repeat: -1,
})

gsap.to("#desert-ball", {
    x: "100vw",
    duration: 3,
    ease: "linear",
    rotation: 360,
    repeat: -1,
});

gsap.to("#planete-1", {
    duration: 2,
    ease: "linear",
    rotation: 360,
    repeat: -1
});



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


gsap.to("#spaceship", {
    x: "-100vw",
    duration: 2,
    ease: "power4.inOut",
    repeat: -1
});

gsap.to("#spaceship", {
    scale: 0.5,
    duration: 1,
    ease: "power4.inOut",
    repeat: -1,
    yoyo: true,
});

let text = gsap.timeline({ repeat: -1, });

text.to("#paper", {
    duration: 2,
    x: "-30vw",
    ease: "power3.inOut",
}, "-=0.5");


text.to("#bubble", {
    opacity: 100,
    yoyo: true,
    duration: 1,
    ease: "power4.inOut",
});


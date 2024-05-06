
/* PLUGINS */
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(DrawSVGPlugin);
gsap.registerPlugin(TextPlugin);
gsap.registerPlugin(MorphSVGPlugin);
gsap.registerPlugin(MotionPath);


/* Animation page générale */
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
    
});





/* Animation chapitre 0 */

gsap.to(".chapitre-0", {
    scrollTrigger: {
        trigger: ".chapitre-0",
        scrub: 1,
        pin: true,
        start: "top 10%",
        end: "+=100%",
        toggleClass: "disappear"
    }
});

let anim = gsap.to(".paper", {
    morphSVG: {
        shape: ".plane-1",
    }
});


// -- chapitre 0 //





/* Animation chapitre 1 */

gsap.to(".chapitre-1 #sprite-sheet-bird", {
    x: "-30vw",
    x: "+=130vw",
    duration: 50,
    repeat: -1,
    scrollTrigger: {
        trigger: ".chapitre-1",
        start: "top 50%",
        end: "+=100%",
        toggleActions: "play none none none",
        markers: true
    }
});


gsap.to(".montagne-3", {
    backgroundPosition: "50% -50%",
    ease: "none",
    scrollTrigger: {
        trigger: ".chapitre-1",
        start: "top bottom",
        end: "bottom top",
        scrub: true,
        markers: true,
    },
});

gsap.to(".montagne-2", {
    backgroundPosition: "50% -30%",
    ease: "none",
    scrollTrigger: {
        trigger: ".chapitre-1",
        start: "top bottom",
        end: "bottom top",
        scrub: true,
        markers: true,
    },
});

gsap.from(".texte-1", {
    xPercent: -100,
    duration: 1,
    color: "var(--beige)",
    ease: "power4.inOut",
    scrollTrigger: {
        trigger: ".chapitre-1",
        pin: true,
    },
});

// -- chapitre 1 //





/* Animation chapitre 2 */


gsap.to(".chapitre-2 #desert-ball", {
    x: "100vw",
    duration: 3,
    ease: "linear",
    rotation: 360,
    repeat: -1,
    scrollTrigger: {
        trigger: ".chapitre-2",
        start: "top 50%",
        end: "+=100%",
        toggleActions: "play none none none",
        markers: true
    }
});



gsap.from(".texte-2", {
    text: "",
    duration: 2,
    color: "var(--noir)",
    ease: "power4.inOut",
    scrollTrigger: {
        trigger: ".chapitre-2",
        pin: true,
    },
});

// -- chapitre 2 //




/* Animation chapitre 3 */


gsap.to(".chapitre-3 #sprite-sheet-whale", {
    x: "-30vw",
    x: "+=100vw",
    duration: 50,
    repeat: -1,
    scrollTrigger: {
        trigger: ".chapitre-3",
        start: "top 50%",
        end: "+=100%",
        toggleActions: "play none none none",
        markers: true
    }
});

gsap.from(".texte-3", {

    duration: 2,
    text: "",
    color: "var(--noir)",
    ease: "power4.inOut",
    scrollTrigger: {
        trigger: ".chapitre-3",
        pin: true,
    },
});
gsap.set("#path-line", { drawSVG:" 0 0" });
gsap.timeline({
   // repeat: -1, 
    scrollTrigger: {
        trigger: ".chapitre-3",
    },
})
    .to("#path-line", { duration: 2, drawSVG: "100%" })
    //.to("#path-line", { duration: 2, drawSVG: 50 })
   // .to("#path-line", { duration: 1, drawSVG: 0 });;



// -- chapitre 3 //






/* Animation chapitre 4 */


gsap.to(".chapitre-4 #lune-1", {
    x: "15vw",
    y: "15vh",
    rotation: 40,
    duration: 2,
    ease: "power4.inOut",
    opacity: 0,
    scale: 1.5,
    yoyo: true,
    scrollTrigger: {
        trigger: ".chapitre-4",
        start: "top 50%",
        end: "+=100%",
        toggleActions: "play none none none",
        markers: true
    }
});

gsap.to(".chapitre-4 #lune-2", {
    x: "-15vw",
    y: "6vh",
    rotation: -30,
    duration: 2,
    opacity: 0,
    ease: "power4.inOut",
    scale: 1.5,
    yoyo: true,
    scrollTrigger: {
        trigger: ".chapitre-4",
        start: "top 50%",
        end: "+=100%",
        toggleActions: "play none none none",
        markers: true
    }

});


gsap.from(".texte-4", {
    xPercent: -100,
    duration: 1,
    color: "var(--noir)",
    ease: "power4.inOut",
    scrollTrigger: {
        trigger: ".chapitre-4",
        pin: true,
    },
});



// -- chapitre 4 //





/* Animation chapitre 5 */

let planets = gsap.timeline({
    scrollTrigger: {
        trigger: ".chapitre-5",
        start: "top 50%",
        end: "+=100%",
        toggleActions: "play reverse none reverse",
        markers: true
    },
});

planets.to(".chapitre-5 #planete-2", {
    duration: 3,
    ease: "power1.inOut",
    repeat: -1,
    yoyo: true,
    y: "100vh",
    rotation: 360,
});

planets.to(".chapitre-5 #planete-3", {
    duration: 3,
    ease: "power1.inOut",
    y: "100vh",
    rotation: 360,
    repeat: -1,
    yoyo: true,
}, "-=0.5");

planets.to(".chapitre-5 #planete-2", {
    duration: 3,
    ease: "linear",
    repeat: -1,
    yoyo: true,
    y: 0,
    rotation: 180,
});


planets.to(".chapitre-5 #planete-3", {
    duration: 3,
    ease: "linear",
    repeat: -1,
    yoyo: true,
    y: 0,
    rotation: 180,
}, "-=0.5");

gsap.from(".texte-5", {
    text: "",
    duration: 1,
    color: "var(--noir)",
    ease: "power4.inOut",
    scrollTrigger: {
        trigger: ".chapitre-5",
        pin: true,
    },
});
// -- chapitre 5 //



/* Animation chapitre 6 */




gsap.to(".chapitre-6 #planete-1", {
    duration: 2,
    ease: "linear",
    rotation: 360,
    scale: 1.5,
    repeat: -1,
    scrollTrigger: {
        trigger: ".chapitre-6",
        start: "top 50%",
        end: "+=100%",
        toggleActions: "play none none none",
        markers: true
    }
});

gsap.to(".chapitre-6 #spaceship", {
    x: "-100vw",
    duration: 2,
    ease: "power4.inOut",
    scrollTrigger: {
        trigger: ".chapitre-6",
        start: "top 50%",
        end: "+=100%",
        toggleActions: "play none none none",
        markers: true
    }
});

gsap.to(".chapitre-6 #spaceship", {
    scale: 0.5,
    duration: 1,
    ease: "power4.inOut",
    yoyo: true,
    scrollTrigger: {
        trigger: ".chapitre-6",
        start: "top 50%",
        end: "+=100%",
        toggleActions: "play none none none",
        markers: true
    }
});


gsap.from(".texte-6", {
    text: "",
    duration: 1,
    color: "var(--noir)",
    ease: "power4.inOut",
    scrollTrigger: {
        trigger: ".chapitre-6",
        pin: true,
    },
});
// -- chapitre 6 //





/* Animation chapitre 7 */


let text = gsap.timeline({
    scrollTrigger: {
        trigger: ".chapitre-7",
        toggleActions: "restart play reverse reset",
    },
});

text.to(".chapitre-7 #paper", {
    duration: 2,
    x: "-30vw",
    ease: "power3.inOut",
    opacity: 0,
}, "-=0.5");


text.to(".chapitre-7 #bubble", {
    opacity: 1,
    duration: 0.5,
    ease: "power4.inOut",
});

gsap.to(".chapitre-7 #messageOutput", {
    opacity: 1,
    duration: 0.5,
    ease: "power4.inOut",
})

let messageSubmit = document.getElementById("submit-message");
let messageOutput = document.getElementById("messageOutput");



messageSubmit.addEventListener("click", function () {
    let message = document.getElementById("message-input").value;

    console.log("messageSubmit:", messageSubmit);
    console.log("messageOutput:", messageOutput);
    
    messageOutput.textContent = message;
    document.getElementById("message-input").value = "";
});

gsap.from(".texte-7", {
    text: "",
    duration: 1,
    color: "var(--noir)",
    ease: "power4.inOut",
    scrollTrigger: {
        trigger: ".chapitre-7",
        pin: true,
    },
});
// -- chapitre 7 //

// Animation message //


/* PLUGINS 
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(DrawSVGPlugin);
gsap.registerPlugin(TextPlugin);
gsap.registerPlugin(MorphSVGPlugin);
gsap.registerPlugin(MotionPath);

*/














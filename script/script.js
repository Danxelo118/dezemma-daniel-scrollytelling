
/* Animation page générale */


const ctaIcon = document.querySelector('.scroll-cta i');


gsap.to("#cta-icon", {
    y: 20,
    duration: 1,
    repeat: -1,
    yoyo: true,
    ease: "power1.inOut"
});

const body = document.body;
let scrollTimer;

window.addEventListener('scroll', function () {
    body.classList.add('is-scrolling');
    clearTimeout(scrollTimer);
    scrollTimer = setTimeout(function () {
        body.classList.remove('is-scrolling');
    }, 100);
});



// plugins //

gsap.registerPlugin(ScrollTrigger);
/*gsap.registerPlugin(DrawSVGPlugin);*/
gsap.registerPlugin(TextPlugin);
/*gsap.registerPlugin(MorphSVGPlugin);*/
gsap.registerPlugin(MotionPathPlugin);

// plugins //


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
        delay: 2,
        start: "top",
        end: "+=100%",
        toggleClass: "disappear"
    }
});


let messageSubmit = document.getElementById("submit-message");
let messageOutput = document.getElementById("messageOutput");



messageSubmit.addEventListener("click", function () {
    let message = document.getElementById("message-input").value;

    console.log("messageSubmit:", messageSubmit);
    console.log("messageOutput:", messageOutput);

    messageOutput.textContent = message;
    document.getElementById("message-input").value = "";
});

document.getElementById("submit-message").addEventListener("click", function () {
    let timeline = gsap.timeline();

    timeline.to("#message-input, #submit-message", {
        opacity: 0,
        duration: 1,
        ease: "none",
    })
    /*MorphSVG
        .to(".paper", { 
            morphSVG: {
                shape: ".plane-1",
                duration: 5,
                ease: "none",
            },
            onComplete: function () {
                gsap.to(".paper", {
                    y: "-100vh",
                    x: "100vh",
                    duration: 2,
                    ease: "none",
                });
            }
        }, "-=1");*/
});

/*DrawSVG
gsap.set("#path-line", { drawSVG: " 0 0" });
gsap.timeline({
    scrollTrigger: {
        trigger: ".chapitre-0",
        toggleActions: "play reset play reset",
    },
})
    .to("#path-line", { duration: 3, drawSVG: "0%" })
    .to("#path-line", { duration: 3, drawSVG: "100%" })
    .to("#path-line", { duration: 3, drawSVG: "0%" })
*/


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
        toggleActions: "play reset play reset",
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

MotionPath
gsap.to("#avion-1 img", {
    duration: 6,
    yoyo: true,
    scrollTrigger: {
        trigger: ".chapitre-1",
        start: "top 50%",
        end: "+=100%",
        toggleActions: "play reset play reset",
    },
    motionPath: {
        path: [
            { x: 0, y: 50 },
            { x: -80, y: 100 },
            { x: -120, y: 90 },
            { x: -220, y: 80 },
            { x: -420, y: 70 },
            { x: -620, y: 60 },
            { x: -820, y: 90 },
            { x: -1020, y: 70 },
            { x: -1220, y: 90 },
            { x: -1420, y: 70 },
            { x: -1620, y: 80 },
            { x: -2000, y: 60 },
            { x: -3000, y: 80 },
        ],
        curviness: 0.5,
        start: 0.1,
        end: 1,
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
        toggleActions: "play reset play reset",
    }
});


gsap.from(".texte-2", {
    text: "",
    duration: 2,
    color: "var(--beige)",
    ease: "power4.inOut",
    scrollTrigger: {
        trigger: ".chapitre-2",
        pin: true,
    },
});


MotionPath
gsap.to("#avion-2 img", {
    duration: 6,
    yoyo: true,
    scrollTrigger: {
        trigger: ".chapitre-2",
        start: "top 50%",
        end: "+=100%",
        toggleActions: "play reset play reset",
    },
    motionPath: {
        path: [
            { x: 0, y: 50 },
            { x: 80, y: 100 },
            { x: 120, y: 90 },
            { x: 220, y: 80 },
            { x: 420, y: 70 },
            { x: 620, y: 60 },
            { x: 820, y: 90 },
            { x: 1020, y: 70 },
            { x: 1220, y: 90 },
            { x: 1420, y: 70 },
            { x: 1620, y: 80 },
            { x: 2000, y: 60 },
            { x: 3000, y: 80 },
        ],
        autoRotate: true,
        curviness: 0.5,
        start: 0.1,
        end: 1,
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
        toggleActions: "play reset play reset",
    }
});

gsap.from(".texte-3", {
    duration: 2,
    text: "",
    color: "var(--beige)",
    ease: "power4.inOut",
    scrollTrigger: {
        trigger: ".chapitre-3",
        pin: true,
    },
});

MotionPath
gsap.to("#avion-3 img", {
    duration: 6,
    yoyo: true,
    scrollTrigger: {
        trigger: ".chapitre-3",
        start: "top 50%",
        end: "+=100%",
        toggleActions: "play reset play reset",
    },
    motionPath: {
        path: [
            { x: 0, y: 50 },
            { x: -80, y: 100 },
            { x: -120, y: 90 },
            { x: -220, y: 80 },
            { x: -420, y: 70 },
            { x: -620, y: 60 },
            { x: -820, y: 90 },
            { x: -1020, y: 70 },
            { x: -1220, y: 90 },
            { x: -1420, y: 70 },
            { x: -1620, y: 80 },
            { x: -2000, y: 60 },
            { x: -3000, y: 80 },
        ],
        autoRotate: false,
        curviness: 0.5,
        start: 0.1,
        end: 1,
    },

});

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
        toggleActions: "play reset play reset",
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
        toggleActions: "play reset play reset",
    }

});


gsap.from(".texte-4", {
    xPercent: -100,
    duration: 1,
    color: "var(--space)",
    ease: "power4.inOut",
    scrollTrigger: {
        trigger: ".chapitre-4",
        pin: true,
    },
});

MotionPath
gsap.to("#avion-4 img", {
    duration: 6,
    yoyo: true,
    scrollTrigger: {
        trigger: ".chapitre-4",
        start: "top 50%",
        end: "+=100%",
        toggleActions: "play reset play reset",
    },
    motionPath: {
        path: [
            { x: 0, y: 50 },
            { x: 80, y: 100 },
            { x: 120, y: 90 },
            { x: 220, y: 80 },
            { x: 420, y: 70 },
            { x: 620, y: 60 },
            { x: 820, y: 90 },
            { x: 1020, y: 70 },
            { x: 1220, y: 90 },
            { x: 1420, y: 70 },
            { x: 1620, y: 80 },
            { x: 2000, y: 60 },
            { x: 3000, y: 80 },
        ],
        autoRotate: true,
        curviness: 0.5,
        start: 0.1,
        end: 1,
    },

});

// -- chapitre 4 //





/* Animation chapitre 5 */

let planets = gsap.timeline({
    scrollTrigger: {
        trigger: ".chapitre-5",
        start: "top 50%",
        end: "+=100%",
        toggleActions: "play reverse play reverse",
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



gsap.from(".texte-5", {
    text: "",
    duration: 1,
    color: "var(--beige)",
    ease: "power4.inOut",
    scrollTrigger: {
        trigger: ".chapitre-5",
        pin: true,
    },
});

MotionPath
gsap.to("#avion-5 img", {
    duration: 6,
    yoyo: true,
    scrollTrigger: {
        trigger: ".chapitre-5",
        start: "top 50%",
        end: "+=100%",
        toggleActions: "play reset play reset",
    },
    motionPath: {
        path: [
            { x: 0, y: 50 },
            { x: -80, y: 100 },
            { x: -120, y: 90 },
            { x: -220, y: 80 },
            { x: -420, y: 70 },
            { x: -620, y: 60 },
            { x: -820, y: 90 },
            { x: -1020, y: 70 },
            { x: -1220, y: 90 },
            { x: -1420, y: 70 },
            { x: -1620, y: 80 },
            { x: -2000, y: 60 },
            { x: -3000, y: 80 },
        ],
        curviness: 0.5,
        start: 0.1,
        end: 1,
    },

});



// -- chapitre 5 //



/* Animation chapitre 6 */




gsap.to(".chapitre-6 #planete-1", {
    duration: 2,
    ease: "linear",
    rotation: 360,
    repeat: -1,
    scrollTrigger: {
        trigger: ".chapitre-6",
        start: "top 50%",
        end: "+=100%",
        toggleActions: "play reset play reset",
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
        toggleActions: "play reset play reset",
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
        toggleActions: "play reset play reset",
    }
});


gsap.from(".texte-6", {
    text: "",
    duration: 1,
    color: "var(--beige)",
    ease: "power4.inOut",
    scrollTrigger: {
        trigger: ".chapitre-6",
        pin: true,
    },
});

MotionPath
gsap.to("#avion-6 img", {
    duration: 6,
    yoyo: true,
    scrollTrigger: {
        trigger: ".chapitre-6",
        start: "top 50%",
        end: "+=100%",
        toggleActions: "play reset play reset",
    },
    motionPath: {
        path: [
            { x: 0, y: 50 },
            { x: 80, y: 100 },
            { x: 120, y: 90 },
            { x: 220, y: 80 },
            { x: 420, y: 70 },
            { x: 620, y: 60 },
            { x: 820, y: 90 },
            { x: 1020, y: 70 },
            { x: 1220, y: 90 },
            { x: 1420, y: 70 },
            { x: 1620, y: 80 },
            { x: 2000, y: 60 },
            { x: 3000, y: 80 },
        ],
        autoRotate: true,
        curviness: 0.5,
        start: 0.1,
        end: 1,
    },

});
// -- chapitre 6 //





/* Animation chapitre 7 */


let text = gsap.timeline({
    scrollTrigger: {
        trigger: ".chapitre-7",
        start: "top 50%",
        end: "+=100%",
        toggleActions: "restart play reverse reset",
    },
});

text.to(".chapitre-7 #paper-plane", {
    duration: 2,
    x: "-30vw",
    ease: "power3.inOut",
    opacity: 0,
}, "-=0.5");


text.to(".chapitre-7 #bubble", {
    opacity: 1,
    duration: 0.5,
    ease: "power4.inOut",
    onComplete: function () {
        gsap.to(".chapitre-7 #messageOutput", {
            opacity: 1,
            duration: 0.5,
            ease: "power4.inOut",
        });
    },
});



gsap.from(".texte-7", {
    text: "",
    duration: 1,
    color: "var(--space)",
    ease: "power4.inOut",
    scrollTrigger: {
        trigger: ".chapitre-7",
        pin: true,
    },
});

// -- chapitre 7 //

















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


gsap.registerPlugin(ScrollTrigger);



// animation chapitre 0 //

gsap.to(".chapitre-0", {
    scrollTrigger: {
      trigger: ".chapitre-0",
      scrub: 1,
      pin: true,
      start: "top 10%",
      end: "bottom 10%",
      toggleClass: "disappear"
    }
  });

// -- chapitre 0 //





// animation chapitre 1 //

gsap.to(".chapitre-1 #sprite-sheet-bird", {
    x: "-30vw",
    x: "+=100vw",
    duration: 50,
    repeat: -1,
    scrollTrigger: {
        trigger: ".chapitre-1",
        start: "top 50%",
        end: "bottom 50%",
        toggleActions: "play none none none",
        markers: true
    }
});


// -- chapitre 1 //





// animation chapitre 2 //


gsap.to(".chapitre-2 #desert-ball", {
    x: "100vw",
    duration: 3,
    ease: "linear",
    rotation: 360,
    repeat: -1,
    scrollTrigger: {
        trigger: ".chapitre-2",
        start: "top 50%",
        end: "bottom 50%",
        toggleActions: "play none none none",
        markers: true
    }
});


// -- chapitre 2 //




// animation chapitre 3 //


gsap.to(".chapitre-3 #sprite-sheet-whale", {
    x: "-30vw",
    x: "+=100vw",
    duration: 50,
    repeat: -1,
    scrollTrigger: {
        trigger: ".chapitre-3",
        start: "top 50%",
        end: "bottom 50%",
        toggleActions: "play none none none",
        markers: true
    }
});


// -- chapitre 3 //






// animation chapitre 4 //


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
        end: "bottom 50%",
        toggleActions: "play none none none",
        markers: true
    }
});

gsap.to(".chapitre-4 #lune-2", {
    x: "-15vw",
    y:  "6vh",
    rotation: -30,
    duration: 2,
    opacity: 0,
    ease: "power4.inOut",
    scale: 1.5,
    yoyo: true,
    scrollTrigger: {
        trigger: ".chapitre-4",
        start: "top 50%",
        end: "bottom 50%",
        toggleActions: "play none none none",
        markers: true
    }
   
});

// -- chapitre 4 //





// animation chapitre 5 //

let planets = gsap.timeline({ scrollTrigger: {
    trigger: ".chapitre-5",
    start: "top 50%",
    end: "bottom 50%",
    toggleActions: "play reverse none reverse",
    markers: true
}, });

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


// -- chapitre 5 //



// animation chapitre 6 //


gsap.fromTo("#desert", {
    width: '100%',
    scale: 1.5,
}, {
    scale: 1,
    duration: 1,
});



gsap.to(".chapitre-6 #planete-1", {
    duration: 2,
    ease: "linear",
    rotation: 360,
    repeat: -1,
    scrollTrigger: {
        trigger: ".chapitre-6",
        start: "top 50%",
        end: "bottom 50%",
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
        end: "bottom 50%",
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
        end: "bottom 50%",
        toggleActions: "play none none none",
        markers: true
    }
});

// -- chapitre 6 //





// animation chapitre 7 //


let text = gsap.timeline({scrollTrigger: {
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

gsap.to(".chapitre-0 #message-input", {
    opacity: 1,
    duration: 0.5,
    ease: "power4.inOut",
})

    let messageSubmit = document.getElementById("submit-message");
    let messageOutput = document.getElementById("bubble");

    console.log("messageSubmit:", messageSubmit);
console.log("messageOutput:", messageOutput);

    messageSubmit.addEventListener("click", function () {
      let message = document.getElementById("message-input").value;
      messageOutput.textContent = message;
      document.getElementById("message-input").value = "";
    });

// -- chapitre 7 //

// animation message //



/*gsap.registerPlugin(DrawSVGPlugin);*/















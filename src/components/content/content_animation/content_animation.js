gsap.registerPlugin(ScrollTrigger);

/* Lenis */
// const lenis = new Lenis({
//   duration: 1,
// })


// function raf(time) {
//   lenis.raf(time)
//   requestAnimationFrame(raf)
// }
// requestAnimationFrame(raf)

//
// lenis.on('scroll', ScrollTrigger.update)
//
// gsap.ticker.add((time)=>{
//   lenis.raf(time * 1000)
// })

if (document.querySelector('.content_animation')){
  if ( window.matchMedia('(min-width: 769px)').matches ) {
    gsap.fromTo(".animation--row-1 .animation--image img", {
      borderBottomRightRadius: "0",
      borderTopRightRadius: "0",
      borderTopLeftRadius: "0",
      width: '39.69vw',
    } , {
      borderBottomRightRadius: "100%",
      borderTopRightRadius: "100%",
      borderTopLeftRadius: "100%",
      width: '23.59vw',
      scrollTrigger: {
      trigger: ".content_animation  .animation--row-1",
        start: "top 70%",
        end: "bottom 70%",
        scrub: 2,
        markers: false,
    }
    });

    gsap.fromTo(".content_animation  .animation--row-3 .animation--image img", {
      y: 100,
      borderRadius: 0,
    }, {
      borderRadius: 380,
      y: -250,
      ease: Power2.in,

      scrollTrigger: {
        trigger: ".content_animation  .animation--row-3",
        start: "10% bottom",
        end: "80% 50%",
        scrub: 1,
        markers: false,
      }
    });

    gsap.to(".content_animation  .animation--row:not(.animation--row-4)", {
      y: -500,
      opacity: 0.0,
      scrollTrigger: {
        trigger: ".content_animation  .animation--row-4",
        start: "60% bottom",
        end: "bottom 50%",
        scrub: 2,
        markers: false,
      }
    });
    gsap.fromTo(".content_animation  .animation--row-4 .animation--image", {

      borderRadius: 0,
      // width:'50%',
    }, {
      borderRadius: 380,
      // width: '100%',
      scrollTrigger: {
        trigger: ".content_animation  .animation--row-4",
        start: "30% bottom",
        end: "45% 45%",
        scrub: 1,
        markers: false,
      }
    })

    gsap.to(".content_animation .animation--row-4 .animation--image", {
      width: '100%',
      scrollTrigger: {
        trigger: ".content_animation .animation--row-4",
        pin: false,
        markers: false,
        start: "-20% 70%",
        end: "40% 40%",
        scrub: 1,
      }
    });
    gsap.to(".content_animation .animation--row-4", {
      y: -400,
      opacity: 0,
      scrollTrigger: {
        trigger: ".content_animation .animation--row-4",
        pin: false,
        markers: false,
        start: "90% 70%",
        end: "bottom top",
        scrub: 1,
      }
    });
  }

}


if (document.querySelector('.content_animation-2')){
  if ( window.matchMedia('(min-width: 769px)').matches ) {
    let an = gsap.timeline({
      scrollTrigger: {
        trigger: ".content_animation-2",
        pin: false,
        markers: false,
        start: "0 70%",
        end: "45% 45%",
        scrub: 3,
        duration: 2,
      }
    })
    an.fromTo(".content_animation-2 .title-1", {
      y: 200,
    }, {
      y: 0,
      // duration: 2,
      ease: "sine.out",
    })
    an.fromTo(".content_animation-2 img", {
      top: '100%',
      scale: 0.3,
    }, {
      scale: 1,
      duration: 1,
      top: '50%',
      ease: "sine.out",
    })
    an.fromTo(".content_animation-2 .title-2", {
      y: 200,
    }, {
      y: 0,
      // duration: 1,
      ease: "sine.out",
    }, "+=0")
    an.fromTo(".content_animation-2 .subtitle", {
      y: 200,
    }, {
      y: 0,
      ease: "sine.out",
    }, "+=0")


    let an2 = gsap.timeline({
      scrollTrigger: {
        trigger: ".content_animation-2",
        pin: false,
        markers: false,
        start: "80% 50%",
        end: "bottom 50%",
        scrub: 2,
      }
    })
    an2.fromTo(".content_animation-2 .block--wrapper", {
      y: 0,
    }, {
      y: -300,
      opacity: 0.6,
      duration: 1,
      ease: "sine.in",
    })
  }

}

if (document.querySelector('.content_animation-3')) {
  gsap.fromTo(".content_animation-3 .animation--row-1 .animation--title", {

    x: '-100%',
  },{
    x: '100%',
    scrollTrigger: {
      trigger: ".content_animation-3",
      pin: false,
      markers: false,
      start: "0 60%",
      end: "120% top",
      scrub: 3,
      duration: 2,
      ease: "power1.inOut",
    }
  })
  gsap.fromTo(".content_animation-3 .animation--row-2 .animation--title", {

    x: '100%',
  },{
    x: '-100%',
    scrollTrigger: {
      trigger: ".content_animation-3",
      pin: false,
      markers: false,
      start: "0 60%",
      end: "120% top",
      scrub: 4,
      duration: 1,
      ease: "power1.inOut",
    }
  })
}


if (document.querySelector('.content_animation-4')) {
  if (window.matchMedia("(min-width: 769px)").matches) {
    let tl = gsap.timeline({
      defaults: {ease: "none"},
      scrollTrigger: {
        trigger: ".content_animation-4 ",
        start: "-10% center",
        end: "40% center",
        scrub: 3,
        markers: false,
      }
    })
    tl.fromTo(".content_animation-4 .animation--row-1", {
      y: "100vh",
    }, {
      y: 0,
      ease: "Power3.easeOut",
    })
    tl.fromTo(".content_animation-4 .animation--row-2", {
      y: "100vh",
      scale: 0,
    }, {
      y: 0,
      scale: 1,
      ease: "Power3.easeOut",
    })
    tl.fromTo(".content_animation-4 .animation--row-3", {
      y: "100vh",
    }, {
      y: 0,
      ease: "Power3.easeOut",
    })

    let tt = gsap.timeline({
      defaults: {ease: "none"},
      scrollTrigger: {
        trigger: ".content_animation-4 ",
        pinnedContainer: ".content_animation-4",
        pin: true,
        start: "44% center",
        end: `+=${window.innerHeight * 1.5}`,
        scrub: 2,
        markers: false,
        pinSpacing: true,
      }
    })
    tt.fromTo(".content_animation-4 .animation--row-2 .img", {
      scale: 1,
      borderRadius: '180px',
    }, {
      scale: 1.5,
      borderRadius: '0',
      ease: "Power3.easeOut",
    })
    tt.fromTo(".content_animation-4 .animation--row-2 .img img", {
      borderRadius: '180px',
    }, {
      borderRadius: '0',
      ease: "Power1.easeOut",
    },"<")
    tt.fromTo(".content_animation-4 .animation--row-2 .img-1 img", {
      translate: 'calc(100% + 30px) ',
    }, {
      translate: 'calc(-100% + 30px) ',
      ease: "Power1.easeOut",
    } ,"<")
    tt.fromTo(".content_animation-4 .animation--row-2 .img-3 img", {
      translate: 'calc(-100% - 30px) ',
    }, {
      translate: 'calc(100% - 30px) ',
      ease: "Power1.easeOut",
    }, "<")
    tt.fromTo(".content_animation-4 .animation--row-2 .img-2 img", {
      height: '100%',
      width: '100%',

    }, {
      height: '68vh',
      width: '68vw',
      zIndex:5,

      ease: "Power3.easeOut",
    })
    tt.fromTo(".content_animation-4 .animation--subscription", {
      opacity:0,

    }, {
      opacity:1,
      zIndex: 5,

      ease: "Power3.easeOut",
    })
    tt.fromTo(".content_animation-4 .animation--row-2 .img-2 img", {

      filter: 'brightness(100%)',
    }, {
      filter: 'brightness(70%)',
    },"<")
  }
}

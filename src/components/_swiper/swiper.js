let banner_slider = document.querySelectorAll('.block_banner-group');

banner_slider.forEach(banner_sl => {

  if ( banner_sl.classList.contains('block_banner-hero') ) {
    let slider_controls = document.createElement('div');
    slider_controls.classList.add('slider_controls');
    banner_sl.append(slider_controls);

    let swiper_pagination = document.createElement('div');
    swiper_pagination.classList.add('swiper-pagination');
    slider_controls.append(swiper_pagination);

    let swiper_nav_prev = document.createElement('div');
    swiper_nav_prev.classList.add('swiper--prev' ,'button', 'button-outlined','button-secondary','button-dark');
    slider_controls.append(swiper_nav_prev);

    let swiper_nav_next = document.createElement('div');
    swiper_nav_next.classList.add('swiper--next','button', 'button-outlined','button-secondary','button-dark');
    slider_controls.append(swiper_nav_next);




    const hero_slider = new Swiper(banner_sl.querySelector('.block--wrapper'), {
      createElements: true,
      slideClass: 'banner',
      slidesPerView: 1,
      grabCursor: false,
      simulateTouch: true,
      allowTouchMove: true,
      centeredSlides: true,
      focusableElements: 'a, button',
      loop: false,
      mousewheel: {
        forceToAxis: true,
      },
      navigation: {
        nextEl: swiper_nav_next,
        prevEl: swiper_nav_prev,
      },
      pagination: {
        el: swiper_pagination,
      },

    });


  }
  else {
    let slider_controls = document.createElement('div');
    slider_controls.classList.add('slider_controls');
    banner_sl.append(slider_controls);

    let swiper_pagination_container = document.createElement('div');
    swiper_pagination_container.classList.add('swiper-pagination-container');
    slider_controls.append(swiper_pagination_container);

    let swiper_pagination = document.createElement('div');
    swiper_pagination.classList.add('swiper-pagination');
    swiper_pagination_container.append(swiper_pagination);

    let swiper_nav_prev = document.createElement('div');
    swiper_nav_prev.classList.add('swiper--prev','button', 'button-outlined','button-secondary');
    slider_controls.append(swiper_nav_prev);

    let swiper_nav_next = document.createElement('div');
    swiper_nav_next.classList.add('swiper--next','button', 'button-outlined','button-secondary');
    slider_controls.append(swiper_nav_next);

    const banner_slider = new Swiper( banner_sl.querySelector('.block--wrapper'), {
      createElements: true,
      slideClass: 'banner',
      slidesPerView: 1,
      grabCursor: false,
      simulateTouch: true,
      allowTouchMove: true,
      centeredSlides: true,
      effect: 'slide',
      mousewheel: {
        forceToAxis: true,
      },
      navigation: {
        nextEl: swiper_nav_next,
        prevEl: swiper_nav_prev,
      },
      pagination: {
        el: swiper_pagination,
        type: "progressbar",
      },
      focusableElements: 'a, button',
    });

  }
})


/* Block_list slider Слайдеры в списках */
let  activateBlocklistSlider = (block) => {
  let swiper_block = block.querySelectorAll('.block_list-slider');

  swiper_block.forEach(swiper_item => {

    if (swiper_item.classList.contains("content_page_accommodation")) {
      return;
    }

    if ( swiper_item.classList.contains('block_list-slider-v2') ) {

      let head = swiper_item.querySelector('.block--head')


      let slider_controls = document.createElement('div');
      slider_controls.classList.add('slider_controls');

      let swiper_nav_prev = document.createElement('div');
      swiper_nav_prev.classList.add('swiper-button-prev','button', 'button-outlined','button-secondary','button-dark');
      slider_controls.append(swiper_nav_prev);

      let swiper_nav_next = document.createElement('div');
      swiper_nav_next.classList.add('swiper-button-next','button', 'button-outlined','button-secondary','button-dark');
      slider_controls.append(swiper_nav_next);

      let swiper_pagination = document.createElement('div');
      swiper_pagination.classList.add('swiper-pagination');
      slider_controls.append(swiper_pagination);

      const swiper = new Swiper(swiper_item.querySelector('.block--elements'), {
        createElements: true,
        slideClass: 'card',
        grabCursor: true,
        simulateTouch: true,
        freeMode: false,
        allowTouchMove: true,
        uniqueNavElements: true,
        focusableElements: 'input, select, option, textarea, button, video, label, a, button',
        noSwipingClass: "swiper-no-swiping-block",
        mousewheel: {
          forceToAxis: true,
        },
        navigation: {
          nextEl: swiper_nav_next,
          prevEl: swiper_nav_prev,
        },
        pagination: {
          el: swiper_pagination,
        },
        breakpoints: {
          280: {
            spaceBetween: 8,
            slidesPerView: 1,
          },
          640: {
            spaceBetween: 20,
            slidesPerView: 2,
          },
          1140: {
            spaceBetween: 20,
            slidesPerView: 2.5,
          },
        },
      });
      head.append(slider_controls);

      if (swiper.slides.length <= 3) {
        slider_controls.classList.add('hidden')

        // swiper.navigation.nextEl.classList.add('hidden')
        // swiper.navigation.prevEl.classList.add('hidden')
        swiper.disable()
      }


    }
    else {
      let slides_per_view_desktop = 4, slides_per_view_pad = 3, slides_per_view_mob = 1.2;

      switch (true) {
        case swiper_item.classList.contains('content_offers'):
          slides_per_view_desktop = 2;
          slides_per_view_pad = 2;
          slides_per_view_mob = 1.3;
          break;
        case swiper_item.classList.contains('content_basic'):
          slides_per_view_desktop = 4;
          slides_per_view_pad = 3;
          slides_per_view_mob = 1.2;
          break;
        case swiper_item.classList.contains('content_hourse'):
          slides_per_view_desktop = 2;
          slides_per_view_pad = 1.2;
          slides_per_view_pad = 1.2;
          break;
        case swiper_item.classList.contains('content_personal'):
          slides_per_view_desktop = 4;
          slides_per_view_pad = 3;
          slides_per_view_mob = 1.2;
          break;
        default:
          slides_per_view_desktop = 4;
          slides_per_view_pad = 3;
          slides_per_view_mob = 1;
      }

      let slider_controls = document.createElement('div');
      slider_controls.classList.add('slider_controls');

      let swiper_pagination_container = document.createElement('div');
      swiper_pagination_container.classList.add('swiper-pagination-container');
      slider_controls.append(swiper_pagination_container);

      let swiper_pagination = document.createElement('div');
      swiper_pagination.classList.add('swiper-pagination');
      swiper_pagination_container.append(swiper_pagination);

      let swiper_nav_prev = document.createElement('div');
      swiper_nav_prev.classList.add('swiper-button-prev','button', 'button-outlined','button-secondary');
      slider_controls.append(swiper_nav_prev);

      let swiper_nav_next = document.createElement('div');
      swiper_nav_next.classList.add('swiper-button-next','button', 'button-outlined','button-secondary');
      slider_controls.append(swiper_nav_next);

      const swiper = new Swiper(swiper_item.querySelector('.block--elements'), {
        createElements: true,
        slideClass: 'card',
        grabCursor: true,
        simulateTouch: true,
        freeMode: false,
        allowTouchMove: true,
        uniqueNavElements: true,
        focusableElements: 'input, select, option, textarea, button, video, label, a, button',
        noSwipingClass: "swiper-no-swiping-block",
        mousewheel: {
          forceToAxis: true,
        },
        navigation: {
          nextEl: swiper_nav_next,
          prevEl: swiper_nav_prev,
        },
        // pagination: true,
        pagination: {
          el: swiper_pagination,
          type: "progressbar",
        },
        breakpoints: {
          280: {
            spaceBetween: 8,
            slidesPerView: slides_per_view_mob,
          },
          640: {
            spaceBetween: 24,
            slidesPerView: slides_per_view_pad,
          },
          1140: {
            spaceBetween: 24,
            slidesPerView: slides_per_view_desktop,
          },
        },
      });
      swiper_item.querySelector('.block--elements').append(slider_controls);

      if (swiper.slides.length <= slides_per_view_desktop) {
        slider_controls.classList.add('hidden')

        // swiper.navigation.nextEl.classList.add('hidden')
        // swiper.navigation.prevEl.classList.add('hidden')
        swiper.disable()
      }
    }



  })
}


activateBlocklistSlider(document)



// Галлерея
let  activateGallerySliders = (block) => {
  let gallery_swiper = block.querySelectorAll('.js-gallerySwiper');

  gallery_swiper.forEach(gallery => {
    let slides_per_view_desktop = 4, slides_per_view_pad = 3, slides_per_view_mob = 1.2, slides_centeredSlides = false;

    switch (true) {
      case gallery.classList.contains('gallerySwiper-v2'):

        slides_per_view_desktop = 1.6;
        slides_per_view_pad = 1;
        slides_per_view_mob = 1.2;
        slides_centeredSlides = 'true';
        break;
      case gallery.classList.contains('gallerySwiper-v3'):
        slides_per_view_desktop = 1.2;
        slides_per_view_pad = 1;
        slides_per_view_mob = 1.2;
        slides_centeredSlides = 'true';
        break;
      default:
        slides_centeredSlides = 'false'
        slides_per_view_desktop = 3;
        slides_per_view_pad = 2;
        slides_per_view_mob = 1.2;
    }

    let slider_controls = document.createElement('div');
    slider_controls.classList.add('slider_controls');

    let swiper_pagination_container = document.createElement('div');
    swiper_pagination_container.classList.add('swiper-pagination-container');
    slider_controls.append(swiper_pagination_container);

    let swiper_pagination = document.createElement('div');
    swiper_pagination.classList.add('swiper-pagination');
    swiper_pagination_container.append(swiper_pagination);

    let swiper_nav_prev = document.createElement('div');
    swiper_nav_prev.classList.add('swiper-button-prev');
    slider_controls.append(swiper_nav_prev);

    let swiper_nav_next = document.createElement('div');
    swiper_nav_next.classList.add('swiper-button-next');
    slider_controls.append(swiper_nav_next);


    const swiper = new Swiper(gallery, {
      createElements: true,
      slidesPerView: 3,
      loop: true,
      grabCursor: true,
      simulateTouch: true,
      freeMode: false,
      allowTouchMove: true,
      mousewheel: {
        forceToAxis: true,
      },
      slideClass: 'gallery--item',
      navigation: {
        nextEl: swiper_nav_next,
        prevEl: swiper_nav_prev,
      },
      // pagination: true,
      pagination: {
        el: swiper_pagination,
        type: "progressbar",
      },
      breakpoints: {
        280: {
          spaceBetween: 8,
          slidesPerView: slides_per_view_mob,
        },
        640: {
          spaceBetween: 20,
          slidesPerView: slides_per_view_pad,
        },
        1140: {
          spaceBetween: 20,
          centeredSlides: slides_centeredSlides,
          slidesPerView: slides_per_view_desktop,
        },
      },
      on: {
        afterInit: function (swiper) {
          if ( swiper.slides.length > 1 ) {
            for (let i = 0; i < swiper.slides.length ; i++) {
              let image = swiper.slides[i].querySelector('img')
              image.setAttribute('loading', 'lazy')

              let lazy_loader = document.createElement('div')
              lazy_loader.classList.add('swiper-lazy-preloader', 'swiper-lazy-preloader-white')
              image.parentNode.appendChild(lazy_loader)
            }
          }
        }
      }
    });
    gallery.append(slider_controls);
  })
}

activateGallerySliders(document)

// Слайдер события

let  activateEventsSliders = (block) => {
  let events_swiper = block.querySelectorAll('.content_events .block--elements');

  events_swiper.forEach(events => {

    let slider_controls = document.createElement('div');
    slider_controls.classList.add('slider_controls');

    let swiper_pagination_container = document.createElement('div');
    swiper_pagination_container.classList.add('swiper-pagination-container');
    slider_controls.append(swiper_pagination_container);

    let swiper_pagination = document.createElement('div');
    swiper_pagination.classList.add('swiper-pagination');
    swiper_pagination_container.append(swiper_pagination);

    let swiper_nav_prev = document.createElement('div');
    swiper_nav_prev.classList.add('swiper-button-prev');
    slider_controls.append(swiper_nav_prev);

    let swiper_nav_next = document.createElement('div');
    swiper_nav_next.classList.add('swiper-button-next');
    slider_controls.append(swiper_nav_next);

    const swiper = new Swiper(events, {
      createElements: true,
      slidesPerView: 1,
      grabCursor: true,
      simulateTouch: true,
      freeMode: false,
      allowTouchMove: true,
      mousewheel: {
        forceToAxis: true,
      },
      slideClass: 'card',
      navigation: {
        nextEl: swiper_nav_next,
        prevEl: swiper_nav_prev,
      },
      // pagination: true,
      pagination: {
        el: swiper_pagination,
        type: "progressbar",
      },
      breakpoints: {
        320: {
          spaceBetween: 8
        },
        993: {
          spaceBetween: 24,
        }
      },
      on: {
        afterInit: function (swiper) {
          if ( swiper.slides.length > 1 ) {
            for (let i = 0; i < swiper.slides.length ; i++) {
              let image = swiper.slides[i].querySelector('img')
              image.setAttribute('loading', 'lazy')

              let lazy_loader = document.createElement('div')
              lazy_loader.classList.add('swiper-lazy-preloader', 'swiper-lazy-preloader-white')
              image.parentNode.appendChild(lazy_loader)
            }
          }
        }
      }
    });
    events.append(slider_controls);
  })
}
if ( window.matchMedia('(max-width: 768px)').matches ) {
  activateEventsSliders(document)
}

let random = (min, max) => Math.floor(Math.random() * (max - min)) + min;

// Слайдер в image-text

let activateImageTextSlider = ( sliders ) => {
  sliders.forEach(slider => {

    let images = slider.querySelectorAll('img')

    if ( images.length > 1 ) {
      slider.addEventListener('click', (e)=>{
        e.stopPropagation();
        e.preventDefault()
      })

      images.forEach(img => {
        img.classList.add('image_slide')
      })

      let slider_controls = document.createElement('div');
      slider_controls.classList.add('slider_controls');

      let swiper_nav_prev = document.createElement('div');
      swiper_nav_prev.classList.add('swiper-button-prev');
      slider_controls.append(swiper_nav_prev);

      let swiper_nav_next = document.createElement('div');
      swiper_nav_next.classList.add('swiper-button-next');
      slider_controls.append(swiper_nav_next);

      let swiper_pagination = document.createElement('div');
      swiper_pagination.classList.add('swiper-pagination');
      slider_controls.append(swiper_pagination);

      const images_slider = new Swiper(slider, {
        createElements: true,
        slidesPerView: 1,
        // autoplay: {
        //   delay: random(2000, 5000)
        // },
        effect: "fade",
        grabCursor: true,
        simulateTouch: true,
        freeMode: false,
        allowTouchMove: true,
        loop: true,
        mousewheel: {
          forceToAxis: true,
        },
        slideClass: 'image_slide',
        navigation: {
          nextEl: swiper_nav_next,
          prevEl: swiper_nav_prev,
        },
        pagination: {
          el: swiper_pagination,
        },
      });
      slider.append(slider_controls);
    }
  })

}

activateImageTextSlider(document.querySelectorAll('.block_image_text-slider .block--image'))

// Слайдер в карточках


let activateCardImagesSlider = ( sliders ) => {
  sliders.forEach(slider => {

    let card_images = slider.querySelectorAll('img')

    if ( card_images.length > 1 ) {
      slider.addEventListener('click', (e)=>{
        e.stopPropagation();
        e.preventDefault()
      })

      card_images.forEach(img => {
        img.classList.add('card--image_slide')
      })

      const card_image_slider = new Swiper(slider, {
        createElements: true,
        slidesPerView: 1,
        autoplay: {
          delay: random(1000, 3000)
        },
        effect: "fade",
        grabCursor: true,
        simulateTouch: true,
        freeMode: false,
        allowTouchMove: true,
        loop: true,
        mousewheel: {
          forceToAxis: true,
        },
        slideClass: 'card--image_slide',
        navigation: true,
        pagination: false,
      });
    }
  })

}

activateCardImagesSlider(document.querySelectorAll('.card .card--image'))




let activateAccommodationSlider = (swiper_item)=>{

  let accommodation_slider = swiper_item.querySelector('.block--elements')

  let accommodation_slider_pagination = document.createElement('div')
  accommodation_slider_pagination.classList.add('content_page_accommodation--pagination')

  accommodation_slider.parentNode.insertBefore(accommodation_slider_pagination, accommodation_slider);

    const swiper = new Swiper( accommodation_slider, {
      createElements: true,
      watchSlidesProgress: true,
      setWrapperSize: true,
      grabCursor: true,
      freeMode: false,
      uniqueNavElements: true,
      slidesPerView: 1,
      // focusableElements: 'input, select, option, textarea, button, video, label, a, button',
      slideClass: 'card-detail',
      // centeredSlides: true,
      noSwipingClass: "swiper-no-swiping-block",
      effect: "fade",
      speed: 400,
      fadeEffect: {
        crossFade: true
      },
      loop: false,
      navigation: false,
      allowTouchMove: false,
      on: {
        init: function (swiper) {
          swiper.slides.forEach((sl, index) => {
            let bullet = document.createElement('div')
            bullet.textContent = sl.title;
            bullet.dataset.elIndex = index;
            bullet.classList.add('pagination_bullet')
            accommodation_slider_pagination.appendChild(bullet);
          })
        }
      },
    });

    let swiper_pagination_bullets = accommodation_slider_pagination.querySelectorAll('.pagination_bullet')

    swiper_pagination_bullets.forEach(bullet => {
      bullet.addEventListener('click', ()=>{
        swiper_pagination_bullets.forEach(b => {
          b === bullet ? b.classList.add('is_active') : b.classList.remove('is_active')
        })

        swiper.slideTo(bullet.dataset.elIndex)
      })
    })
  swiper_pagination_bullets[0].click()

    swiper.on('slideChange', ()=>{
      for(let i = 0; i < swiper_pagination_bullets.length; i++) {
        i === swiper.activeIndex ? swiper_pagination_bullets[i].classList.add('is_active') : swiper_pagination_bullets[i].classList.remove('is_active')
      }

    })


  let card_image_slider = swiper_item.querySelectorAll(".card--image")

  card_image_slider.forEach(slider => {

    let card_images = slider.querySelectorAll('img')

    if ( card_images.length > 1 ) {
      let slider_controls = document.createElement('div');
      slider_controls.classList.add('slider_controls');

      let swiper_nav_prev = document.createElement('div');
      swiper_nav_prev.classList.add('swiper--prev');
      slider_controls.append(swiper_nav_prev);

      let swiper_nav_next = document.createElement('div');
      swiper_nav_next.classList.add('swiper--next');
      slider_controls.append(swiper_nav_next);


      slider.addEventListener('click', (e)=>{
        e.stopPropagation();
        e.preventDefault()
      })

      card_images.forEach(img => {
        img.classList.add('card--image_slide')
      })

      const card_image_slider = new Swiper(slider, {
        createElements: true,
        slidesPerView: 1,
        grabCursor: true,
        simulateTouch: true,
        freeMode: false,
        allowTouchMove: true,
        mousewheel: {
          forceToAxis: true,
        },
        slideClass: 'card--image_slide',
        pagination: false,
        effect: "creative",
        creativeEffect: {
          prev: {
            translate: ["-100%", 0, 0],
          },
          next: {
            translate: ["100%", 0, 0],
            scale: 0.8
          },
        },
        navigation: {
          nextEl: swiper_nav_next,
          prevEl: swiper_nav_prev,
        },

      });

      slider.appendChild(slider_controls);

    }

  })

}


let page_accomodation_sections = document.querySelectorAll('.content_page_accommodation');

page_accomodation_sections.forEach(section => {
  activateAccommodationSlider(section)
})


if ( window.matchMedia('(max-width: 768px)').matches ) {
  let card_reviews = document.querySelectorAll('.content_reviews .card--image:has(video)')
  card_reviews.forEach(card_with_video => {
    let card_reviews_video = card_with_video.querySelector('video')
    card_reviews_video.addEventListener('click', (e)=>{
      e.stopPropagation()

      if ( card_reviews_video.paused ) {
        card_reviews_video.play()
        card_reviews_video.removeAttribute("muted")
      } else {
        card_reviews_video.pause()
        card_reviews_video.setAttribute("muted", "")
      }
    })
  })
}


// Слайдер в табах
let activateTabsSlider = ( sliders ) => {
  sliders.forEach(slider => {

    let tabs = slider.querySelectorAll('a')

    if ( tabs.length > 1 ) {
      slider.addEventListener('click', (e)=>{
        e.stopPropagation();
        e.preventDefault()
      })

      tabs.forEach(tab => {
        tab.classList.add('tabs_slide')
      })

      let slider_controls = document.createElement('div');
      slider_controls.classList.add('slider_controls');

      let swiper_nav_prev = document.createElement('div');
      swiper_nav_prev.classList.add('swiper--prev','button', 'button-outlined','button-secondary');
      slider_controls.append(swiper_nav_prev);

      let swiper_nav_next = document.createElement('div');
      swiper_nav_next.classList.add('swiper--next','button', 'button-outlined','button-secondary');
      slider_controls.append(swiper_nav_next);

      const tabs_slider = new Swiper(slider.querySelector('.block--sections_container'), {
        createElements: true,
        // slidesPerView: 1,
        slidesPerView: 'auto',
        grabCursor: true,
        simulateTouch: true,
        freeMode: false,
        allowTouchMove: true,
        mousewheel: {
          forceToAxis: true,
        },
        slideClass: 'tabs_slide',
        navigation: {
          nextEl: swiper_nav_next,
          prevEl: swiper_nav_prev,
        },
      });
      slider.appendChild(slider_controls);
    }
  })

}
if(document.querySelector('.block--sections')){
  activateTabsSlider(document.querySelectorAll('.block--sections'))
}


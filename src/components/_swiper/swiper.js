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
        clickable: true
      },

    });


  }
  else {
    let slider_controls = document.createElement('div');
    slider_controls.classList.add('slider_controls');


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
      spaceBetween: 24,
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
    banner_sl.querySelector('.block--wrapper').append(slider_controls);
  }
})


/* Block_list slider Слайдеры в списках */
let  activateBlocklistSlider = (block) => {
  let swiper_block = block.querySelectorAll('.block_list-slider');

  swiper_block.forEach(swiper_item => {

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
        // loop: true,
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
          clickable: true
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
            slidesPerView: 2,
          },
        },
      });
      head.append(slider_controls);

      if (swiper.slides.length <= 1) {
        // slider_controls.classList.add('hidden')

        // swiper.navigation.nextEl.classList.add('hidden')
        // swiper.navigation.prevEl.classList.add('hidden')
        swiper.disable()
      }


    }
    else if( swiper_item.classList.contains('block_list-slider')){
      let slides_per_view_desktop = 4, slides_per_view_pad = 3, slides_per_view_mob = 1.2;
      let slides_spaceBetween_desktop = 20, slides_spaceBetween_mob = 8;
      switch (true) {
        case swiper_item.classList.contains('content_offers'):
          slides_per_view_desktop = 2;
          slides_per_view_pad = 2;
          slides_per_view_mob = 1.3;
          slides_spaceBetween_desktop = 20;
          slides_spaceBetween_mob = 8;
          break;
        case swiper_item.classList.contains('content_basic'):
          slides_per_view_desktop = 4;
          slides_per_view_pad = 3;
          slides_per_view_mob = 1.1;
          slides_spaceBetween_desktop = 20;
          slides_spaceBetween_mob = 8;
          break;
        case swiper_item.classList.contains('content_hourse'):
          slides_per_view_desktop = 2;
          slides_per_view_pad = 1.2;
          slides_per_view_pad = 1.1;
          slides_spaceBetween_desktop = 20;
          slides_spaceBetween_mob = 8;
          break;
        case swiper_item.classList.contains('content_personal'):
          slides_per_view_desktop = 4;
          slides_per_view_pad = 3;
          slides_per_view_mob = 1.1;
          slides_spaceBetween_desktop = 20;
          slides_spaceBetween_mob = 8;
          break;
        case swiper_item.classList.contains('content_advantages'):
          slides_per_view_desktop = 3;
          slides_per_view_pad = 2.2;
          slides_per_view_mob = 1.1;
          slides_spaceBetween_desktop = 20;
          slides_spaceBetween_mob = 8;
          break;
        case swiper_item.classList.contains('content_reviews'):
          slides_per_view_desktop = 3;
          slides_per_view_pad = 2.2;
          slides_per_view_mob = 1.1;
          slides_spaceBetween_desktop = 20;
          slides_spaceBetween_mob = 8;
          break;
        case swiper_item.classList.contains('content_news'):
          slides_per_view_desktop = 3;
          slides_per_view_pad = 2.2;
          slides_per_view_mob = 1.1;
          slides_spaceBetween_desktop = 20;
          slides_spaceBetween_mob = 8;
          break;
        case swiper_item.classList.contains('content_history'):
          slides_per_view_desktop = 3.1;
          slides_per_view_pad = 2.2;
          slides_per_view_mob = 1.1;
          slides_spaceBetween_desktop = 0;
          slides_spaceBetween_mob = 0;
          break;
        default:
          slides_per_view_desktop = 4;
          slides_per_view_pad = 2;
          slides_per_view_mob = 1.1;
          slides_spaceBetween_desktop = 20;
          slides_spaceBetween_mob = 8;

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
            spaceBetween: slides_spaceBetween_mob,
            slidesPerView: slides_per_view_mob,
          },
          640: {
            spaceBetween: slides_spaceBetween_desktop,
            slidesPerView: slides_per_view_pad,
          },
          1140: {
            spaceBetween: slides_spaceBetween_desktop,
            slidesPerView: slides_per_view_desktop,
          },
        },
      });
      swiper_item.querySelector('.block--elements').append(slider_controls);

      if (swiper.slides.length <= 1) {
        slider_controls.classList.add('hidden')
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

        slides_per_view_desktop = 2;
        slides_per_view_pad = 1;
        slides_per_view_mob = 'auto';
        slides_centeredSlides = false;
        break;
      case gallery.classList.contains('gallerySwiper-v3'):
        slides_per_view_desktop = 1.6;
        slides_per_view_pad = 1;
        slides_per_view_mob = 'auto';
        slides_centeredSlides = 'true';
        break;

      default:
        slides_centeredSlides = false
        slides_per_view_desktop = 3;
        slides_per_view_pad = 2;
        slides_per_view_mob = 'auto';
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

    });
    gallery.append(slider_controls);
  })
}

activateGallerySliders(document)

// Слайдер события

let  activateEventsSliders = (block) => {

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

    const swiper = new Swiper(block, {
      createElements: true,
      slidesPerView: 1,
      grabCursor: true,
      simulateTouch: true,
      freeMode: false,
      allowTouchMove: true,
      autoHeight: true,
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
        768: {
          slidesPerView: 2.1,
          spaceBetween: 24,
        }
      },
    });
    block.append(slider_controls);
}
if ( window.matchMedia('(max-width: 1140px)').matches ) {
  let events_swiper = document.querySelector('.block_list.content_events .block--elements');
  if(events_swiper){
    activateEventsSliders(events_swiper)
  }

}

let random = (min, max) => Math.floor(Math.random() * (max - min)) + min;

// Слайдер в image-text

let activateImageTextSlider = ( sliders ) => {
  sliders.forEach(slider => {

    let images = slider.querySelectorAll('img')

    if ( images.length > 1 ) {
      slider.classList.add('block--image-slider')
      slider.addEventListener('click', (e)=>{
        e.stopPropagation();
        e.preventDefault()
      })

      images.forEach(img => {
        img.classList.add('image_slide')
      })

      let slider_controls = document.createElement('div');
      slider_controls.classList.add('slider_controls');

      let swiper_pagination = document.createElement('div');
      swiper_pagination.classList.add('swiper-pagination');
      slider_controls.append(swiper_pagination);

      let swiper_nav_prev = document.createElement('div');
      swiper_nav_prev.classList.add('swiper-button-prev','button', 'button-outlined','button-secondary','button-dark');
      slider_controls.append(swiper_nav_prev);

      let swiper_nav_next = document.createElement('div');
      swiper_nav_next.classList.add('swiper-button-next','button', 'button-outlined','button-secondary','button-dark');
      slider_controls.append(swiper_nav_next);



      const images_slider = new Swiper(slider, {
        createElements: true,
        slidesPerView: 1,
        autoplay: {
          delay: random(2000, 5000)
        },
        // effect: "fade",
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
          clickable: true
        },
      });
      slider.append(slider_controls);
    }
  })

}

activateImageTextSlider(document.querySelectorAll('.block_image_text .block--image'))
activateImageTextSlider(document.querySelectorAll('.content_gallery-action .block--image'))
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

activateCardImagesSlider(document.querySelectorAll('.block_list .card .card--image'))




// Слайдер в табах
let activateTabsSlider = ( slider ) => {
    let tabs = slider.querySelectorAll('button')
    if ( tabs.length > 1 ) {

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
        watchOverflow: true,
        mousewheel: {
          forceToAxis: true,
        },
        slideClass: 'tabs_slide',
        navigation: {
          nextEl: swiper_nav_next,
          prevEl: swiper_nav_prev,
        },
        on: {
          init: function (swiper) {
            swiper.slides.forEach((sl, index) => {
              sl.addEventListener('click', ()=>{
                tabs_slider.slideTo(tabs_slider.clickedIndex)
              })
            })
          }
        },
      });

      slider.appendChild(slider_controls);
    }
}
document.querySelectorAll(' .block--sections').forEach(section =>{
  activateTabsSlider(section)
})

// swiper content_animation-4
let animation4 = document.querySelector('.content_animation-4')
if (animation4) {

  if (window.matchMedia("(max-width: 768px)").matches) {
    const content_animation_slider = new Swiper(animation4.querySelector('.animation--image'), {
      createElements: true,
      slidesPerView: 1.1,
      // effect: "fade",
      grabCursor: true,
      simulateTouch: true,
      freeMode: false,
      allowTouchMove: true,
      // loop: true,
      mousewheel: {
        forceToAxis: true,
      },
      slideClass: 'img',
      navigation: false,
      pagination: false,
      breakpoints: {
        320: {
          spaceBetween: 8
        },
        768: {
          slidesPerView: 2.1,
          spaceBetween: 24,
        }
      },
    });
  }
}

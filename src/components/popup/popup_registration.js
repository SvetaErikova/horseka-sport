

PopupManager.register('popup_for_form', {
    is_block_scroll: true,
    close_controls: true,
  },
  {
    on_close: (popup_element, params) => {
      popup_element.querySelector('form').reset();
    }
  }
);
PopupManager.register('popup_for_cookies', {
    is_block_scroll: true,
    close_controls: true,
  },
  {
    on_close: (popup_element, params) => {

    }
  }
);
PopupManager.register('popup_for_filters', {
    additional_close_controls: false,
    is_block_scroll: true,
  },
  {
    on_open: (popup_element, params) => {
      let block_to_clone = params.block;
      let block_content = block_to_clone.cloneNode(true);
      popup_element.querySelector('.popup--form').appendChild(block_content);
      checkSelect()
      resetSelect(popup_element)

      // resetSelect(popup_element)
    },
    on_close: (popup_element, params) => {
      setTimeout(() =>
        popup_element.querySelector('.popup--form').innerHTML = ""
      , 180)
    }
  }
);
// PopupManager.register('popup_for_balloon',{
//     is_block_scroll: true,
//     close_controls: false,
//   },{
//     on_open: (popup_element, params) => {
//       popup_element.querySelector('.balloon--image img').src = params.placemark.balloonImage;
//       popup_element.querySelector('.balloon--title').textContent = params.placemark.balloonHeader;
//       popup_element.querySelector('.balloon--text').textContent = params.placemark.balloonContent;
//       popup_element.querySelector('a').href = params.placemark.balloonLink;
//     },
//   }
// );

// PopupManager.register('popup_for_scheme',{
//     is_block_scroll: true,
//     close_controls: false,
//   },
//   {
//     on_open: (popup_element, params) => {
//       let title = popup_element.querySelector('.popup__content-title'),
//         description = popup_element.querySelector('.popup__content-text'),
//         image = popup_element.querySelector('img'),
//         link = popup_element.querySelector('.js-popup--sheme_link'),
//         tour = popup_element.querySelector('.js-popup--sheme_tour')
//
//       let scheme_object = SCHEME_PLACEMARKS[params.id] ? SCHEME_PLACEMARKS[params.id] : SCHEME_PLACEMARKS[0]
//
//       title.textContent = scheme_object.title;
//       description.textContent = scheme_object.description;
//       image.src = scheme_object.image;
//       link.href = scheme_object.link;
//       tour.href = scheme_object.tour;
//     }
//   }
// );



PopupManager.register('popup_menu',{
    is_block_scroll: true,
    close_controls: false,
  },
  {
    on_open: (popup_element, params)=>{
      if ( window.matchMedia('(min-width: 992px)').matches ) {
        document.documentElement.scrollTop > 0
          ? popup_element.style.paddingTop = header.querySelector('.header--main').getBoundingClientRect().height + "px"
          : popup_element.style.paddingTop = header.getBoundingClientRect().height + "px"
      }
      header.classList.add('is_menu_opened')

      if ( window.matchMedia('(min-width: 1024px)').matches ) {
        menu_items[0].classList.add('is_open')
      }

    },
    on_close: (popup_element, params) => {
      header.classList.remove('is_menu_opened')
      menu_items.forEach( item => {
        item.classList.remove('is_open')
      })
    }
  }
);


PopupManager.register('popup_cascade',
  {
    is_block_scroll: true,
    close_controls: true,
  },
  {
    on_open: (popup_element, params) => {
      // popup_element.querySelector('.is_cascade').innerHTML = "123"
    },
    on_close: (popup_element, params) =>{
      setTimeout(()=>{
        popup_element.querySelector('.is_cascade').innerHTML = ""
      }, 180)

    }
  }
);
PopupManager.register('popup_for_infrastructure',{
    is_block_scroll: false,
    close_controls: false,
  },
  {
    on_open: (popup_element, params) => {

      let title = popup_element.querySelector('.popup--content-title'),
        description = popup_element.querySelector('.popup--content-text'),
        image = popup_element.querySelector('img'),
        link = popup_element.querySelector('.js-popup--infrastructure_link'),
        tour = popup_element.querySelector('.js-popup--infrastructure_other')

      let infrastructure_object = INFRASTRUCTURE_PLACEMARKS[params.id] ? INFRASTRUCTURE_PLACEMARKS[params.id] : INFRASTRUCTURE_PLACEMARKS[0]

      title.textContent = infrastructure_object.title;
      description.textContent = infrastructure_object.description;
      image.src = infrastructure_object.image;
      link.href = infrastructure_object.link;
      tour.href = infrastructure_object.other;
    }
  }
);

// Tour Map
PopupManager.register('popup_for_tour',{
    is_block_scroll: false,
    close_controls: false,
  },{
    on_open: (popup_element, params) => {
      popup_element.querySelector('.popup--content-title').textContent = params.placemark.balloonHeader;
      popup_element.querySelector('.popup--content-text').textContent = params.placemark.balloonContent;
    },
  }
);

// Add event Listeners to open Popups
// Элемент (data-openpopup=""), где data-openpopup = popup.name

let open_popup_buttons = document.querySelectorAll('[data-openpopup]');

function activatePopupButtons(buttons){
  buttons.forEach(b => {

    b.addEventListener('click', (e)=>{
      e.preventDefault();

      if ( b.dataset.openpopup === "popup_for_filters") {
        let block_to_clone = b.parentElement.querySelector('.filter');
        if (block_to_clone) {
          PopupManager.open(b.dataset.openpopup, {block: block_to_clone})
        }
      }
      else if ( b.dataset.openpopup === "popup_for_infrastructure" ) {
          PopupManager.open(b.dataset.openpopup, {
            id: b.dataset.id ? b.dataset.id : '0'
          })
        } else{
        PopupManager.open(b.dataset.openpopup);
      }
    })

  });
}

activatePopupButtons(open_popup_buttons)


/* Open popup after page loaded*/
window.addEventListener('load', ()=>{
  // PopupManager.open('popup_for_cookies')
  // PopupManager.open('popup_for_form')
})

/* Open popup after page loaded 1 time per session */
window.addEventListener('load', ()=>{
  if ( localStorage.getItem('popState') !== 'shown' ) {

  //   localStorage.setItem('popState','shown')
  }
})


let menu_button = document.querySelectorAll('.menu_button');

menu_button.forEach(b => {
  b.addEventListener('click', (e)=>{

    if ( document.querySelector('.popup[data-popup="popup_menu"]').classList.contains("is_active") ) {
      PopupManager.close("popup_menu")
    }
    else {
      PopupManager.open("popup_menu")
    }

  })
})


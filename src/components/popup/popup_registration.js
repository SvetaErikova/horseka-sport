// PopupManager.register('popup_for_vacancy_form', {
//     close_controls: true,
//     is_block_scroll: false,
//   },
//   {
//     on_close: (popup_element, params) => {
//       popup_element.querySelector('form').reset();
//     }
//   }
// );

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

const is_hidden = (element) => element.classList.contains('hidden');

PopupManager.register('popup_notification',
  {
    is_block_scroll: false,
    close_controls: false,
  },
  {
    on_open: (popup_element, params) => {
      for(const [param, state] of Object.entries(params)) {

        if (state !== false && param !== null) {
          popup_element.querySelector('[data-notification="'+param+'"]').classList.remove('hidden')

          if (typeof state === 'object') {
            popup_element.querySelector('[data-notification="'+param+'"] .popup--title').textContent = state.title
            popup_element.querySelector('[data-notification="'+param+'"] .popup--text').textContent = state.text
          }
        }
        else if ( state === false ) {
          popup_element.querySelector('[data-notification="'+param+'"]').classList.add('hidden')
        }
      }

      let close_notification_button = popup_element.querySelectorAll('[data-closenotification]')

      close_notification_button.forEach(b => {
        b.addEventListener('click', ()=>{
          b.closest('.popup--content').classList.add('hidden')

          if ( [...popup_element.querySelectorAll('.popup--content')].every(is_hidden) ) {
            PopupManager.close('popup_notification')
          }
        })
      })
    },
  }
);

// PopupManager.open('popup_notification', {
//   error: false,
//   //     {
//   //   title: "Сообщение об ошибке",
//   //   text: "Текст, содержащий причину ошибки и способ её решения"
//   // },
//   success: false,
//     //   {
//     //   title: "Успешное действие",
//     //   text: "Сопутствующий текст, зависящий от контекста"
//     // },
//   cookies: false,
//   advert: true,
//   alert: true
// })
// window.addEventListener('load', ()=>{
//   if ( sessionStorage.getItem('popState') !== 'shown' ) {
//     PopupManager.open('popup_notification', {
//       error: false,
//       //     {
//       //   title: "Сообщение об ошибке",
//       //   text: "Текст, содержащий причину ошибки и способ её решения"
//       // },
//       success: false,
//       //   {
//       //   title: "Успешное действие",
//       //   text: "Сопутствующий текст, зависящий от контекста"
//       // },
//       cookies: false,
//       advert: true,
//       alert: true
//     })
//     sessionStorage.setItem('popState','shown')
//   }
// })


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
        // popup_element.querySelector('.is_cascade').innerHTML = ""
      }, 180)

    }
  }
);

PopupManager.register('popup_mobile_contacts',
  {
    is_block_scroll: true,
    close_controls: false,
  },
  {
    on_open: (popup_element, params) => {
    },
    on_close: (popup_element, params) =>{
    }
  }
);


// Add event Listeners to open Popups
// Элемент (data-openpopup=""), где data-openpopup = popup.name

let open_popup_buttons = document.querySelectorAll('[data-openpopup]');

function activatePopupButtons(buttons){
  buttons.forEach(b => {

    b.addEventListener('click', (e)=>{
      e.preventDefault();

      PopupManager.open(b.dataset.openpopup);

    })

  });
}

activatePopupButtons(open_popup_buttons)


/* Open popup after page loaded*/
window.addEventListener('load', ()=>{
  // PopupManager.open('popup_for_cookie')
  // PopupManager.open('popup_for_form')
})

/* Open popup after page loaded 1 time per session */
window.addEventListener('load', ()=>{
  // if ( localStorage.getItem('popState') !== 'shown' ) {
  //   active_manager.openPopup('popup_for_welcoming')
  //   localStorage.setItem('popState','shown')
  // }
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


/* Скролл хедера */
let last_scroll = 0;

window.addEventListener('scroll', (e) => {
  if ( window.matchMedia('(max-width: 992px)').matches ) {
    // let current_scroll = window.pageYOffset || document.documentElement.scrollTop;
    //
    // current_scroll >= last_scroll && current_scroll
    //   ? header.classList.add('scrolled-up')
    //   : header.classList.remove('scrolled-up')
    //
    // last_scroll = current_scroll
  }

  document.documentElement.scrollTop > 0
    ? header.classList.add('is_scrolled')
    : header.classList.remove('is_scrolled')

})

window.addEventListener('load', (e) => {
  document.documentElement.scrollTop > 0
    ? header.classList.add('is_scrolled')
    : header.classList.remove('is_scrolled')
})


/* Меню в хедере */
let menu_items = document.querySelectorAll('.popup-menu .menu')


menu_items.forEach( item => {

  item.addEventListener('mouseover', (e)=>{
    menu_items.forEach(it => {
      it === e.currentTarget ? item.classList.add('is_open') : it.classList.remove('is_open')
    })
  })

  if ( window.matchMedia('(max-width: 1024px)').matches ) {
    let menu_link =  item.querySelector('.menu--item:not(:only-child)')

    if ( menu_link ) {
      menu_link.addEventListener('click', (e) => {
        e.preventDefault()
      })
    }

    item.addEventListener('click', (e)=>{
      if ( !item.classList.contains('is_open')  ) {
        item.classList.add('is_open')
      }
    })

    let close_button = item.querySelector('.js_mobile_backwards')

    if ( close_button ){
      close_button.addEventListener('click', (e)=>{
        e.stopPropagation()
        item.classList.remove('is_open')
      })
    }

  }

})

function isOverflown(element) {
  return element.scrollWidth > element.clientWidth;
}

/* Навигация в хедере */

if ( window.matchMedia('(min-width: 993px)').matches ) {

  let header_nav = document.querySelector('.header--nav .nav')
  let dropdown_button = header_nav.querySelector('.nav--item.is_dropdown')
  let dropdown_menu = header_nav.querySelector('.is_dropdown--wrapper .is_dropdown--content')

  function hideOverflownElements() {
    let last_link = header_nav.querySelector('a.nav--item:last-of-type')
    header_nav.removeChild(last_link)
    dropdown_menu.appendChild(last_link)
    dropdown_button.classList.remove('hidden')
  }

  function showOverflownElements() {
    let last_link = dropdown_menu.firstChild
    if (last_link ){
      dropdown_menu.removeChild(last_link)
      header_nav.appendChild(last_link)
      dropdown_button.classList.add('hidden')
    }
  }


  if ( isOverflown(header_nav) ) {
    while( isOverflown(header_nav) ){
      hideOverflownElements()
    }
  }
  // else {
  //
  //     // showOverflownElements()
  //
  // }

  window.addEventListener('resize', ()=>{
    if ( isOverflown(header_nav) ) {
      while( isOverflown(header_nav) ){
        hideOverflownElements()
      }
    }
    // else {
    //   while( !isOverflown(header_nav) ){
    //     showOverflownElements()
    //   }
    // }
  })

}



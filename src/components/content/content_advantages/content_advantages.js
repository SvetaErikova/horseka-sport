
/* Блок преимуществ  */

let block_with_advantages = document.querySelectorAll('.content_links')

block_with_advantages.forEach(block => {

  let buttons = block.querySelectorAll('.links_item[data-filter]')
  let images = block.querySelectorAll('.links_image--item[data-filter]')

  buttons.forEach(button =>{

    button.addEventListener('mouseenter', (e)=>{
      let videos = block.querySelectorAll('video')
      videos.forEach(v => {
        v.pause()
      })

      buttons.forEach(b => {
        b !== e.currentTarget ? b.classList.remove('is_active') : b.classList.add('is_active')
      })

      images.forEach(i => {
        i.dataset.filter === button.dataset.filter ? i.classList.add('is_active') : i.classList.remove('is_active')
        if ( i.querySelector('video') ) {
          i.querySelector('video').play()
        }
      })

    })
  })

})

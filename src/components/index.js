// gsap.registerPlugin(ScrollTrigger);


let header = document.querySelector('.header');

window.addEventListener('load', () => {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`)


    let scrollbar_width = window.innerWidth - document.documentElement.clientWidth
    document.documentElement.style.setProperty('--scrollbarWidth', `${scrollbar_width}px`)


  let header_height = header.getBoundingClientRect().height
  document.documentElement.style.setProperty('--headerHeight', `${header_height}px`)

});


window.addEventListener('resize', () => {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`)

  let header_height = header.getBoundingClientRect().height
  document.documentElement.style.setProperty('--headerHeight', `${header_height}px`)

})



/* Остановка видосов при выходе из экрана */
window.onload = () => {
  let video = document.querySelectorAll('.block:not(.block_banner) video')

  let video_observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      let video = entry.target
      // если видео запущено
      if (!video.paused) {
        // приостанавливаем проигрывание
        video.pause()
      } else {
        // если видео было запущено ранее (текущее время проигрывания > 0)
        video.pause()
      }
    })

  }, { threshold: 0.7 })

  if ( video.length > 1) {
    video.forEach(v => {
      video_observer.observe(v)
    })
  }
}


let image_with_video_in_view = document.querySelectorAll('.ac-play_video_in_view')

image_with_video_in_view.forEach(bl => {

  let video_in_view = bl.querySelector('video')

  let special_video_observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      let video_in_view = entry.target
      // если видео запущено
      if (!video_in_view.paused) {
        // приостанавливаем проигрывание
        video_in_view.pause()
      } else {
        // если видео было запущено ранее (текущее время проигрывания > 0)
        video_in_view.pause()
      }
    })

  }, { threshold: 0.1 })

  if ( video_in_view.length > 1) {
    special_video_observer.observe(video_in_view)
  }
})

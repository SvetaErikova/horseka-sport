// gsap.registerPlugin(ScrollTrigger);


let header = document.querySelector('.header ');


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
// window.onload = () => {
//   let video = document.querySelectorAll('.block:not(.block_banner) video')
//
//   let video_observer = new IntersectionObserver((entries) => {
//     entries.forEach(entry => {
//       let video = entry.target
//       // если видео запущено
//       if (!video.paused) {
//         // приостанавливаем проигрывание
//         video.pause()
//       } else {
//         // если видео было запущено ранее (текущее время проигрывания > 0)
//         video.pause()
//       }
//     })
//
//   }, { threshold: 0.7 })
//
//   if ( video.length > 1) {
//     video.forEach(v => {
//       video_observer.observe(v)
//     })
//   }
// }





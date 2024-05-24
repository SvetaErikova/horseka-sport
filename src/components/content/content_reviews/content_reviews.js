let review_videos = document.querySelectorAll('.block_list .card video')

review_videos.forEach(video => {
  video.addEventListener('mouseenter', (e)=>{
    video.play()
  })
  video.addEventListener('mouseleave', ()=>{
    video.pause()
  })
})

if ( window.matchMedia('(max-width: 768px)').matches ) {
  let card_reviews = document.querySelectorAll('.card--image:has(video)')
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

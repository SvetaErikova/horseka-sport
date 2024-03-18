let review_videos = document.querySelectorAll('.content_reviews video')

review_videos.forEach(video => {
  video.addEventListener('mouseenter', (e)=>{
    video.play()
  })
  video.addEventListener('mouseleave', ()=>{
    video.pause()
  })
})

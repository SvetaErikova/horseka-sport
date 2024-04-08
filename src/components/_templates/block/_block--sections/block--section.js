let tabs = document.querySelectorAll('.block--sections button')
tabs.forEach( tab =>{
  tab.addEventListener("click", (e) =>{
    tabs.forEach(t =>{
        t === e.currentTarget ? t.classList.add('is_active')  : t.classList.remove('is_active')
      })


    })


})

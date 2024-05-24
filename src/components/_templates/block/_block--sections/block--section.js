let blockSections = document.querySelectorAll('.block--sections')

blockSections.forEach(block =>{
  let tabs = block.querySelectorAll('button')
  tabs.forEach( tab =>{
    tab.addEventListener("click", (e) =>{
      tabs.forEach(t =>{
        t === e.currentTarget ? t.classList.add('is_active')  : t.classList.remove('is_active')
      })
    })
  })
  document.addEventListener("DOMContentLoaded", () => {
    if(tabs){
      // tabs[0].click()
    }
  });
})


let blockTabs = document.querySelectorAll('.js-tabs')
blockTabs.forEach(block =>{
  let tabs = block.querySelectorAll('.block--sections [data-target]')
  let item = block.querySelectorAll('[data-content]')
  tabs .forEach(tab =>{

    tab.addEventListener("click", t =>{
      t = t.currentTarget
      item.forEach(i =>{
        t.dataset.target === i.dataset.content ? i.classList.remove('hidden')  : i.classList.add('hidden')
      })
    })
  })
  tabs[0].click()

})


let INFRASTRUCTURE_PLACEMARKS = {
  0: {
    title: "Название объекта",
    description: "Краткое описание объекта",
    image: "../assets/img/2.jpg",
    link: "/",
    other: ""
  },
  1: {
    title: "1 Просторные денники для лошадей с самыми высокими требованиями",
    description: "Светлые, просторные конюшни с денниками 3×3.8 метра, снабженными системой отопления, вентиляцией и автопоилками. ",
    image: "../assets/img/hourse.jpg",
    link: "/",
    other: "/"
  },
  2: {
    title: "2",
    description: "Краткое описание объекта",
    image: "../assets/img/g2.jpg",
    link: "/",
    other: ""
  },
  3: {
    title: "3",
    description: "Краткое описание объекта",
    image: "../assets/img/1.jpg",
    link: "/",
    other: ""
  },
  4: {
    title: "4",
    description: "Краткое описание объекта",
    image: "../assets/img/hourse.jpg",
    link: "/",
    other: ""
  },
  5: {
    title: "5",
    description: "Краткое описание объекта",
    image: "../assets/img/hourse.jpg",
    link: "/",
    other: ""
  },
  6: {
    title: "6",
    description: "Краткое описание объекта",
    image: "../assets/img/hourse.jpg",
    link: "/",
    other: ""
  },
  7: {
    title: "7",
    description: "Краткое описание объекта",
    image: "../assets/img/hourse.jpg",
    link: "/",
    other: ""
  },
  8: {
    title: "8",
    description: "Краткое описание объекта",
    image: "../assets/img/hourse.jpg",
    link: "/",
    other: ""
  },
}
let infrastructureBlock = document.querySelector('.content_infrastructure')
if(infrastructureBlock){
  // TABS
  let tabs = infrastructureBlock.querySelectorAll('.block--sections button')
  tabs.forEach(tab =>{
    let popupNumber = infrastructureBlock.querySelector('.popup .popup--number')
    let placemarks = infrastructureBlock.querySelectorAll('.placemark')
    tab.addEventListener('click', (e)=>{
      PopupManager.close('popup_for_infrastructure')
      let a = e.currentTarget.dataset.target
      let p = ' .placemark[data-content='+'"'+a+'"'+'] '
      let placemark = infrastructureBlock.querySelector(p)

        PopupManager.open('popup_for_infrastructure', {
          id: placemark.getAttribute('data-id')
        })

          placemarks.forEach(pl =>{
          placemark === pl ? pl.classList.add('is_active') : pl.classList.remove('is_active')
          popupNumber.dataset.number = placemark.getAttribute('data-id')

        })
      })
      placemarks.forEach(pl =>{
          pl.addEventListener('click', (e)=>{
            popupNumber.dataset.number = e.currentTarget.getAttribute('data-id')
          })
      })
    })

//   placemark
  let placemarks = infrastructureBlock.querySelectorAll('.placemark')
  placemarks.forEach(pl =>{
    pl.addEventListener('click', (e)=>{
      placemarks.forEach(pl =>{
        e.currentTarget === pl ? pl.classList.add('is_active') : pl.classList.remove('is_active')
      })
    })
  })
}

let scheme = document.querySelector('.content_scheme')

if ( scheme ) {
  let svg = scheme.querySelector('.scheme')
  let legend = scheme.querySelector('.scheme_legend')
  let legend_button = scheme.querySelector('.scheme_legend--title')
  let legend_filters = scheme.querySelector('.scheme_legend--dropdown')

  legend_button.addEventListener('click', ()=>{
    legend.classList.toggle('is_active')

  })

  /* Инстаточки, фото на ховер на точку*/
  let photo_placemarks = scheme.querySelectorAll('.placemark_photo')

  photo_placemarks.forEach(item => {
    let image_wrapper = document.createElement('div')
    let image = document.createElement('img')
    image_wrapper.appendChild(image)

    item.addEventListener('mouseover', (e)=>{
      image_wrapper.classList.add('is_active')
      image_wrapper.classList.add('placemark_photo--image')
      image.src = item.dataset.src

      scheme.append(image_wrapper)

      if ( e.clientX > window.innerWidth/2 ) {
        image_wrapper.style.cssText = `
          left:${(e.clientX)}px;
          top:${(e.clientY)}px;
          transform: translate(calc(-100% - 24px), 16px)
        `
      }
      else {
        image_wrapper.style.cssText = `
          left:${(e.clientX)}px;
          top:${(e.clientY)}px;
          transform: translate(24px, 16px)
        `
      }
    })

    item.addEventListener('mouseleave', (e)=>{
      image_wrapper.classList.remove('is_active')
    })

    if ( window.matchMedia('(max-width:992px)').matches ) {

      item.addEventListener('click', (e)=>{
        image_wrapper.classList.add('is_active')
        console.log('is_active')
        image_wrapper.classList.add('placemark_photo--image')
        image.src = item.dataset.src

        scheme.append(image_wrapper)

        setTimeout(()=>{
          image_wrapper.classList.remove('is_active')
        }, 3000)
        window.addEventListener('scroll', ()=>{
          image_wrapper.classList.remove('is_active')
        }, {once: true})
      })

    }

  })

  /* Точки объектов и фильтры */
  let placemarks = scheme.querySelectorAll('.placemark')
  let placemarks_filters = scheme.querySelectorAll('.scheme_legend--filter')


  placemarks_filters.forEach(filter => {
    filter.addEventListener('click', ()=>{
      placemarks_filters.forEach(i => {
        i === filter? i.classList.add('is_active') : i.classList.remove('is_active')
      })

      placemarks.forEach(pm => {
        if ( filter.dataset.type === "all"){
          pm.classList.remove('is_hidden')
        }
        else {
          pm.dataset.type === filter.dataset.type ? pm.classList.remove('is_hidden') : pm.classList.add("is_hidden")
        }
      })
    })
  })
  function getCoords(pm){
    return  pm.getBBox();
  }
  function getCoeff(){
    return  svg.getBoundingClientRect().width / 1920
  }

  placemarks.forEach(pm => {
    let tooltip = document.createElement('div');
    let tooltip_title = document.createElement('h3')

    scheme.append(tooltip);
    tooltip.append(tooltip_title)

    tooltip.classList.add('scheme--tooltip');

    let title;
    pm.dataset.title ? title = pm.dataset.title : title = "Заголовок метки"
    tooltip_title.textContent = title;

    let coords = getCoords(pm);
    let coeff = getCoeff();

    tooltip.style.cssText = `left:${(coords.x*coeff)+(pm.getBBox().width*coeff / 2)}px;top:${(coords.y*coeff)}px;`

    pm.addEventListener('mouseover', (e)=>{
      tooltip.classList.add('is_visible')
    })

    pm.addEventListener('mouseleave', (e)=>{
      tooltip.classList.remove('is_visible')
    })
  })

  if ( window.matchMedia('(max-width:992px)').matches ){

    let scheme_panzoom = new Panzoom(scheme.querySelector('.content_scheme--scheme'), {
      click: false,
      wheel: false,
      maxScale: 4,
      minScale: 2,
      step: 0.5,
      bounce: false,
      panOnlyZoomed: true,
      on: {
        ready: (instance) => {
          instance.zoomToCover()
        }
      },
      bounds: {
        top: 0,
        bottom: 0
      }
    });
    scheme_panzoom.toggleZoom()
    scheme_panzoom.zoomToCover()

  }

  if ( scheme.classList.contains('js_copyCoords') ){
    let coords_tooltip = document.createElement('div')
    coords_tooltip.classList.add('coords_tooltip')
    scheme.appendChild(coords_tooltip)

    let pt = svg.createSVGPoint();

    svg.addEventListener('click', (e)=>{
      pt.x = e.clientX;
      pt.y = e.clientY;


      let cursorpt =  pt.matrixTransform(svg.getScreenCTM().inverse());

      coords_tooltip.style =
        "left:"+(e.clientX)
        +"px;top:"+ (e.clientY) + "px"

      coords_tooltip.textContent =
        "Координаты клика - x: "
        + Math.round(cursorpt.x)
        + "; y: "+ Math.round(cursorpt.y)
        + ". Координаты скопированы!"

    })
  }
}

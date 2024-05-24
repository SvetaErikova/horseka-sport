/* Map Yandex Places */

let map_tour = document.getElementById('map_tour')
let content_tour_map_block = document.querySelector('.content_tour_map')


if ( map_tour && content_tour_map_block) {
  ymaps.ready(init_tour_maps);

  function init_tour_maps() {

    let map_tour_settings = {};

    if (  typeof SITE_MAP_SETTINGS === 'undefined' || SITE_MAP_SETTINGS === null ){
      map_tour_settings = {
        coords: [56.026875, 38.279307],
      };
    } else {
      map_tour_settings = {...SITE_MAP_SETTINGS}
    }

    // if (  typeof TOUR_MAP_ARRAY === 'undefined' || TOUR_MAP_ARRAY === null ){
      let TOUR_MAP_ARRAY = [
        {
          coords: [56.026875, 38.279307],
          title: "Поселок Ивановское",
          text: "Долгое и подробное описание, которое может занимать до трех строк текста, а может уходить в ограничение",
        }, {
          coords: [56.001380, 38.184928],
          title: "День 2",
          text: "Текст с кратким описанием достропримечательности",
        }, {
          coords: [56.046615, 37.983746],
          title: "День 3",
          text: "Краткий текст о достопримечательности 2",
        },
      ]
    // }

    let tour_map = new ymaps.Map("map_tour", {
      center: map_tour_settings.coords,
      zoom: 16,
      controls: [],
    },);

    tour_map.behaviors.disable('scrollZoom');

    if ( window.matchMedia("(max-width: 768px)").matches ) {
      tour_map.behaviors
        .disable('drag')
        .enable('multiTouch');
    }

    let places_on_map = new ymaps.GeoObjectCollection({}, {});

    let icon_layout = ymaps.templateLayoutFactory.createClass(
      '<svg transform="translate(14,0)" class="placemark"  width="46" height="46" viewBox="0 0 96 96" fill="none" data-active="$[properties.data_active]" xmlns="http://www.w3.org/2000/svg">' +
      '<circle cx="44.9992" cy="45.0002" r="30.8" fill="white"/>' +
      '<circle cx="44.9992" cy="45.0002" r="27.8" fill="" stroke="#FC563B" stroke-width="6"/>' +
      '<text class="map--placemark_content" x="34" y="59"  fill="#FC563B" font-size="42px">$[properties.iconContent]</text>'+
      '</svg>'
    )

    let line_coords = []

    let accent_color = window.getComputedStyle(document.documentElement).getPropertyValue('--accent-2')

    let tours_sections = content_tour_map_block.querySelector('.block--sections_container')

    for(let i = 0; i < TOUR_MAP_ARRAY.length; i++){

      let section_item = document.createElement('button')
      section_item.textContent = TOUR_MAP_ARRAY[i].title

      line_coords.push(TOUR_MAP_ARRAY[i].coords)

      let placemark = new ymaps.Placemark(TOUR_MAP_ARRAY[i].coords,{
          balloonHeader: TOUR_MAP_ARRAY[i].title,
          balloonContent: TOUR_MAP_ARRAY[i].text,
          iconContent: i + 1,
          placemark_index: i,
          data_active: 'active'
        },{
          iconLayout: "default#imageWithContent",
          iconImageHref: '/assets/img/icons/Union.svg',
          iconImageClipRect: [[0,0], [56, 56]],
          iconImageSize: [56, 56],
          iconImageOffset: [-28, -28],
          iconContentOffset: [0, 0],
          iconContentLayout: icon_layout,
          zIndex: 3,
          zIndexHover: 4,
          balloonShadow: false,
          balloonPanelMaxMapArea: 0,
          hasBalloon: false,
          clicked_placemark: true,
          opacity: 1
        }
      )

      tours_sections.appendChild(section_item)

      section_item.addEventListener('click',(e)=>{
        tours_sections.querySelectorAll("button").forEach(it => {
          it === section_item ? it.classList.add('is_active') : it.classList.remove('is_active')
        })
        PopupManager.open('popup_for_tour', {placemark: placemark.properties._data})
        tour_map.panTo([placemark.geometry._coordinates])

        placemark.properties.set('data_active', 'active');

        places_on_map.each(function (geoObject) {
          if (geoObject !== placemark) {
            geoObject.properties.set('data_active', 'not_active');
          }
        })
      })

      placemark.events.add([
        'balloonopen', 'balloonclose', 'hintopen', 'hintclose', 'dragstart', 'dragend', 'click'
      ], function (e) {

        placemark.properties.set('data_active', 'active');

        places_on_map.each(function (geoObject) {
          if (geoObject !== placemark) {
            geoObject.properties.set('data_active', 'not_active');
          }
        })
        tours_sections.querySelectorAll("button").forEach(it => {
          it === section_item ? it.classList.add('is_active') : it.classList.remove('is_active')
        })
        PopupManager.open('popup_for_tour', {placemark: placemark.properties._data})
        tour_map.panTo([placemark.geometry._coordinates])
      });
      places_on_map.add(placemark)
    }

    tour_map.geoObjects.add(places_on_map);

    // Линия для тура
    let dashed_polyline = new ymaps.Polyline([
      ...line_coords
    ], {}, {
      strokeColor: accent_color.toString(),
      strokeWidth: 2,
      strokeStyle: 'dash',
      strokeOpacity: 0.6
    });

    tour_map.geoObjects.add(dashed_polyline);
    tour_map.setBounds(places_on_map.getBounds());

  }
}

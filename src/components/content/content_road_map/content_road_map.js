/* Map Yandex Places */

let map_road = document.getElementById('map_road')
let content_road_map_block = document.querySelector('.content_road_map')

if ( map_road && content_road_map_block) {
  ymaps.ready(init_road_map);
  function init_road_map(){
    var myMap = new ymaps.Map("map_road", {
      center: [56.026875, 38.279307],
      zoom: 12,
      controls: ['zoomControl'],
    });


    myMap.geoObjects
      .add(new ymaps.Placemark([56.026875, 38.279307], {
        balloonContent: 'Horseka resort',
        hintContent: 'Horseka resort'
      }, {
        iconLayout: 'default#imageWithContent',
        iconImageHref: '/assets/img/vector.svg',
        iconImageSize: [48, 48],
        iconImageOffset: [-12, -12],
      }))

    myMap.behaviors.disable('scrollZoom')
    if ( window.matchMedia("(max-width: 768px)").matches ) {
      myMap.behaviors
        .disable('drag')
        .enable('multiTouch');
    }
  }


}

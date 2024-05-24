let map_contacts = document.getElementById('map')
if(map_contacts){
  ymaps = window.ymaps;
  ymaps.ready(init);
  function init(){
    var myMap = new ymaps.Map("map", {
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
        iconImageHref: '/assets/img/Vector.svg',
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

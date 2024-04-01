let map_container = document.getElementById('map')

if ( map_container ) {

  const pointHotel = [55.933554, 38.211476];
  ymaps.ready(init);
  function init() {
      // const map = new ymaps(map_container, {
      //   center: pointMriya,
      //   zoom: 16,
      //   pitch: 45,
      //   scrollWheelZoom: false,
      //   fullscreenControl: false,
      //   geoclicker: true,
      // });
    let map = new ymaps.Map(map_container, {
      center: pointHotel,
        zoom: 10,
      // controls: ['routeButtonControl'],
    });

    };


  // const map = new mapgl.Map('map', {
  //   center: [33.940552,44.396348],
  //   zoom: 17,
  //   rotation: 0,
  //   pitch: 35,
  //   disableZoomOnScroll: true,
  //   touchZoom: false,
  //   zoomControl: "centerRight",
  //   key: '042b5b75-f847-4f2a-b695-b5f58adc9dfd',
  //   style: 'd8849245-4f50-4d7a-98b5-f1df8c83eeb7',
  //
  // });


}

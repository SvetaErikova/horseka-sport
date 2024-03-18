//
// /* Map Yandex Places */
//
// let map_places = document.getElementById('map_places')
//
// if ( map_places ) {
//   ymaps.ready(init);
//
//   function init() {
//     var map = new ymaps.Map("map_places", {
//       center: [55.75581406897683,37.59460249999997],
//       zoom: 15,
//       controls: ['routeButtonControl', 'zoomControl'],
//     });
//
//     // var placemark_main = new ymaps.GeoObjectCollection({
//     // }, {
//     //
//     // })
//
//     map.geoObjects.add(new ymaps.Placemark([55.75581406897683,37.59460249999997], {
//       balloonHeader: "Отель",
//       balloonContent: "Описание отеля",
//       balloonLink: "",
//       balloonImage: "/assets/img/1.jpg",
//     },{
//       hasBalloon: false,
//       iconImageClipRect: [[0,0], [54, 80]],
//       iconLayout: 'default#image',
//       iconImageHref: "/assets/img/1.jpg",
//       iconImageSize: [40, 50],
//       iconImageOffset: [-20, -50],
//     }));
//
//     // map.geoObjects.add(placemark_main);
//
//     /* AROUND_MAP_ARRAY */
//     let AROUND_MAP_ARRAY = [
//       {
//         coords: [59.752582, 30.355149],
//         image: "./assets/img/1.jpg",
//         title: "Эрмитаж",
//         text: "Описание",
//         link: "/gallery.html",
//       }, {
//         coords: [59.722582, 30.352149],
//         image: "./assets/img/1.jpg",
//         title: "Заголовок",
//         text: "Текст с кратким описанием достропримечательности",
//         link: "/gallery.html",
//       }, {
//         coords: [59.724582, 30.452149],
//         image: "./assets/img/1.jpg",
//         title: "Заголовок 2",
//         text: "Краткий текст о достопримечательности 2",
//         link: "/gallery.html",
//       },
//     ]
//
//     var places_on_map = new ymaps.GeoObjectCollection({ }, {
//       iconLayout: 'default#image',
//       iconImageClipRect: [[0,0], [54, 80]],
//       iconImageSize: [40, 50],
//       iconImageOffset: [-20, -50],
//       zIndex: 3,
//       zIndexHover: 4,
//     });
//
//
//     for(let i = 0; i < AROUND_MAP_ARRAY.length; i++){
//
//       places_on_map.add(new ymaps.Placemark(AROUND_MAP_ARRAY[i].coords,{
//           balloonHeader: AROUND_MAP_ARRAY[i].title,
//           balloonContent: AROUND_MAP_ARRAY[i].text,
//           balloonLink: AROUND_MAP_ARRAY[i].link,
//           balloonImage: AROUND_MAP_ARRAY[i].image,
//         },{
//           iconLayout: 'default#image',
//           iconImageClipRect: [[0,0], [54, 80]],
//           iconImageHref: AROUND_MAP_ARRAY[i].image,
//           balloonShadow: false,
//           balloonPanelMaxMapArea: 0,
//           hasBalloon: false,
//         }
//       ))
//     }
//
//     map.geoObjects.add(places_on_map)
//
//     map.geoObjects.events.add('click', function (e) {
//       var object = e.get('target');
//
//       PopupManager.open('popup_for_balloon', { placemark: object.properties._data} )
//
//       map.panTo([object.geometry._coordinates])
//
//
//     });
//
//     map.setBounds(places_on_map.getBounds());
//
//   }
// }

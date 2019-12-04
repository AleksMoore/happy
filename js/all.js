/* Slider */

$(function() {
    $('.slider__wrapper').owlCarousel({
        items: 1,
        loop: true,
        center: true,
        margin: 0,
        nav: true,
        URLhashListener: true,
        startPosition: 'one'
    });
   });
   
   /* End Slider */
   
   /* Company */
   
   $(function() {
     $('.company__inner').owlCarousel({
           items:3,
           loop:true,
           center:true,
           margin:0,
           nav: true,
           URLhashListener:true,
            responsive: {
                0: {
                    items: 1
                },
                1200: {
                    items: 3
                }
            }
       });
   });
   
   /* End Company */


/* API yandex map */ 

ymaps.ready(init);

function init() {
    var myMap = new ymaps.Map("map", {
        center: [55.717974, 37.677454],
        zoom: 15
    }, {
            searchControlProvider: 'yandex#search'
        }),

        // Создаем геообъект с типом геометрии "Точка".
        myGeoObject = new ymaps.GeoObject({
            // Описание геометрии.
            geometry: {
                type: "Point",
                coordinates: [55.717974, 37.677454]
            },
            // Свойства.
            properties: {
                // Контент метки.
                balloonContent: '115088, г.Москва, Шарикоподшипниковская, д.13 стр.2'
            }
        }, {
                // Опции.
                // Иконка метки будет растягиваться под размер ее содержимого.
                preset: 'islands#dotIcon',
                iconColor: '#008DE3'
            })

    myMap.geoObjects
        .add(myGeoObject);
}

/* End API yandex map */

function init(){
  let map = new ymaps.Map('map',{
    center:[53.9161800325037,27.465993999999984],
    zoom:16
  });
  let local = new ymaps.Placemark([53.9161800325037,27.465993999999984],{},{
   iconLayout:'default#image',
   iconImageHref:'../Caramel/svg/local.svg',
   iconImageSize:[50,50],
   iconImageOffset: [-30,-60]
  });
map.controls.remove('geolocationControl'); // удаляем геолокацию
map.controls.remove('searchControl'); // удаляем поиск
map.controls.remove('trafficControl'); // удаляем контроль трафика
map.controls.remove('typeSelector'); // удаляем тип
map.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
map.controls.remove('zoomControl'); // удаляем контрол зуммирования
map.controls.remove('rulerControl'); // удаляем контрол правил
map.behaviors.disable(['scrollZoom']); // отключаем скролл карты (опционально)
map.geoObjects.add(local);
}
ymaps.ready(init);

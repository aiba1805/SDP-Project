var map;

var sites = [
    ['University', 43.2349327, 76.90977931]
];

function setMarkers(map, locations) {
    for (var i = 0; i < locations.length; i++) {
        var p = locations[i];
        var myLatLng = new google.maps.LatLng(p[1], p[2]);

        var marker = new google.maps.Marker({
            position: myLatLng,
            map: map,
            title: p[0]
        });
    }
}

function init(){
  var mapProp= {
    center:new google.maps.LatLng(43.2349327, 76.90977931),
    zoom:17,
  };
  map=new google.maps.Map(document.getElementById("map"),mapProp);
  setMarkers(map, sites);
}

google.maps.event.addDomListener(window,"load",init)

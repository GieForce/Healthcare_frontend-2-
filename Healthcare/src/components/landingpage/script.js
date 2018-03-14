function myMap() {
    var myCenter = new google.maps.LatLng(52.722306, 6.465789);
    var mapCanvas = document.getElementById("map");
    var mapOptions = {center: myCenter, zoom: 15};
    var map = new google.maps.Map(mapCanvas, mapOptions);
    var marker = new google.maps.Marker({position:myCenter});
    marker.setMap(map);
}
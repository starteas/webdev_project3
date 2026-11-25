function initMap() {

  const markers = [
    {
      locationName: 'Paris Baguette',
      lat: 41.8692031,
      lng: -87.6243417,
      address: '1100 S Michigan Ave,Chicago, IL 60605'
    },
    {
      locationName: 'Sweet Bean Bakery',
      lat: 41.867694,
      lng: -87.625979,
      address: '1152 S Wabash Ave,Chicago, IL 60605'
    }
  ];

  const centerMap = { lat: 41.869254, lng: -87.623963 }

  const mapOptions = {
    center: centerMap,
    zoom: 16,
    disableDefaultUI: true
  }

  const map = new google.maps.Map(document.getElementById('map'), mapOptions);

  const marker = new google.maps.Marker({
    position: { lat: markers[0]['lat'], lng: markers[0]['lng'] },
    map: map,
  });

  const infoWindow = new google.maps.InfoWindow({
    content: 'This is Paris Baguette! It is located at<br>' + markers[0]['address'] + '<br>Enjoy their lovely pastries and drinks!'
  });

  marker.addListener('click', () => {
    infoWindow.open({ map, anchor: marker });
  });

  const marker2 = new google.maps.Marker({
    position: { lat: markers[1]['lat'], lng: markers[1]['lng'] },
    map: map,
  });

  const infoWindow2 = new google.maps.InfoWindow({
    content: 'This is Sweet Bean Bakery! It is located at<br>' + markers[1]['address'] + '<br>I recommend their tiramisu and matcha!'
  });

  marker2.addListener('click', () => {
    infoWindow2.open({ map, anchor: marker2 });
  });
}

document.getElementById("questions").addEventListener("click", () => {
  window.alert("If you have any questions, please contact me at aadenso@hawk.iit.edu");
});

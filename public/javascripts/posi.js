function position() {
  geocoder = new google.maps.Geocoder();
  var address = document.getElementById("address").value;
  var loc = new Promise(function(resolve, reject) {
    geocoder.geocode({ address: address }, function(results, status) {
      if (status == google.maps.GeocoderStatus.OK) {
        resolve(results);
      }
    });
  });
  loc.then(function(results) {
    document.getElementById("lat").value = +results[0].geometry.location.lat();
    document.getElementById("long").value = +results[0].geometry.location.lng();
  });
}

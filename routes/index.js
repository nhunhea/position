var express = require('express');
var router = express.Router();
var Geocoder = require('node-geocoder');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

function position(address,res) {
  // geocoder = new google.maps.Geocoder();
  // var address = document.getElementById("address").value;
  var lati, long;
  var option = {
    provider: 'google',
    httpAdapter: 'https',
    apiKey: AIzaSyBpk20FbiTlQeiV5gCPRY_83idTVbLpyDI,
    formatter: null
  }
  var geocoder = Geocoder(option);

  var loc = new Promise (function(resolve, reject) {
    geocoder.geocode({ 'address': address }, function(results, err) {
      if (err) {
        reject (err);
      } else {
        resolve(results);
      }
    });
  });
  loc.then(function(results) {
    lati = results[0].latitude;
    long = results[0].longitude;
    console.log(address);
    res.render('index', { address: address, lng: long, lat: lati})
  });
}

router.post('/', function(req,res){
  console.log(req.body.address);
  var address = req.body.address;
  position(address,res);
});

module.exports = router;

var express = require('express');
var router = express.Router();
const axios=require('axios');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/submit', function(req, res) { 
  const city = req.query.city 
  const url_api = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=48de5d9c639020db555ab0c7bb79a33e`;
axios.get(url_api)
 .then(function (response) { 
  res.render('index',{data:response.data})
  //res.send(response.data)//
 }) .catch(function (error) { 
  res.send(error);
})
});

module.exports = router;
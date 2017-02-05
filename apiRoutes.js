var Router = require('express').Router;
var router = new Router();

router.post('/city', function(req, res) {
  res.send('posting to cities');
});

router.post('/country', function(req, res) {
  res.send('posting to countries');
});

router.post('/adminArea', function(req, res) {
  res.send('posting to administrative areas');
});

module.exports = router;
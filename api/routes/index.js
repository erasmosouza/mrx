var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET home page. */
router.post('/api/v1/webhook_jira', function(req, res, next) {
  //res.render('webhook', { title: req.body });
  res.json(req.body)
});

module.exports = router;

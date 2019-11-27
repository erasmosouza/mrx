var express = require('express');
var router = express.Router();
const db = require('../queries')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* Post */
router.post('/api/v1/webhook_jira', db.createEvent);

module.exports = router;

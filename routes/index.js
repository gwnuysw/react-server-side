const express = require('express');
const router = express.Router();
const template = require('../views/server/template');

//SSR function import
const ssr = require('../views/server/server');

/* GET home page. */
router.get('/', function(req, res, next) {
  const content = ssr();
  const rendered = template(content);
  res.send(rendered);
});

module.exports = router;

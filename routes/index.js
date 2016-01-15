'use strict';
//const      express = require('express');
const        router = require('express').Router();
const uploadManager = require('./uploadManager')(router);

/* GET home page. */
router.get('/', (req, res) => {
  res.render('index', { title: 'MEAN Workshop' });
});

module.exports = router;

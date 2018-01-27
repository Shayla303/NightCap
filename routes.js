var express = require('express');
var router = express.Router();
var queries = require('./queries')

router.get('/', function(req,res,next) {
  queries.getItems()
  .then((menuData) => {
    res.json(menuData)
  })
})


module.exports = router

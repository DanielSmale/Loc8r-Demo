var express = require('express');
var router = express.Router();
const ctrolMain = require('../controllers/main');


/* GET home page. */
router.get('/', ctrolMain.index);

module.exports = router;
  
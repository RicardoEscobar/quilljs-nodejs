var express = require('express');
var router = express.Router();
const dataController = require('../controllers/data');

/* GET home page. */
router.get('/', dataController.getIndex);

module.exports = router;

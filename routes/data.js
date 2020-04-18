var express = require('express');
var router = express.Router();
const dataController = require('../controllers/data');

// POST /data/add/
router.post('/add', dataController.postData);

module.exports = router;
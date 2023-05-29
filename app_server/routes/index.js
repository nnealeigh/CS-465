const express = require('express');
const router = express.Router();
const ctrlMain = require('../controllers');

/* GET home page. */
router.get('/', ctrlMain.index);

module.exports = router;

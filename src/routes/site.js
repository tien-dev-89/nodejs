var express = require('express');
var router = express.Router();

const newsController = require('../app/controlles/SiteController');

// newsController.index
router.use('/search', newsController.search);
router.use('/', newsController.index);

module.exports = router;

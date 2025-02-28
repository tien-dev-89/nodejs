var express = require('express');
var router = express.Router();

const meController = require('../app/controlles/MeController');

// courseController.index
router.get('/stored/courses', meController.storedCourses);

module.exports = router;

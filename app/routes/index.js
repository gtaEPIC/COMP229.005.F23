var express = require('express');
var router = express.Router();

let indexController = require('../controllers/index');

/* GET home page. */
router.get('/', indexController.home);

router.get('/about', indexController.about);

router.get('/projects', indexController.project);

router.get('/services', indexController.service);

module.exports = router;

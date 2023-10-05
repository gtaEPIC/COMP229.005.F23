var express = require('express');
var router = express.Router();

let usersController = require('../controllers/users');

/* GET users listing. */
router.get('/', usersController.users);
router.post('/create', usersController.create);
router.get('/:id', usersController.getUserById);
router.put('/:id', usersController.update);
router.delete('/:id', usersController.remove);

module.exports = router;

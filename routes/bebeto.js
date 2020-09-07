var express = require('express');
var router = express.Router();
const BebetoController = require('../controllers/Bebeto');

router.get('/', BebetoController.index);
router.get('/:id', BebetoController.show);
router.post('/new', BebetoController.store);
router.put('/edit/:id', BebetoController.update);
router.delete('delete/:id', BebetoController.destroy);

module.exports = router;

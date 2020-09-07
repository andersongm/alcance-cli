var express = require('express');
var router = express.Router();
const JucaController = require('../controllers/Juca');

router.get('/', JucaController.index);
router.get('/:id', JucaController.show);
router.post('/new', JucaController.store);
router.put('/edit/:id', JucaController.update);
router.delete('delete/:id', JucaController.destroy);

module.exports = router;

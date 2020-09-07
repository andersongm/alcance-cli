var express = require('express');
var router = express.Router();
const RomarioController = require('../controllers/Romario');

router.get('/', RomarioController.index);
router.get('/:id', RomarioController.show);
router.post('/new', RomarioController.store);
router.put('/edit/:id', RomarioController.update);
router.delete('delete/:id', RomarioController.destroy);

module.exports = router;

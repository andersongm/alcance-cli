var express = require('express');
var router = express.Router();
const PessoaController = require('../controllers/Pessoa');

router.get('/', PessoaController.index);
router.get('/:id', PessoaController.show);
router.post('/new', PessoaController.store);
router.put('/edit/:id', PessoaController.update);
router.delete('delete/:id', PessoaController.destroy);

module.exports = router;

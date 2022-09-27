const { Router } = require('express');
let express = require('express');
let router = express.Router();

let produtoController = require('../controllers/produtoController');


router.get('/criar', produtoController.viewform);
router.post('/criar', produtoController.salvarForm);
router.get('/sucesso', produtoController.sucesso);



module.exports = router
var express = require('express');
var router = express.Router();
var VerificaUsuarioLogado = require('../middleware/VerificaUsuarioLogado');

const AuthController = require('../controllers/AuthController');

router.get('/', AuthController.showLogin);
router.get('/registro', AuthController.showRegistro);
router.get('/home', AuthController.showHome);
router.get('/login', AuthController.showLogin);
router.post('/login', AuthController.login);

module.exports = router;

const express = require('express');
const router = express.Router();
const ctrl = require("../controllers/usuarios.controller"); 
const path = require('path'); // Importação da biblioteca path
const multer = require('multer');
const uploadsDir = path.join('C:', 'xampp', 'htdocs', 'uploads');
const upload = multer({ dest: uploadsDir });

const _ctrl = new ctrl();

// Define a rota raiz
// router.get('/', (req, res) => _ctrl.usuario(req, res));

// Defina outras rotas conforme necessário
router.get('/usuarios/:chave', (req, res) => _ctrl.usuario(req, res));

router.get('/acessorapido/:cargo', (req, res) => _ctrl.acessoRapido(req, res));

router.get('/token', (req, res) => _ctrl.token(req, res));
router.get('/validation/:token', (req, res) => _ctrl.validation(req, res));
router.post('/imagens', upload.single('file'), (req, res) => _ctrl.imagens(req, res));

router.post('/login', (req, res) => _ctrl.login(req, res));
router.post('/createUsers', (req, res) => _ctrl.createUsuario(req, res));
router.post('/alterasenha', (req, res) => _ctrl.alteraSenha(req, res));

router.get('/avatar/:chave',  (req, res) => _ctrl.avatar(req, res));

router.get('/chave',  (req, res) => _ctrl.chave(req, res));


module.exports = router;

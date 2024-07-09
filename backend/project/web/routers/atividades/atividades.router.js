const express = require('express');
const router = express.Router();
const ctrl = require("../../controllers/atividades/atividades.controller"); 
const path = require('path'); // Importação da biblioteca path
const multer = require('multer');
const uploadsDir = path.join('/', 'var', 'www', 'html', 'atividades');
const upload = multer({ dest: uploadsDir });

const _ctrl = new ctrl();

console.log("visitas");
// Define a rota raiz
// router.get('/', (req, res) => _ctrl.usuario(req, res));

// Defina outras rotas conforme necessário
router.get('/usuarios/:token', (req, res) => _ctrl.usuario(req, res));
router.get('/avatar',  (req, res) => _ctrl.avatar(req, res));

router.get('/obterAtividade',  (req, res) => _ctrl.obterAtividade(req, res));
router.get('/obertVideos',  (req, res) => _ctrl.obertVideos(req, res));


router.post('/imagensvisitas', upload.single('file'), (req, res) => _ctrl.imagens(req, res));
router.post('/gravaAtividade', upload.single('file'), (req, res) => _ctrl.gravaAtividade(req, res));
router.post('/editarAtividade', upload.single('file'), (req, res) => _ctrl.editarAtividade(req, res));
router.post('/gravaVideos',  (req, res) => _ctrl.gravaVideos(req, res));






module.exports = router;

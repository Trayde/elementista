const express = require('express');
const router = express.Router();
const ctrl = require("../../controllers/atividades/atividades.controller"); 
const path = require('path'); // Importação da biblioteca path
const multer = require('multer');
const uploadsDir = path.join('/', 'var', 'www', 'html', 'atividades');
const upload = multer({ dest: uploadsDir });

const _ctrl = new ctrl();

console.log("atividades");
// Define a rota raiz
// router.get('/', (req, res) => _ctrl.usuario(req, res));

// Defina outras rotas conforme necessário
router.get('/usuarios/:token', (req, res) => _ctrl.usuario(req, res));
router.get('/avatar',  (req, res) => _ctrl.avatar(req, res));

router.get('/obterAtividade',  (req, res) => _ctrl.obterAtividade(req, res));
router.get('/obterAtividadeId/:id',  (req, res) => _ctrl.obterAtividadeId(req, res));
router.get('/obertVideos',  (req, res) => _ctrl.obertVideos(req, res));
router.get('/obertVideosId/:id',  (req, res) => _ctrl.obertVideosId(req, res));
router.get('/deleteAtividade/:id',  (req, res) => _ctrl.deleteAtividade(req, res));
router.get('/deleteVideos/:id',  (req, res) => _ctrl.deleteVideos(req, res));
router.get('/obterTutoriais',  (req, res) => _ctrl.obterTutoriais(req, res));
router.get('/obterTutoriaisId/:id',  (req, res) => _ctrl.obterTutoriaisId(req, res));
router.get('/obterAgua',  (req, res) => _ctrl.obterAgua(req, res));
router.get('/obterAguaId/:id',  (req, res) => _ctrl.obterAguaId(req, res));
router.get('/obterAr',  (req, res) => _ctrl.obterAr(req, res));
router.get('/obterArId/:id',  (req, res) => _ctrl.obterArId(req, res));
router.get('/obterTerra',  (req, res) => _ctrl.obterTerra(req, res));
router.get('/obterTerraId/:id',  (req, res) => _ctrl.obterTerraId(req, res));
router.get('/obterFogo',  (req, res) => _ctrl.obterFogo(req, res));
router.get('/obterFogoId/:id',  (req, res) => _ctrl.obterFogoId(req, res));






router.post('/imagensvisitas', upload.single('file'), (req, res) => _ctrl.imagens(req, res));
router.post('/gravaAtividade', upload.single('file'), (req, res) => _ctrl.gravaAtividade(req, res));
router.post('/editarAtividade', upload.single('file'), (req, res) => _ctrl.editarAtividade(req, res));
router.post('/gravaVideos',  (req, res) => _ctrl.gravaVideos(req, res));
router.post('/editarVideos',  (req, res) => _ctrl.editarVideos(req, res));
router.post('/gravaTutoriais', upload.single('file'),  (req, res) => _ctrl.gravaTutoriais(req, res));
router.post('/editarTutoriais', upload.single('file'), (req, res) => _ctrl.editarTutoriais(req, res));
router.post('/gravaAgua', upload.single('file'),  (req, res) => _ctrl.gravaAgua(req, res));
router.post('/editarAgua', upload.single('file'), (req, res) => _ctrl.editarAgua(req, res));
router.post('/gravaAr', upload.single('file'),  (req, res) => _ctrl.gravaAr(req, res));
router.post('/editarAr', upload.single('file'), (req, res) => _ctrl.editarAr(req, res));
router.post('/gravaTerra', upload.single('file'),  (req, res) => _ctrl.gravaTerra(req, res));
router.post('/editarTerra', upload.single('file'), (req, res) => _ctrl.editarTerra(req, res));
router.post('/gravaFogo', upload.single('file'),  (req, res) => _ctrl.gravaFogo(req, res));
router.post('/editarFogo', upload.single('file'), (req, res) => _ctrl.editarFogo(req, res));



module.exports = router;

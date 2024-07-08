const express = require('express');
const https = require('https');
const fs = require('fs');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const usuarios = require('./project/web/routers/usuarios.router');
const imagens = require('./project/web/routers/usuarios.router');
const atividades = require('./project/web/routers/atividades/atividades.router');

const port = 5000;

app.use(bodyParser.json({ limit: '2gb' })); 
app.use(bodyParser.urlencoded({ extended: true }));

const options = {
  key: fs.readFileSync('/etc/letsencrypt/live/apienerge.apololab.net/privkey.pem'),
  cert: fs.readFileSync('/etc/letsencrypt/live/apienerge.apololab.net/fullchain.pem')
};

app.use(cors()); // Permite requisições de todos os domínios
app.use('/', usuarios); 
app.use('/imagens', imagens); // Associa o middleware 'usuarios' apenas a requisições para '/usuarios'
app.use('/imagensvisitas' , atividades);
app.use('/atividades' , atividades);

https.createServer(options, app).listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});

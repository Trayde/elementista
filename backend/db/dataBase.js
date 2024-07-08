const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'srv1436.hstgr.io', // Endereço do servidor MySQL
  user: 'u570853006_aventureiro',      // Usuário do MySQL
  password: 'imjCNnsWeuC/.2E2', // Senha do usuário
  database: 'u570853006_avt' // Nome do banco de dados
});

connection.connect((err) => {
  if (err) {
    console.error('Erro ao conectar ao banco de dados: ', err);
    return;
  }
 // console.log('Conexão com o banco de dados estabelecida com sucesso!');
});

module.exports = connection;

"use strict";
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');
const { Container } = require("../../../infra/middlewares/dependency.injection");
//const PerfilUsuariosRepository = require("../../../infra/repositories/usuarios/perfilUsuarios.repository");
module.exports = class PerfilLoginServices {

    constructor() {
        const container = Container();
        this.perfilUsuariosRepository = container.resolve("perfilUsuariosRepository");
        
        
    }


    async chave() {
        const chave = await this.perfilUsuariosRepository.chave();

        console.log("cahveee",chave);
        return chave;
    }
   
    async perfilHome(chave) { 
        const perfil = await this.perfilUsuariosRepository.perfilHome(chave);
        
        return perfil;
    }

    async acessoRapido(cargo) {
        const acesso = await this.perfilUsuariosRepository.acessoRapido(cargo);
        
        return acesso;
    }


    async alteraSenha(dados){

        const senha = dados.senha
        const saltRounds = 10; // Número de rounds para gerar o salt
        const hash = await bcrypt.hash(senha, saltRounds);
        const retorno = await this.perfilUsuariosRepository.alteraSenha(dados, hash);
        if (retorno.nome) {
            const valid = await this.perfilUsuariosRepository.alteraSenhaValidada(retorno.id_usuario);
            return "alterado"
        } else {
            return "falha na alteração"
        }
    
    }
       async verificarLogin(verificarLogin) {
        const retorno = await this.perfilUsuariosRepository.verificarLogin(verificarLogin);
        return retorno;
    }
    
        async login(dados) {
        const retorno = await this.perfilUsuariosRepository.login(dados);
        if (retorno) {
            // Verifica a senha
            let Promesa = retorno.map(async (user) => {
                const match = await bcrypt.compare(dados.password, user.passaword);
                if (match === false) {
                    return user = {
                        status: "falha",
                        usuario: 'Usuário ou senha inválidos'
                    }
                } else {
                    var token = jwt.sign({ id: 1 }, "D62ST92Y7A6V7K5C6W9ZU6W8KS3", {
                        expiresIn: 600 //10 min
                        //expiresIn: 60 //1 min
                        // expiresIn: '1d' // 7 dia
                    });
                    user["token"] = token;
                    return user;
                }
            })
            // Aguarda todas as promessas serem resolvidas e retorna o primeiro resultado
            const resultados = await Promise.all(Promesa);
            return resultados[0]; // Retorna o primeiro resultado da lista de promessas resolvidas
        } else {
            return user = {
                status: "falha",
                usuario: 'Usuário ou senha inválidos'
            }
        }
    }
    
        async createUsuario(dados) {
        console.log("creat", dados);

        const verificaEmail = await this.perfilUsuariosRepository.verfEmail(dados);

        console.log("verificaEmail", verificaEmail);

         if(!verificaEmail){

            const senhaPadrao = `avtclube2024${dados.nome}`
            const saltRounds = 10; // Número de rounds para gerar o salt
            const hash = await bcrypt.hash(senhaPadrao, saltRounds);
            const retorno = await this.perfilUsuariosRepository.createUsuario(dados, hash);
        
            retorno.map(async (us) => {
                const token = jwt.sign({ id: us.id_usuario, email: us.email }, "ACP21102014WY7#A6V7K5C6W9ZU6W8AVT", {
                    //expiresIn: 600 //10 min
                    //  expiresIn: 60 //1 min
                    expiresIn: '7d' // 7 dia
                });
        
                const criaValidator = await this.perfilUsuariosRepository.validate(us, token);
                     await this.perfilUsuariosRepository.chaveInsert(us.chave);
                // Configuração do transporte de e-mail
                let transporter = nodemailer.createTransport({
                    host: 'smtp.hostinger.com', // Servidor SMTP
                    port: 465, // Porta do servidor SMTP
                    secure: true, // true para 465, false para outras portas
                    auth: {
                        user: 'clube.aventureiros@clubesavt-app.com', // Seu e-mail
                        pass: '156328lU*' // Sua senha
                    }
                });
        
                // Opções do e-mail
                let mailOptions = {
                    from: '"APP Clube Aventureiros " <clube.aventureiros@clubesavt-app.com>', // Remetente
                    to: us.email, // Lista de destinatários
                    subject: 'Cadastro de senha', // Assunto do e-mail
                    text: 'Validação de usuário e senha !!', // Corpo do e-mail em texto puro
                    html: `<b>Olá ${us.nome},</b> <br>
                                Esta mensagem refere-se seu cadastro no nosso APP <b>Clube Aventureiros</b> e esse é seu token de acesso valido por 7 dias:
                                <br>
                                <br>
                                Usuário: <b>${us.email}</b>
                                <br>
                                <br>
                                <br>
                                http://localhost:8080/verification?token=${token}
                        ` // Corpo do e-mail em HTML
                };
        
                // Enviar o e-mail
                transporter.sendMail(mailOptions, (error, info) => {
                    if (error) {
                        return console.log(error);
                    }
                    console.log('E-mail enviado: %s', info.messageId);
                    console.log('URL de visualização: %s', nodemailer.getTestMessageUrl(info));
                });
        
        
            })
        
            return retorno;
         } else {
            return "falha"
         }


    }
    
    async avatar(chave){
        const avatar = await this.perfilUsuariosRepository.avatar(chave);
        
        return avatar;
    }

    async visitasclube(dados) {
        console.log("service", dados);
        const visitasclube = await this.perfilUsuariosRepository.visitasclube(dados);
        
        return visitasclube;
    }
}
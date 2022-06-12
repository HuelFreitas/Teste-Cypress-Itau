# Testes Automatizados Itaú
## Acessar a página "Conta Corrente" do Banco Itaú, utilizando ferramenta de automação Cypress.io

<p align="center">
 <a href="#funcionalidade">Funcionalidade</a> •
 <a href="#pre-requisitos">Pré-requisitos</a> • 
 <a href="#primeiros passos">Primeiros Passos</a> • 
 <a href="#rodando a aplicacao web">Rodando a aplicação Web</a> • 
 <a href="#rodando o teste web">Rodando o teste Web</a> •
 <a href="#autor">Autor</a> • 
 <a href="#licen-a">Licença</a>
</p>

##
<h4 align="center"> 
	Projeto concluído ✅ 
</h4>
  
### 📂 Funcionalidade

- Como usuário, quero acessar o site itau.com.br
- Depois quero acessar a opção "para você" e depois acessar o assunto "conta corrente""
- Para saber informações de como abrir uma "conta corrente".
  
### 🚧 Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:

  [Git](https://git-scm.com), [Node.js](https://nodejs.org/en/), [Cypress.io](https://www.cypress.io), [Cucumber.io](https://cucumber.io). 

Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/)
  
### 🎲 Primeiros Passos

```bash
# Clone este repositório
$ git clone <[https://github.com/HuelFreitas/Teste-Automatizado-com-Cypress.io.git]>

# Instale as dependências
$ npm init
$ npm --save-dev cypress
$ npm install --save-dev mochawesome mochawesome-merge
$ mochawesome-report-generator 
$ npm install -D cypress-cucumber-preprocessor

```
### 🧭 Rodando o Teste Web

```bash
Com o VSCode aberto  
Acesse a pasta do projeto no seu terminal/cmd

Inicie o Cypress.io
$ npx cypress open

Selecione o arquivo .feature
$ Teste Itau.feature

A aplicação será aberta na porta:59832 - acesse [http://localhost:59832/__/#/tests/integration/Teste%20Itau.feature]
```
  
### 😯 Como contribuir para o projeto

- Faça um fork do projeto.
- Crie uma nova branch com as suas alterações: git checkout -b my-feature
- Salve as alterações e crie uma mensagem de commit contando o que você fez: git commit -m "feature: My new feature"
- Envie as suas alterações: git push origin my-feature

  - Caso tenha alguma dúvida confira este guia de como contribuir no [GitHub](https://github.com/firstcontributions/first-contributions)

## 💻 Autor

Hueliton F Oliveira
- [Entre em contato](https://www.linkedin.com/in/hueliton-f-oliveira-b497611b0/) !
  
## 📝 Licença

Este projeto esta sobe a licença [MIT](https://github.com/HuelFreitas/Teste-Cypress-Itau/blob/main/licence).

## 📚 Referências
- [Cypress](https://docs.cypress.io/guides/overview/why-cypress)
- [Loraine Garutti](https://medium.com/@lorainegarutti/automatização-de-testes-web-configurando-ambiente-cypress-mochawesome-147c4a2b51ff)
- [Blog Rocketseat](https://blog.rocketseat.com.br/como-fazer-um-bom-readme/)
- [Vitor Marinho](https://vitormarinheiroautomation.medium.com/cypress-page-object-sucesso-6841cb7c19a0)
- [Cypress Básico](https://www.udemy.com/course-dashboard-redirect/?course_id=2959042)
- [Cypress Intermediário](https://www.udemy.com/course-dashboard-redirect/?course_id=2959120)
- [Cypress Avançado](https://www.udemy.com/course-dashboard-redirect/?course_id=3909364)
- [Agilizei](https://www.youtube.com/watch?v=mfZfhp6Ql8c&list=WL&index=20&t=2741s)

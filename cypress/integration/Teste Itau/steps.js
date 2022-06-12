import Home from "../../support/pages/Home";

Given(/^que eu estou no navegador$/, () => {
    Home.definirTamanhoJanela();
});

And(/^acesso o site itau.com.br$/, () => {
	Home.acessarPagina();
});

When(/^eu clico em para você$/, () => {
	Home.acessarMenuParaVoce();
});

And(/^depois clico conta-corrente$/, () => {
	Home.acessarContaCorrente();
});

Then(/^consigo visualizar as informações necessárias para abrir uma conta corrente$/, () => {
	cy.contains('temos a conta certa para o seu momento de vida').should('be.visible')
});

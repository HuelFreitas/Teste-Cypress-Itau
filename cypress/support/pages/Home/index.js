const elem = require('./elements').ELEMENTS;

class home{

    definirTamanhoJanela(){
        cy.viewport(1440, 900);
    }

    acessarPagina(){
        cy.visit('/')
	    cy.title().should('be.equal', elem.tituloPagina)
    }

    acessarMenuParaVoce(){
        cy.contains("a", elem.menuParaVoce).click()
    }

    acessarContaCorrente(){
        cy.contains("a", elem.menuContaCorrente).click()
    }

}
export default new home();


describe ('Testando pesquisa do Google', () =>{
    it('Acessando um Ator no Google', () => {
        cy.visit ("https://www.google.com.br/")

        cy.get('#APjFqb')
            .should('be.visible')
                  .type('Walmyr Filho{enter}')

        //cy.get("body > div.L3eUgb > div.o3j99.ikrT4e.om7nvf > form > div:nth-child(1) > div.A8SBwf > div.RNNXgb > div > div.iblpc > div > span > svg").click();
    });
});


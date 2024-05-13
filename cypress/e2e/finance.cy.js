
describe ('Transacoes', () =>{

    // hooks -> executar antes ou depois / de cada ou de todos os testes
    // before
    // after
    //beforeEach
    // afterEach

    beforeEach(() =>{
        cy.visit ("https://devfinance-agilizei.netlify.app/#")
    });

    it('Cadastrar uma entrada', () => {
   
        criarTransacao("freela na segunda", 240)
        criarTransacao("freela na terça", 40)

        cy.get("tbody tr td.description").should("have.text", "freela")
    });
});

it('Excluir transacao', () =>{
     criarTransacao("freela", 100)

   //  cy.contains(".description", "freela")
     //   .parent()
      //  .find('img')
     //   .click()

         //OU

    cy.contains(".description", "freela")
        .siblings()
        .children('img')
        .click()

    cy.get('tbody tr').should("have.length", 1)
});

function criarTransacao(descricao, valor){
    cy.contains("Nova transacao").click()
    cy.get('#description').type(descricao)
    cy.get('#amount').type(valor)
    cy.get('#date').type("2023-02-14") // yyyy-mm-dd

    cy.contains('button', 'Salvar').click()
}

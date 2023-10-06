describe('Manipula contatos', () => {
  let numeroDeContatos = 0;
  beforeEach(() => {
    cy.visit('https://agenda-contatos-react.vercel.app/')
    cy.get('.sc-beqWaB.eQdhbg.contato').its('length').then((length) => {
      numeroDeContatos = length;
    });
  })
  
  it('Inclusão de contatos', () => {
    cy.get('input[placeholder="Nome"]').type('Albert Soares')
    cy.get('input[placeholder="E-mail"]').type('albert@gmail.com')
    cy.get('input[placeholder="Telefone"]').type('31988774455')
    cy.get('.adicionar').click()
    cy.get('.sc-beqWaB.eQdhbg.contato').should('have.length', numeroDeContatos + 1);
  })

  it('Alteração de contatos', () => {
    cy.get('.sc-beqWaB.eQdhbg.contato').eq(0).within(() => {
      cy.get('.edit').click();
    });
    cy.get('input[placeholder="Nome"]').clear().type('Ada Lovelace');
    cy.get('input[placeholder="E-mail"]').clear().type('ada@gmail.com');
    cy.get('input[placeholder="Telefone"]').clear().type('1234567890');
    cy.get('.alterar').click();
    cy.contains('Ada Lovelace').should('exist');
  });

  it('Exclusão de contatos', () => {
    cy.get('.sc-iAEyYk.jtXTMB').within(() => {
      cy.get('.sc-beqWaB.eQdhbg.contato').should('have.length', numeroDeContatos);
    });
    cy.get('.sc-beqWaB.eQdhbg.contato').eq(numeroDeContatos - 1).within(() => {
      cy.get('.delete').click();
    });
    cy.get('.sc-iAEyYk.jtXTMB').within(() => {
      cy.get('.sc-beqWaB.eQdhbg.contato').should('have.length', numeroDeContatos - 1);
    });
    cy.get('.sc-beqWaB.eQdhbg.contato').should('have.length', numeroDeContatos - 1);
  })
})
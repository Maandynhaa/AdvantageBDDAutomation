context("Consultar Api healt check", () => {
  it("validar consulta com sucesso", () => {
    cy.api('GET', "https://advantageonlineshopping.com/accountservice/accountrest/api/v1/health-check").as('Success')
    cy.get('@Success').then((res) => {
      cy.log(`Status: ${res.status}`)
      expect(res.status).deep.eq(200)
    })
  });
});

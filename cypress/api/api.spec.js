context("Consultar Api Trello", () => {
  it("validar consulta com sucesso", () => {
    cy.api('GET', "https://api.trello.com/1/actions/592f11060f95a3d3d46a987a").as('dataApi')
    cy.get('@dataApi').then((res) => {
      cy.log(res.body.data.list)
      cy.log(`Name: ${res.body.data.list.name}`)
      expect(res.status).deep.eq(200)
    })
  });
});

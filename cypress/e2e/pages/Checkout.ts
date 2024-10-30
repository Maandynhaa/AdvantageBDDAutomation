export class Checkout {
    private order = "//*[@id='checkOutButton']"

    placeTheOrder(): void {
        cy.log("Pagina de checkout")
        cy.wait(5000)
        cy.xpath(this.order).click()
        cy.log("Pedido")
    }
}
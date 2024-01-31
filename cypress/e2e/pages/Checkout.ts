export class Checkout {

    private order = "//a[contains(@href,'/payment')]"

    placeTheOrder(): void {
        cy.log("Pagina de checkout")
        cy.xpath(this.order).click()
        cy.log("Pedido")
    }
}
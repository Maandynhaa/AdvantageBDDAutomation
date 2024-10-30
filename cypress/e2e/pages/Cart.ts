export class Cart {

    private cart = "/html/body/header/nav/ul/li[2]"

    proceedToCheckout(): void {
        cy.xpath(this.cart).click()
        cy.log("Pagina de carrinho")
    }
}
export class Cart {

    private cartRows = "//table[@id='cart_info_table']/descendant::a[@data-product-id]"
    private checkout = "//a[contains(text(),'Proceed To Checkout')]"

    deleteOneTshirtFromCart(): void {
        cy.log("Pagina do carrinho")
        cy.xpath(this.cartRows).eq(0).click()
        cy.log("Uma camiseta deletada do carrinho")
    }

    proceedToCheckout(): void {
        cy.xpath(this.checkout).click()
        cy.log("Pafina de carrinho fechada")
    }
}
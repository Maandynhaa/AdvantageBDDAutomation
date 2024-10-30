export class Payment {

    private pageName = "//div[@id='orderPayment']"

    getPageName(): void {
        cy.xpath(this.pageName).should('be.visible')
        cy.log("Pagina de pagamento")
    }

}
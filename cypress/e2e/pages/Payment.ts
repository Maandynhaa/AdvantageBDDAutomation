export class Payment {

    private pageName = "//div[@class='step-one']"
    private cardName = "input[name='name_on_card']"
    private cardNumber = "input[name='card_number']"
    private cvcNumber = "input[name='cvc']"
    private expirationMonth = "input[name='expiry_month']"
    private expirationYear = "input[name='expiry_year']"
    private payAndConfirm = "#submit"

    getPageName(): void {
        cy.xpath(this.pageName).contains("Payment")
        cy.log("Pagina de pagamento")
    }

}
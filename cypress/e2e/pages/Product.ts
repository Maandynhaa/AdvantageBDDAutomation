export class Product {

    private searchClick = "div[id='laptopsImg']"
    private laptopCollection = "//*[@id='9']"
    private addCart = "//button[@name='save_to_cart']"

    clickSearchButton(): void {
        cy.get(this.searchClick).click()
        cy.log("Clicar na seleção de pesquisa dos laptops")
    }

    addLaptopToCart(): void {
        cy.wait(6000)
        cy.xpath(this.laptopCollection).click()
        cy.xpath(this.addCart).click()
        cy.log("laptop adicionado no carrinho")
    }
}
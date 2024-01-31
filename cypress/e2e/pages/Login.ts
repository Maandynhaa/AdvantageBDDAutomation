export class Login {
    private loginEmailAddress = ".login-form input[name='email']"
    private loginPassword = ".login-form input[name='password']"
    private loginLogInButton = "button[data-qa='login-button']"
    private loginName = "//*[contains(text(),'Logged in as')]"
    private productPageLink = "//*[contains(text(),'Products')]"

    load(): void {
        cy.log("Pagina de Login")
        cy.visit("https://www.automationexercise.com/login")
        cy.log("Logado")
    } 

    setLoginEmailAddress(value: string): void {
        cy.get(this.loginEmailAddress).type(value)
        cy.log("Campo email preenchido")
    }

    setLoginPassword(value: string): void {
        cy.get(this.loginPassword).type(value)
        cy.log("Campo senha preenchido ")
    }

    submit(): void {
        cy.get(this.loginLogInButton).click()
        cy.log("Clicado no botao login")
    }

    loggedUserNameVisible(): void {
        cy.xpath(this.loginName).should("have.text", " Logged in as testeteste")
    }

    openProductPage(): void {
        cy.xpath(this.productPageLink).click()
        cy.log("Pagina login")
        cy.log("Pagina produto aberta")
    }

}
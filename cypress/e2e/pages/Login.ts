export class Login {
    private loginUserButton = "svg[id='menuUser']"
    private loginUserName = ".login.ng-scope  input[name='username']"
    private loginPassword = ".login.ng-scope  input[name='password']"
    private loginLogInButton = "button[id='sign_in_btn']"
    private loginName = "(//*[contains(text(),'Login')])[2]"
    private loginIcorrect = "//*[contains(text(),'Incorrect')]"
    private productPageLink = "//*[contains(text(),'Products')]"
    
    load(): void {
        cy.log("Pagina de Login")
        cy.visit("https://advantageonlineshopping.com/#/")
        cy.log("Acesso a página")
    } 

    submits(): void {
        cy.get(this.loginUserButton).click()
        cy.wait(2000)
        cy.log("Clicado no usuario para o login")
    }

    setLoginUserName(value: string): void {
        cy.get(this.loginUserName).type(value)
        cy.log("Campo usuario preenchido")
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
        cy.xpath(this.loginName).should('be.visible')
        cy.log("Usuario logado")
    }

    loggedIncorrectVisible(): void {
        cy.xpath(this.loginIcorrect).should('be.visible')
        cy.log("Usuario ou senha invalido")
    }

    openProductPage(): void {
        cy.xpath(this.productPageLink).click()
        cy.log("Pagina login")
        cy.log("Pagina produto aberta")
    }

}
import { DataTable, Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";
import { Login } from "../pages/Login";
import { Product } from "../pages/Product";
import { Cart } from "../pages/Cart";
import { Checkout } from "../pages/Checkout";
import { Payment } from "../pages/Payment";

let login: any
let product: any
let cart: any
let checkout: any
let payment: any
let orderConfirmation: any

Given("usuario logar na pagina", () => {
    login = new Login()
    login.load()
})

When("entrar com usuario e senha valida", (table: DataTable) => {
    table.hashes().forEach(row => {
        login.setLoginEmailAddress(row.username)
        login.setLoginPassword(row.password)
    })
})

When("clicar no botao de login", () => {
    login.submit()
})

Then("usuario loga com sucesso na pagina de home", () => {
    login.loggedUserNameVisible()
})

Then("usuario procura produtos na pagina", () => {
    login.openProductPage()
})

When("pesquisar camisetas", (table: DataTable) => {
    product = new Product()
    table.hashes().forEach(row => {
        product.searchProductFromSearchBar(row.product)
    })
    product.clickSearchButton()
})

When("adiciona duas camisetas no carrinho", () => {
    product.addTshirtsToCart()
})

Then("usuario remove uma camiseta do carrinho", () => {
    cart = new Cart()
    cart.deleteOneTshirtFromCart()
})

Then("usuario processa a compra", () => {
    cart.proceedToCheckout()
    checkout = new Checkout()
    checkout.placeTheOrder()
})

Then("usuario e direcionado para o pagamento", () => {
    payment = new Payment()
    payment.getPageName()
})


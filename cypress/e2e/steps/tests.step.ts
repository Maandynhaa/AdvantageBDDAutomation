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

Given("usuario acessar a pagina", () => {
        login = new Login()
        login.load()
})

When("usuario logar na pagina", (table: DataTable) => {
    table.hashes().forEach(row => {
        login = new Login()
        login.submits()
        login.setLoginUserName(row.username)
        login.setLoginPassword(row.password)
        login.submit()
    })
})

Then("usuario loga com sucesso na pagina de home", () => {
    login.loggedUserNameVisible()
})

Then("usuario ou senha invalido", () => {
    login.loggedIncorrectVisible()
})

When("usuario seleciona lista de produtos na pagina", () => {
    product = new Product()
    product.clickSearchButton()
    product.addLaptopToCart()
})

When("adiciono o laptop", () => {
    product.addLaptopToCart()
})

Then("usuario processa a compra", () => {
    cart = new Cart()
    cart.proceedToCheckout()
    checkout = new Checkout()
    checkout.placeTheOrder()
})

When("usuario limpa a compra", () => {
    cart = new Cart()
    cart.proceedToCheckout()
    cart.proceedToCleanCart()

})

Then("usuario e direcionado para o pagamento", () => {
    payment = new Payment()
    payment.getPageName()
})


@tag1

  Feature: Exercicio de automacao
    Scenario: Login com sucesso e adicionar produtos no carrinho
      Given usuario logar na pagina
      When entrar com usuario e senha valida
        | username | password |
        | teste2021@teste.com.br | teste |
      And clicar no botao de login
      Then usuario loga com sucesso na pagina de home


      When usuario procura produtos na pagina
      And pesquisar camisetas
        | product |
        | tshirts |
      And adiciona duas camisetas no carrinho
      Then usuario remove uma camiseta do carrinho
      And usuario processa a compra
      And usuario e direcionado para o pagamento
      




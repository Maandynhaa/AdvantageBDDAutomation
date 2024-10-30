@tag1

  Feature: Exercicio de automacao
    Scenario: Acessar checkout com usuario logado
      Given usuario acessar a pagina
      When usuario logar na pagina
        | username | password |
        | LoginTeste | Teste123 |
      And usuario seleciona lista de produtos na pagina
      And usuario processa a compra
      Then usuario e direcionado para o pagamento
      
    Scenario: Acessar checkout sem logar
      Given usuario acessar a pagina
      When usuario seleciona lista de produtos na pagina
      And usuario processa a compra
      Then usuario e direcionado para o pagamento

    Scenario: Acessar com usuario incorreto
      Given usuario acessar a pagina
      When usuario logar na pagina
        | username | password |
        | LoginTeste1 | Teste123 |
      Then usuario ou senha invalido




/// <reference types="cypress" />

describe("Validação de um produto", () => {
    beforeEach(() => {
        cy.visit("https://totvs.store/");
        cy.get('#search').type("TOTVS Backoffice (Linha Protheus) - Gerador de Relatórios {enter}");
        cy.get('[href="https://totvs.store/br/produto/treinamento-relatorios.html"] > .product-card-title').invoke('text').as('ProdutoEscolhido');
        cy.get('[href="https://totvs.store/br/produto/treinamento-relatorios.html"] > .product-card-footer > .price-box > .price-show-more').click();
        cy.get('#product-price-298 > .price').invoke('text').as('valorProduto');
    })
    it( "Acessar o site", function () {
        cy.visit("https://totvs.store/");

    })

    it("Pesquisar produto", function () {
        cy.get('#search').type("TOTVS Backoffice (Linha Protheus) - Gerador de Relatórios{enter}");

    })
    
    it("Adicionar produto ao carrinho", function () {
        cy.get('#search').type("TOTVS Backoffice (Linha Protheus) - Gerador de Relatórios{enter}");
        cy.get('[href="https://totvs.store/br/produto/treinamento-relatorios.html"] > .product-card-footer > .price-box > .price-show-more').click();
        cy.get('.base').should('contain', this.ProdutoEscolhido);
        cy.get('#product-addtocart-button').click()
        cy.get('.price').should('contain', this.valorProduto);
        cy.get('.product-item-name > a').should('contain', this.ProdutoEscolhido);

})
})
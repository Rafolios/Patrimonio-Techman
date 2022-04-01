describe("Componente - Rodapé", ()=> {

    beforeEach(()=>{
        cy.visit("http://localhost:3000");
    })

    it("Deve existir uma tag footer no corpo do documento", () =>{
        cy.get("footer").should("exist")
    })

    it("Deve existir um texto Escola Senai de Informatica", () =>{
        cy.get(".rodapePrincipal section div p").should("have.text", "Escola SENAI de Informática - 2021")
    })

    
    it("Deve verificar se footer está vísivel e se possui uma classe chamada rodapePrincipal", () =>{
        cy.get("footer").should("be.visible").and("have.class", "rodapePrincipal")
    })
})
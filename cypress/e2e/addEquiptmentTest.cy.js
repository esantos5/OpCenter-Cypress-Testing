/// <reference types="Cypress" /> 

describe('My First Test', () => {

    it('Visits UADM => Go to Equiptment Page', () => { 
        // DESKTOP-PLJDU0J\Ethan

        cy.visit('http://desktop-pljdu0j/sit-ui/runtime/U4DM.Siemens_SIT_UADM/#/screen/home.homeCard')
        cy.wait(10000)
        cy.getIframe('iframe')
            // .contains('Work Orders').click() //works
            .contains(' Equipment ', {matchCase: true}).click() //works but goes to Equipment Levels because
                                           // first occurance of "Equipment"
        
        // cy.visit('http://desktop-pljdu0j/sit-ui/runtime/U4DM.Siemens_SIT_UADM/#/screen/home.Siemens_SimaticIT_Equipment_EquipmentEngineering_EquipmentLevelTile?mduiCtx=ewAiAHMAdABhAHQAZQBQAGEAcgBhAG0AcwAiADoAewB9ACwAIgB0AHIAYQBjAGsAaQBuAGcAIgA6AFsAXQB9AA%3D%3D')
        cy.wait(5000)
        cy.getIframe('iframe')
            .contains('Add Equipment Level').click({force: true}) // force allows click even when "not-visible"
            cy.wait(2000)
        cy.getIframe('iframe')
            .find("input").eq(0).click().type("testID")
            .tab().type("testName")
            .tab().type("testDescription")
            .tab().type("123").tab().click()
            
    })


})

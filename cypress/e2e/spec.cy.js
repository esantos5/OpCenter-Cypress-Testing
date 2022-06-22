/// <reference types="Cypress" /> 

describe('My First Test', () => {
  
  // beforeEach(() => {
  //   cy.login('DESKTOP-PLJDU0J\Ethan', "")
  // })
  
  // it('iframe', function() {
  //   it('iframe', function() {

  //     cy.visit('http://desktop-pljdu0j/sit-ui/system/studio/index.html#/screen/studioHome.solution')

  //     cy.get()
  //   })
  // })


  // it('Visits Solution Studio => Go to Host Management Page', () => {
  //   // visit Solution Studio Home Screen
  //   cy.visit('http://desktop-pljdu0j/sit-ui/system/studio/index.html#/screen/studioHome.solution')

  //   // click Host Management page
  //   cy.getIframe('iframe')
  //     .contains('Host Management').click() //check iframe body if it contains Host Management
  //   cy.title()

  // })


  // it('Select Host and start host', () => {

  //     // cy.getIframe('iframe').get('[id="hostListDiv"]').should('have.text', 'hostListDiv')
  //     cy.title()
  //     cy.url().should('include', 'studioHome.hostManagement') //check if on correct page 
  //     // cy.getIframe('iframe').contains('DESKTOP-PLJDU0J')//passes... but fails with .click() 
  //     cy.get('#cmdViewDeploymentScreens').should('be.visible') //cant find cmdViewDeploymentScreens 
      

  // })

  it('Visits UADM => Search for Equiptment', () => { 
    cy.visit('http://desktop-pljdu0j/sit-ui/runtime/U4DM.Siemens_SIT_UADM/#/screen/home')

    
  })

})
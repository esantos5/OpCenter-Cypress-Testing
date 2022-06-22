// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })


Cypress.Commands.add('getIframe', (iFrameLocator) => { //gets IFrame and contents within body
    return cy.get(iFrameLocator)
        .its('0.contentDocument.body').should('not.be.empty')
        // .should('be.visible')
        .then(cy.wrap);
})

// Cypress.Commands.add('iframe', { prevSubject: 'element' }, $iframe => {
//     return new Cypress.Promise(resolve => {
//         $iframe.ready(function() {
//           resolve($iframe.contents().find('body'));
//         });
//     });
//   });

Cypress.Commands.add('login', (username, password) => {
    cy.clearCookies() 
    cy.clearLocalStorage()
    cy.get('#username').type(username)
    cy.get('#password').type(password)
    cy.contains('Sign In').click()
})

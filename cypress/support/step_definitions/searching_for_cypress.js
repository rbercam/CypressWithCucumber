/// <reference types="Cypress" />
import { Given, Then } from "cypress-cucumber-preprocessor/steps";

Given(`I search for Cypress in Google page`, () =>{
    cy.get('.gLFyf').type('Kitchen Sink Cypress').type('{enter}')

})

Then(`I validate the search result`, ()=>{
    cy.get('.gLFyf').should('value', 'Kitchen Sink Cypress')
})
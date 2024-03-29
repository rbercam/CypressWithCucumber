/// <reference types="Cypress" />
import { Then } from "cypress-cucumber-preprocessor/steps";

Then(`I see {string} in the title`, (title) => {
  cy.title().should('be.eql', title)
})
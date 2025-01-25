import {HOMEPAGE_LOCATORS, LOGIN_LOCATORS, ACCOUNT_LOCATORS} from "../support/locators.js";
import {incorrectLoginMsg} from "../support/messages.js";

describe("Login test suite", () => {
    beforeEach(() => {
        cy.fixture("userData").then((userData) => {
            globalThis.userData = userData;
        })
        cy.visit("/");
        cy.get(HOMEPAGE_LOCATORS.loginOrRegisterButton).click();
    });

    it("Log in corrtecly", () => {
        cy.get(LOGIN_LOCATORS.email).type(userData.correctLogin);
        cy.get(LOGIN_LOCATORS.password).type(userData.correctPassword);
        cy.get(LOGIN_LOCATORS.loginButton).click();
        cy.get(ACCOUNT_LOCATORS.accountMenu).should("exist");
    });

    it('Log in with incorrect email', () => {
        cy.get(LOGIN_LOCATORS.email).type(userData.incorrectLogin);
        cy.get(LOGIN_LOCATORS.password).type(userData.correctPassword);
        cy.get(LOGIN_LOCATORS.loginForm).submit();
        cy.get(LOGIN_LOCATORS.loginErrorMessage).should("contain.text", incorrectLoginMsg);
    })

    it('Log in with incorrect password', () => {
        cy.get(LOGIN_LOCATORS.email).type(userData.correctLogin);
        cy.get(LOGIN_LOCATORS.password).type(userData.incorrectPassword);
        cy.get(LOGIN_LOCATORS.loginForm).submit();
        cy.get(LOGIN_LOCATORS.loginErrorMessage).should("contain.text", incorrectLoginMsg);
    })

    it('Log in with no credentials', () => {
        cy.get(LOGIN_LOCATORS.loginForm).submit();
        cy.get(LOGIN_LOCATORS.loginErrorMessage).should("contain.text", incorrectLoginMsg);
    })
})
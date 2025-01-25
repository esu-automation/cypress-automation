const HOMEPAGE_LOCATORS = {
    loginOrRegisterButton: "#customer_menu_top a[href*='login']",
}

const LOGIN_LOCATORS = {
    email: "#loginFrm_loginname",
    password: "#loginFrm_password",
    loginForm: "#loginFrm",
    loginButton: "#loginFrm button",
    loginErrorMessage: ".alert-error"
}

const ACCOUNT_LOCATORS = {
    accountMenu: "#maincontainer .myaccountbox"
}

export default {
    HOMEPAGE_LOCATORS,
    LOGIN_LOCATORS,
    ACCOUNT_LOCATORS
}
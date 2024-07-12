// Necessary Resources
const express = require("express")
const router = new express.Router()
const utilities = require("../utilities/index")
const accountController = require("../controllers/accountController")
const formValidate = require("../utilities/account-validation")

// Management route
router.get("/", utilities.checkLogin, utilities.handleErrors(accountController.buildManagement))

// Route to login
router.get("/login", utilities.handleErrors(accountController.buildLogin))

// Route to registration
router.get("/registration", utilities.handleErrors(accountController.buildRegistration))


// Registration Process
router.post(
    "/registration", 
    formValidate.registrationRules(),
    formValidate.checkRegData,
    utilities.handleErrors(accountController.registerAccount)
)

// Login Process
router.post(
  "/login",
   formValidate.loginRules(),
   formValidate.checkLoginData,
   utilities.handleErrors(accountController.accountLogin)
)

module.exports = router
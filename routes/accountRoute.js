// Necessary Resources
const express = require("express")
const router = new express.Router()
const utilities = require("../utilities/index")
const accountController = require("../controllers/accountController")
const regValidate = require("../utilities/account-validation")

// Route to login
router.get("/login", accountController.buildLogin)

// Route to registration
router.get("/registration", accountController.buildRegistration)

router.post(
    "/registration", 
    regValidate.registrationRules(),
    regValidate.checkRegData,
    utilities.handleErrors(accountController.registerAccount))

router.post(
    "/login",
    (req, res) => {
        res.status(200).send("login process")
    }
)

module.exports = router
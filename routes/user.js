const express = require("express");
const { signUp, signIn } = require("../controllers/user");
const router = express.Router();
const {
  validateSignUpRequest,
  isRequestValidated,
  validateSignInRequest,
} = require("../validator/user");

router.post("/signup", validateSignUpRequest, isRequestValidated, signUp);
router.post("/signin", validateSignInRequest, isRequestValidated, signIn);

module.exports = router;

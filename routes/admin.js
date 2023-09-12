const expres = require("express");
const { signIn, signUp } = require("../controllers/admin");
const {
  validateSignUpRequest,
  isRequestValidated,
  validateSignInRequest,
} = require("../validator/user");
const router = expres.Router();

router.post("/signin", validateSignInRequest, isRequestValidated, signIn);
router.post("/signup", validateSignUpRequest, isRequestValidated, signUp);

module.exports = router;

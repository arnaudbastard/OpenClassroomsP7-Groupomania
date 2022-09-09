/* Import des modules necessaires */
const express = require("express");
const router = express.Router();

const userCtrl = require("../controllers/user.controller");

const multer = require("../middlewares/GuardMulterUser");
const auth = require("../middlewares/GuardAuth");

/* Routage User */
router.post("/signup", userCtrl.signup);
router.post("/login", userCtrl.login);
router.post("/modify/:userId", auth, multer, userCtrl.modifyUser);


module.exports = router;

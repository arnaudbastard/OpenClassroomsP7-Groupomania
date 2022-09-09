/* Import des modules necessaires */
const express = require("express");
const router = express.Router();
const refreshCtrl = require("../controllers/refreshToken.controller");


/* Routage User */
router.get("/token", refreshCtrl.refreshToken);



module.exports = router;

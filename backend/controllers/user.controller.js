/* Import des modules necessaires */
const User = require("../models/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv").config({ encoding: "latin1" });
const fs = require("fs");



/* Controleur inscription */
exports.signup = async (req, res, next) => {

    const { nom, prenom, email, password } = req.body;

    User.findOne({ email: req.body.email }, async function (err, emailExists) {
        if (!emailExists) {
            console.log("je suis la")

            const hashPassword = await bcrypt.hash(password, process.env.BCRYPT_SALT_ROUND);
            try {
                console.log("ici")
                await User.create({
                    nom: nom,
                    prenom: prenom,
                    imageUrl: "./images/userImg/default.png",
                    presentation: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eget mattis nibh. Etiam vel aliquet turpis. Ut dictum eros id rhoncus vehicula. Sed porta quam lectus, eget gravida nisl condimentum non. Phasellus eros tortor, suscipit at consectetur a, iaculis nec dui.",
                    email: email,
                    password: hashPassword
                });
                res.json({ msg: "Inscription réussie" });
            } catch (error) {
                console.log(error);
            }
        } else {
            return res.status(400).json({ msg: "Cette adresse email existe déjà" });
        }
    })
}

exports.login = async (req, res, next) => {
}

/* Controleur modify */
exports.modifyUser = async (req, res, next) => { }
const { User } = require("../models/UserModels");
const Token = require("../models/UserToken");
const sendEmail = require("../utils/SendEmail");
const crypto = require("crypto");
const Joi = require("joi");
const express = require("express");
const router = express.Router();

router.post("/", async (req, res) => {
    try {
        const schema = Joi.object({ email: Joi.string().email().required() });
        const { error } = schema.validate(req.body);
        if (error) return res.status(400).send(error.details[0].message);

        const user = await User.findOne({ email: req.body.email });
        if (!user)
            return res.status(400).send("user with given email doesn't exist");

        let token = await Token.findOne({ userId: user._id });
        if (!token) {
            token = await new Token({
                userId: user._id,
                token: crypto.randomBytes(32).toString("hex"),
            }).save();
        }

        const link = `${process.env.BASE_URL}/password-reset/${user._id}/${token.token}`;
        await sendEmail(user.email, "Password reset", link);

        res.json({ message: "password reset link sent to your email account" });
    } catch (error) {
        res.status(500).json({ error: "An error occurred", details: error.message });
        console.log(error);
    }
});

router.get("/:userId/:token", async (req, res) => {
    try {
        const userId = req.params.userId;
        const user = await User.findById(userId);
        if (!user) return res.status(400).send("invalid link or expired");

        const token = await Token.findOne({
            userId: user._id,
            token: req.params.token,
        }).lean(); // Use lean() to get a plain JavaScript object
        if (!token) return res.status(400).send("Invalid link or expired");

        // Redirect to the password reset page
        res.redirect(`http://localhost:3000/reset/${userId}/${token.token}`);
    } catch (error) {
        res.status(500).send("An error occurred");
        console.log(error);
    }
});

router.post("/:userId/:token", async (req, res) => {
    try {
        
        const schema = Joi.object({
            password: Joi.string().min(6).required(),
        });
        const { error } = schema.validate(req.body);
        if (error) return res.status(400).send(error.details[0].message);

        const user = await User.findById(req.params.userId);
        if (!user) return res.status(400).send("invalid link or expired");

        const token = await Token.findOne({
            userId: user._id,
            token: req.params.token,
        });
        if (!token) return res.status(400).send("invalid link or expired");

        user.password = req.body.password;
        await user.save();

        await token.deleteOne();

        res.json({ success: true, message: "password reset successful" });
    } catch (error) {
        res.status(500).send("An error occurred");
        console.log(error);
    }
  });

module.exports = router;
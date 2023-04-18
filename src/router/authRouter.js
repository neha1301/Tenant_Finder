const express = require('express');
const router = express.Router();
const { authController } = require("../controller");

router.post('/api/signup', async (req, res) => {
    const { mobileNumber } = req.body;

    console.log("req.body - ", req.body);

    try {
        let result = await authController.signUpUser(req.body);
        res.status(201).json({
            status: "SUCCESS", // | "FAILED",
            message: "User registered successfuly.",
            // error: "",
            data: result,
        });
    } catch (error) {
        console.log("Error Occured while saving userData: ", mobileNumber);
        if (error.code === "MOBILE_NUMBER_EXISTS") {
            return res.status(409).json({
                status: "FAILED",
                error: "Mobile number is already registered."
            });
        } else {
            res.status(400).json({
                status: "FAILED",
                error: "Something went wrong while registering user."
            });
        }
    }

})

router.post('/api/get-otp', async (req, res) => {
    try {
        let result = await authController.getOtp(req.body);
        res.status(201).json({
            status: "SUCCESS", // | "FAILED",
            message: "Got user otp successfuly.",
            // error: "",
            data: result,
        });

    } catch (error) {
        res.status(400).json({
            status: "FAILED",
            error: "Something went wrong while getting otp."
        });

    }
})

router.get('/api/verify-otp', async (req, res) => {
    try {
        let result = await authController.getOtp(req.body);
        res.status(200).json({
            status: "SUCCESS", // | "FAILED",
            message: "User otp validated successfuly.",
            // error: "",
            data: result,
        });

    } catch (error) {
        res.status(400).json({
            status: "FAILED",
            error: (error.code === "INVALID_OTP") ?
                "Invalid otp provided" : "Something went wrong while validating otp."
        });
    }
})

router.get('/api/signin', async (req, res) => {
    // const {mobileNumber, role, password}  = req.query;

    // console.log("{mobileNumber, role, password} - ", req.query)
    try {
        let result = await authController.signinUser(req.query);
        // result.password?.delete()
        const { firstName, lastName, email, role, mobileNumber } = result;
        res.status(200).json({
            status: "SUCCESS", // | "FAILED",
            message: "User logged in successfuly.",
            // error: "",
            data: { firstName, lastName, email, role, mobileNumber },
        });

    } catch (error) {
        res.status(400).json({
            status: "FAILED",
            error: (error.code === "INVALID_PASSWORD") ?
                "Invalid password provided" : "Something went wrong while logging in."
        });
    }
})

module.exports = router; 

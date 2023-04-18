const express = require('express');
const router = express.Router();
const { propertyController } = require("../controller");

router.get('/api/properties', async (req, res) => {
    const { propertyName } = req.body;
    try {
        let result = await propertyController.getProperties();
        res.status(201).json({
            status: "SUCCESS", // | "FAILED",
            message: "Properties retrived successfuly.",
            data: result,
        });
    } catch (error) {
        console.log("Error Occured while retriving property list: ", propertyName);
        res.status(400).json({
            status: "FAILED",
            error: "Something went wrong while retrived property list."
        });
    }
})

router.post('/api/save-property', async (req, res) => {
    try {
        let result = await propertyController.saveProperty(req.body);
        res.status(200).json({
            status: "SUCCESS", // | "FAILED",
            message: "Saved property list successfuly.",
            // error: "",
            data: result,
        });
    } catch (error) {
        console.log("Error Occured while saving property - ", error);
        res.status(400).json({
            status: "FAILED",
            error: "Something went wrong while while savng property."
        });
    }
})

module.exports = router; 

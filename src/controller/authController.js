const { userService } = require("../service");

function signUpUser({ firstName, lastName, email, mobileNumber, password, role}) {
    return new Promise(async (resolve, reject) => {
       try {
            await userService.findUser(mobileNumber);
            console.log("User already exists with mobile number: ", mobileNumber);
            reject({
                code: "MOBILE_NUMBER_EXISTS",
                message: "Mobile number is already registered."
            })
        } catch (error) {
            console.log(`Error in finding the user with mobile: ${mobileNumber} `, error);

            try {
                let result = await userService.saveUser({ firstName, lastName, email, mobileNumber, password, role })
                resolve(result)
            } catch (error) {
                reject({
                    code: "SOMETHING_WENT_WRONG",
                    message: error.message
                })
            }
        }
    })
}

function getOtp ({ mobileNumber }) {
    return new Promise(async (resolve, reject) => {
        const OTP = Math.floor(100000 + Math.random() * 900000);

        try {
            await userService.updateUser(mobileNumber, {otp: OTP});
            console.log("Successfuly saved generated and saved otp for mobile: ", mobileNumber);
            resolve(true);

        } catch (error) {
            console.log("Error occured while saving user otp to DB for mobile: ", mobileNumber)
            reject({
                code: "SOMETHING_WENT_WRONG",
                message: error.message
            })
        }
    })
}

function validateOtp ({ mobileNumber, otp }) {
    return new Promise(async (resolve, reject) => {
        try {
            let result = await userService.findUser(mobileNumber);
            if (result.otp === otp) {
                console.log("Otp is successfuly validated for mobile: ", mobileNumber)
                resolve(true);
            } else {
                console.log("Otp is validation failed for mobile: ", mobileNumber)
                reject({
                    code: "INVALID_OTP",
                    message: "Invalid otp provided"
                })
            }
        } catch (error) {
            console.log("Error occured while validating otp for mobile: ", mobileNumber)

            reject({
                code: "SOMETHING_WENT_WRONG",
                message: error.message
            })
        }
    })
}

function signinUser({mobileNumber, role, password}) {
    return new Promise(async (resolve, reject) => {
        try {
            let result = await userService.findUser(mobileNumber);
            if (result.password === password
                 && result.role === role
                 ) {
                console.log("User login successfuly for mobile: ", mobileNumber)
                resolve(result);
            } else {
                console.log("User login failed for mobile: ", mobileNumber)
                reject({
                    code: "INVALID_PASSWORD",
                    message: "Invalid password provided"
                });
            }
        } catch (error) {
            console.log("Error occured while user logging in for mobile: ", mobileNumber)

            reject({
                code: "SOMETHING_WENT_WRONG",
                message: error.message
            })

        }
    });
}

module.exports = {
    signUpUser,
    getOtp,
    validateOtp,
    signinUser
}

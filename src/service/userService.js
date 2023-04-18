const { User } = require('../model');

function saveUser({ firstName, lastName, email, mobileNumber, password, role}) {
    return new Promise(async (resolve, reject) => {
        const user = new User({ firstName, lastName, email, mobileNumber, password, role });
        try {
            let result = await user.save();
            console.log("User Saved Sucessfully: ", result);
            resolve(result);
        } catch (error) {
            console.log("Error Occured while saving userData: ", error);
            reject(error);
        }
    })
}

function findUser(mobileNumber) {
    return new Promise(async (resolve, reject) => {
        try {
            let result = await User.findOne({ mobileNumber: mobileNumber })
            console.log("Found User Sucessfully: ", result);
            if (result?.mobileNumber) {
                resolve(result);
            }
            else {
                reject("abcd");
            }
        } catch (error) {
            console.log("Error Occured while finding userData: ", error);
            reject(error);
        }
    })
}

function updateUser(mobileNumber, userObj) {
    return new Promise(async (resolve, reject) => {
        try {
            let result = User.findOneAndUpdate(
                { mobilenumber: mobileNumber },
                { $set: userObj },
                { new: true }
            )
            // TODO: remove once tested
            console.log("Updated User Sucessfully: ", result);
            if (result?.otp) {
                resolve(result);
            }
            else {
                reject("abcd");
            }
        } catch (error) {
            console.log("Error Occured while updating userData: ", error);
            reject(error);
        }
    })
}

module.exports = {
    saveUser,
    findUser,
    updateUser
}

const { propertyService } = require("../service");

function saveProperty({
    propertyName,
    propertyType,
    securityDeposit,
    description,
    imageList,
    location,
    rent
}) {
    return new Promise(async (resolve, reject) => {
        try {
            let result = await propertyService.saveProperty({
                propertyName,
                propertyType,
                securityDeposit,
                description,
                imageList,
                location,
                rent
            });
            console.log("Successfuly saved property: ", propertyName);
            resolve(result);

        } catch (error) {
            console.log("Error occured while saving property to DB: ", propertyName)
            reject({
                code: "SOMETHING_WENT_WRONG",
                message: error.message
            })
        }
    })
}

function getProperties() {
    return new Promise(async (resolve, reject) => {
        try {
            let result = await propertyService.getAllProperties();
            console.log("Successfuly retrived property list.");
            resolve(result);

        } catch (error) {
            console.log("Error occured while retriving property list")
            reject({
                code: "SOMETHING_WENT_WRONG",
                message: error.message
            })
        }
    })
}

module.exports = {
    getProperties,
    saveProperty
}

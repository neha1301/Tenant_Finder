const { Property } = require('../model');

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
        const property = new Property({
            propertyName,
            propertyType,
            securityDeposit,
            description,
            imageList,
            location,
            rent
        });

        try {
            let result = await property.save();
            console.log("Property Saved Sucessfully: ", result);
            resolve(result);
        } catch (error) {
            console.log("Error Occured while saving property: ", error);
            reject(error);
        }
    })
}

function getAllProperties() {
    return new Promise(async (resolve, reject) => {
        try {
            let result = await Property.find({});
            console.log("Property list retrieved Sucessfully: ", result);
            resolve(result);
        } catch (error) {
            console.log("Error Occured while retriving property list: ", error);
            reject(error);
        }
    })
}

module.exports = {
    getAllProperties,
    saveProperty
}

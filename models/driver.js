const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const DriverSchema = new mongoose.Schema({
    firstname: {
        type: String
    },
    lastname: {
        type: String
    },
    email: {
        type: String
    },
    password: {
        type: String,
    },
    phone: {
        type: String
    },
    year: {
        type: Number
    },
    numberPlate: {
        type: String
    },
    VIN: {
        type: String
    },
    approved: {
        type: Boolean
    }
});
let Driver = mongoose.model('Driver', DriverSchema);

module.exports = Driver;
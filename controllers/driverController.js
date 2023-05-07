const Driver = require("../models/driver");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const hashPassword = require("../utils/common.utils");

// Display All driver Data
const driver_index = (req, res) => {
    Driver.find(function (err, drivers) {
        res.json(drivers);
    });
};

// Create New driver
const driver_create = async (req, res) => {
    await Driver.deleteOne({ email: req.body.email }).then(function () {
        console.log('deleted');
    });

    await hashPassword(req);

    let driver = await new Driver(req.body);
    await driver
        .save()
        .then((driver) => {
            res.send(driver);
        })
        .catch(function (err) {
            res.status(422).send("driver add failed");
        });
};

const driver_getOne = async (req, res) => {
    Driver.findById(req.params.id, function (err, driver) {
        if (!driver) {
            res.status(404).send("Driver not found");
        } else {
            res.send(driver);
        }
    });
}

// Delete driver Detail by Id
const driver_delete = (req, res) => {
    Driver.findById(req.params.id, function (err, driver) {
        if (!driver) {
            res.status(404).send("Driver not found");
        } else {
            Driver.findByIdAndRemove(req.params.id)
                .then(function () {
                    res.status(200).json("Driver deleted");
                })
                .catch(function (err) {
                    res.status(400).send("Driver delete failed.");
                });
        }
    });
};

module.exports = {
    driver_index,
    driver_create,
    driver_getOne,
    driver_delete
};
const express = require("express");
const router = express.Router();
const driverController = require("../../controllers/driverController");

router.get("/", driverController.driver_index);
router.post("/create", driverController.driver_create);

router.get("/:id", driverController.driver_getOne);

router.put('/approve/:id', driverController.driver_approve);

router.delete("/:id", driverController.driver_delete);


module.exports = router;
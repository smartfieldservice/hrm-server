//@external module
const express = require("express");
const router = express.Router();

//@internal module
const { leavePerYearController } = require("../controllers/controllerExporter");

router
    .route("/")
    .get(leavePerYearController.allLeavePerYear)
    .post(leavePerYearController.createLeavePerYear)
    .delete(leavePerYearController.deleteLeavePerYear)

//@exports
module.exports = router;
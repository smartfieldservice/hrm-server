//@external module
const router = require("express").Router();

//@internal module
const { leavePerYearController } = require("../controllers/controllerExporter");
const { accountValidation } = require("../middlewares/middlwareExporter");

router
    .route("/")
    //@api/leave-per-year?page=&limit=&sort=
    .get(accountValidation.isLogin,accountValidation.requiredRole(["hr", "branch-hr"]),leavePerYearController.allLeavePerYear)

router
    .use(accountValidation.isLogin, accountValidation.requiredRole(["hr"]));

router
    .route("/")
    //@api/leave-per-year
    .post(leavePerYearController.createLeavePerYear)
    //@api/leave-per-year?id=<leave_per_year_id>
    .delete(leavePerYearController.deleteLeavePerYear)

//@exports
module.exports = router;
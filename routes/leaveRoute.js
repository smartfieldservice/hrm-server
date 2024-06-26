//@external module
const router = require("express").Router();

//@internal module
const { leaveController } = require("../controllers/controllerExporter");
const { accountValidation, inputValidator } = require("../middlewares/middlwareExporter");

router
    .use(accountValidation.isLogin, accountValidation.requiredRole(['hr', 'branch-hr']));

router
    .route("/search/:clue")
    //@api/leave/search/test
    .get(leaveController.searchLeave)

router
    .route("/")
    //@api/leave?page=&limit=&sort=
    .get(leaveController.allLeave)
    //@api/leave
    .post(inputValidator.leaveInputRules, inputValidator.validate, leaveController.createLeave)
    //@api/leave?id=<leave_id>
    .put(leaveController.editLeave)
    .delete(leaveController.deleteLeave)

//@exports    
module.exports = router;
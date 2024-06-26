//@external module
const router = require("express").Router();

const { departmentController } = require("../controllers/controllerExporter");
const { accountValidation, 
        inputValidator } = require("../middlewares/middlwareExporter");

/* router
    .use(accountValidation.isLogin,accountValidation.requiredRole(['hr','branch-hr']))
 */

router
    .use(accountValidation.isLogin, accountValidation.requiredRole(["hr", "branch-hr"]));

router
    .route("/concern/")
    //@api/department/concern?id=<concern_id>
    .get(departmentController.concernWiseDepartment);

router
    .route("/")
    //@api/department?page=&limit=&sort=
    .get(departmentController.allDepartment)
    //@api/department
    .post(inputValidator.departmentInputRules, inputValidator.validate, departmentController.createDepartment)
    //@api/department?id=<department_id>
    .put(departmentController.editDepartment)
    .delete(departmentController.deleteDepartment)

router
    .route("/search/:clue")
    //@api/department/search/ma
    .get(departmentController.searchDepartment)
    
module.exports = router;
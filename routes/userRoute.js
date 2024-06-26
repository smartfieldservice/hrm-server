//@external module
const router = require("express").Router();
const multer = require('multer');

//@internal module
const { userController } = require("../controllers/controllerExporter");
const { s3Handler, 
        accountValidation, 
        inputValidator } = require("../middlewares/middlwareExporter");

const upload = multer({
    storage : s3Handler.storageConfig
});

router
    .route("/login")
    //@api/users/login
    .post(accountValidation.isLogout, inputValidator.userLoginRules,
            inputValidator.validate, userController.loginUser)

router
    .use(accountValidation.isLogin, accountValidation.requiredRole(["hr", "branch-hr"]));

router
    .route("/")
    //@api/users?page=&limit=&sort=
    .get(userController.allUsers)
    //@api/users
    .post(upload.single("imagePath"), inputValidator.userInputRules, 
                inputValidator.validate, userController.createUser)
    //@api/users?id=<user_id>
    .put(userController.editUser)
    .delete(userController.deleteUser)

router
    .route("/my-profile")
    //@api/users/my-profile
    .get(userController.ownProfile)

router
    .route("/profile")
    //@api/users/profile?id=<user_id>
    .get(userController.otherProfile)

router
    .route("/concern-department")
    //@api/users/concern-department?c_id=<concern_id>&d_id=<department_id>
    .get(userController.concernAndDepartmentWiseUser)

router
    .route("/search/:clue?")
    //@api/users/search/
    .get(userController.allUsersWithSearch)


module.exports = router;
//@external module
const router = require("express").Router();
const path = require('path');
const multer = require('multer');
const shortid = require('shortid');

const { PostEmployee, editEmployee, searchEmployee } = require('../controllers/employeeController');

const storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, path.join(path.dirname(__dirname), './AllFileFolder'))
    },
    filename: function(req, file, cb){
        cb(null, shortid.generate() + '-' + file.originalname);
    }
});

const upload = multer({ storage: storage,
    limits: {
        fileSize: 99995242880 // 500KB
    }
});

// router.route('/').post(upload.single("imagePath"), PostEmployee);
router.route('/').post(upload.fields([{
    name: 'imagePath', maxCount: 1
  }, {
    name: 'documentPath', maxCount: 1
  }]), PostEmployee);

router.route("/edit").put(editEmployee);
router.route("/:emp").get(searchEmployee);

module.exports = router;
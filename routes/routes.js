const router = require("express").Router();
const image = require("../middleware/fileupload");
const Email = require("../Email");
router.post("/", image.uploadImg.array('image', 10), Email.Message);
module.exports = router;

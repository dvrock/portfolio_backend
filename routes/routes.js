const router = require("express").Router();
const image = require("../middleware/fileupload");
const Email = require("../Email");
router.post("/", image.uploadImg.single("image"), Email.Message);
module.exports = router;

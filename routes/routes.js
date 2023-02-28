const router = require("express").Router();
const image = require("../middleware/fileupload");
const Email = require("../Email");
router.post("/", Email.Message);
module.exports = router;

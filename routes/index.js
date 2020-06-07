const express = require("express");
const router = express.Router();


router.use("/description", require("./description"));
router.use("/tool-list", require("./tool_list"));
router.use("/home", require("./home"));
router.use("/", require("./home"));

module.exports = router;

const express = require("express");
const { contact, createData, websiteData, editData } = require("../controllers/website");
const { isAdmin, requireSignin } = require("../middlewares");
const router = express.Router();

router.post("/contact", contact);

// router.post("/create-data", requireSignin, isAdmin, createData);
router.get("/data/:id", websiteData);
router.put("/edit-data", requireSignin, isAdmin, editData);

module.exports = router;

const express = require("express");
const router = express.Router();

const {
  sendEmailFromClientSide,
  allEmail,
  removeEmail,
} = require("../controllers/email");
const { requireSignin, isAdmin } = require("../middlewares");

router.post("/send-email-from-client-side", sendEmailFromClientSide);
router.get("/get-all-email", requireSignin, isAdmin, allEmail);
router.delete("/email/:id", requireSignin, isAdmin, removeEmail);

module.exports = router;

const express = require("express");
const { removeTesti, add, allTesti } = require("../controllers/testi");
const router = express.Router();

const { requireSignin, isAdmin } = require("../middlewares");

router.post("/add", requireSignin, isAdmin, add);
router.delete("/tesi/:id", requireSignin, isAdmin, removeTesti);
router.get("/get-all-testi", allTesti);

module.exports = router;
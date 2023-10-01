const express = require("express");
const router = express.Router();
const {
  getParts,
  postPart,
  updatePart,
  deletePart
} = require("../controllers/partController");

router.route("/").get(getParts).post(postPart);
router.route("/:id").put(updatePart).delete(deletePart);

module.exports = router;

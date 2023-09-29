const express = require("express");
const router = express.Router();
const {
  getParts,
  postPart,
  putPart,
  deletePart
} = require("../controllers/partController");

router.get("/", getParts);

router.post("/", postPart);

router.put("/:id", putPart);

router.delete("/:id", deletePart);

module.exports = router;

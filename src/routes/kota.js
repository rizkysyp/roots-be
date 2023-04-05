const express = require("express");
const router = express.Router();

const { kotaController } = require("../controller/kota");

router.get("/", kotaController.getAllData);
router.post("/", kotaController.insert);
router.put("/:id", kotaController.updateKota);
router.delete("/:id", kotaController.delete);
router.get("/detail/:id", kotaController.detail);
module.exports = router;

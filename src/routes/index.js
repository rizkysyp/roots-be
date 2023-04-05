const express = require("express");
const router = express.Router();

const RouterKota = require("../routes/kota");

router.use("/kota", RouterKota);

module.exports = router;

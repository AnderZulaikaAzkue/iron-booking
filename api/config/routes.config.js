const express = require("express");
const router = express.Router();
const hotel = require('../controllers/hotel.controllers');

router.get("/hotels", hotel.list),
router.post("/hotels", hotel.create);



module.exports = router;




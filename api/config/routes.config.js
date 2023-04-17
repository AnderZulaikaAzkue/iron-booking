const express = require("express");
const router = express.Router();
const hotel = require('../controllers/hotel.controllers');
const hotelMid = require("../middlewares/hotel.mid");

router.get("/hotels", hotel.list);
router.post("/hotels", hotel.create);
router.get("/hotels/:id", hotelMid.exists, hotel.detail);
router.patch("/hotels/:id", hotelMid.exists, hotel.update);
router.delete("/hotels/:id", hotelMid.exists, hotel.delete)

module.exports = router;




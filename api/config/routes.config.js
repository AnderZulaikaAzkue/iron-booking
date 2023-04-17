const express = require("express");
const router = express.Router();
const hotel = require('../controllers/hotel.controllers');

router.get("/hotels", hotel.list);
router.post("/hotels", hotel.create);
router.get("/hotels/:id", hotel.detail);
router.patch("/hotels/:id", hotel.update);
router.delete("/hotels/:id", hotel.delete)

module.exports = router;




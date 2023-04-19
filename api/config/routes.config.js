const express = require("express");
const router = express.Router();
const hotel = require('../controllers/hotel.controllers');
const room= require('../controllers/room.controllers');
const client= require('../controllers/client.controllers');
const hotelMid = require("../middlewares/hotel.mid");
const roomMid = require("../middlewares/room.mid");
const clientMid = require("../middlewares/client.mid");
const secure = require("../middlewares/secure.mid");

router.get("/hotels", hotel.list);
router.post("/hotels", hotel.create);
router.get("/hotels/:id", hotelMid.exists, hotel.detail);
router.patch("/hotels/:id", hotelMid.exists, hotel.update);
router.delete("/hotels/:id", hotelMid.exists, hotel.delete)

router.get("/rooms", room.list);
router.post("/rooms/:hotelid", room.create);
router.get("/rooms/:id", room.detail);
router.patch("/rooms/:id", roomMid.exists, room.update);
router.delete("/rooms/:id/:hotelid", roomMid.exists, room.delete);

router.get("/clients", client.list);
router.post("/register", client.create);
router.get("/clients/:id/confirm", clientMid.exists, client.confirm);
router.patch("/clients/:id", secure.auth, client.update);
router.delete("/clients/:id", secure.auth, client.delete);

router.post("/login", client.login);





module.exports = router;




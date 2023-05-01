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
router.post("/hotels",/*secure.isLogged, secure.isAdmin,*/ hotel.create);
router.get("/hotels/:id", hotelMid.exists, hotel.detail);
router.patch("/hotels/:id",/*secure.isLogged, secure.isAdmin,*/ hotelMid.exists, hotel.update);
router.delete("/hotels/:id",/*secure.isLogged, secure.isAdmin,*/  hotelMid.exists,hotel.delete)
//router.get("/hotels/searchByCity", hotel.searchByCity)
//router.get("/searchByType", hotel.searchByType) 
router.get("room/:id", hotel.getHotelRooms);

router.get("/rooms", room.list);
router.get("/rooms/:id", roomMid.exists, room.detail);
router.post("/rooms/:hotelid",/*secure.isLogged, secure.isAdmin,*/ room.create);

router.patch("/rooms/:id",/*secure.isLogged, secure.isAdmin,*/ roomMid.exists, room.update);
router.delete("/rooms/:id/:hotelid",/*secure.isLogged, secure.isAdmin,*/ roomMid.exists, room.delete);

router.get("/clients", client.list);
router.post("/register", client.create);
router.get("/clients/:id/confirm", clientMid.exists, client.confirm);
router.patch("/clients/:id", secure.auth, secure.isLogged, client.update);
router.delete("/clients/:id", secure.auth, secure.isLogged, client.delete);

router.post("/login", client.login);


module.exports = router;




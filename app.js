const hotelApp = require("./LingZiXuan_HotelMgmt.js")

hotelApp.addRoom("PS11","Presidential Suite");

hotelApp.getAllRooms("a");

hotelApp.getAvailableRooms("PreSiDentIaL SUitE");

hotelApp.changeRoomStatus("PS1","Occupied");

hotelApp.getRoom("PS1");

hotelApp.addStaff("Aether Viator","Vice Manager")
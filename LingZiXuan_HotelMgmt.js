module.exports = {
    roomList:[
        {roomCode:"PS1",roomType:"Presidential Suite",roomStatus:"Available"},
        {roomCode:"DD1",roomType:"Deluxe Double",roomStatus:"Occupied"}
    ],
    staffList:[
        {staffNumber:1,staffName:"Lumine Viator",staffRole:"Manager"},
        {staffNumber:2,staffName:"Aether Viator",staffRole:"Vice Manager"},
        {staffNumber:3,staffName:"Vulpes Stellar",staffRole:"Front Desk"},
        {staffNumber:4,staffName:"Deid Mann",staffRole:"Janitor"}
    ],

    //Adds a room to the list of Rooms.
    //Parameter roomType should be type String
    addRoom(roomCode,roomType) {
        if (roomCode == undefined || roomType == undefined) {   //checks if required values were included
            console.log("Please include a roomCode and roomType \n=====");
        }
        else if (typeof roomType === "string") {    //checks if roomType is a String
            for (var i=0; i<this.roomList.length; i++) {    //checks if roomCode already exists
                var codes = this.roomList[i].roomCode
                if (codes==roomCode) {
                    break;
                }
            }
            if (codes == roomCode) {
                    console.log("Room code already exists. Unable to add room. \n=====");
                }
            else {
                this.roomList.push({roomCode,roomType,roomStatus:"Available"})
                var latest = this.roomList[this.roomList.length - 1]
                if (latest.roomCode == roomCode || latest.roomType == roomType) {
                    console.log(`Room \"${roomCode}\" of type ${roomType} has been added successfully. \n=====`)
                }
                else {
                    console.log("An error occured. Room was not added. \n=====");
                }
            }
        }
        else {
            console.log("Room type is not in correct format. Should be included as String. \n=====")
        }
    },
    
    //Retrieves the list of Rooms in roomList.
    //The roomType parameter is an optional, case-insensitive parameter that if a room type is included as a String (e.g. getRooms("Presidential Suite") ), it will only retrieve the rooms of that type.
    getAllRooms(roomType) {
        if (roomType == undefined || roomType == "") {  //lists all rooms
        this.roomList.forEach(room => console.log(
                `Room Code: ${room.roomCode} \nRoom Type: ${room.roomType} \nRoom Status: ${room.roomStatus} \n=====`
            ))
        }
        else {  //lists all rooms of given roomType
             var allRooms = this.roomList.filter(room => room.roomType.toLowerCase() == roomType.toLowerCase())
                if (allRooms.length == 0) {
                    console.log("Sorry, there are no rooms of this type. \n=====")
                }
                else {
                    allRooms.forEach(room => console.log(
                        `Room Code: ${room.roomCode} \nRoom Type: ${room.roomType} \nRoom Status: ${room.roomStatus} \n=====`
                    ));
                }
        }
    },

    //Change the status of the room (e.g. "Available" to "Occupied")
    //Parameter roomStatus should be of type String
    changeRoomStatus(roomCode,roomStatus) {
        var code;
        for (var i=0; i<this.roomList.length; i++) {    //retrieves room using code
            if (this.roomList[i].roomCode==roomCode) {
                code = this.roomList.find(rooms => rooms.roomCode == roomCode)
                break;
            }
        }
        if (code==null) {   //checks if room using given room code exists
            console.log(`Room using code \"${roomCode}\" not found. \n=====`)
        }
        else if (typeof roomStatus === "string") {  //checks if given roomStatus is a String
            if (code.roomStatus.toLowerCase() == roomStatus.toLowerCase()) {
                console.log(`Room \"${roomCode}\"\'s status is already \"${roomStatus}\". \n=====`)
            }
            else {
                code.roomStatus = roomStatus;
                console.log(`Room \"${roomCode}\"\'s status has been changed to \"${roomStatus}\". \n=====`)
            }
        }
        else {
            console.log("Room status is not in correct format. Should be included as String. \n=====")
        }
    },

    //Retrieves the list of available Rooms in roomList.
    //The roomType parameter is an optional, case-insensitive parameter that if a room type is included as a String (e.g. getAvailableRooms("Presidential Suite") ), it will only retrieve available the rooms of that type.
    getAvailableRooms(roomType) {
        if (roomType == undefined || roomType == "") {  //lists all available rooms
            this.roomList.filter(room => room.roomStatus == "Available").forEach(room => console.log(
                    `Room Code: ${room.roomCode} \nRoom Type: ${room.roomType} \nRoom Status: ${room.roomStatus} \n=====`
                ))
            }
            else {  //lists all available rooms of given roomType
                 var allRooms = this.roomList.filter(room => room.roomType.toLowerCase() == roomType.toLowerCase()).filter(room => room.roomStatus == "Available")
                    if (allRooms.length == 0) {
                        console.log("Sorry, there are no rooms of this type available. \n=====")
                    }
                    else {
                        allRooms.forEach(room => console.log(
                            `Room Code: ${room.roomCode} \nRoom Type: ${room.roomType} \nRoom Status: ${room.roomStatus} \n=====`
                        ));
                    }
            }
    },

    //Retrieves the room details of the specified roomCode
    getRoom(roomCode) {
        var code;
        for (var i=0; i<this.roomList.length; i++) {    //retrieves room using code
            if (this.roomList[i].roomCode==roomCode) {
                code = this.roomList.find(rooms => rooms.roomCode == roomCode)
                break;
            }
        }
        if (code==null) {   //checks if room using given room code exists
            console.log(`Room using code \"${roomCode}\" not found. \n=====`)
        }
        else {
            console.log(`Room using code \"${roomCode}\" found.`)
            console.log(
                `Details: \nRoom Type: ${code.roomType} \nRoom Status: ${code.roomStatus} \n=====`
            )
        }
    },

    //Adds a new staff to the list of Staff.
    //Parameter staffName should be type String
    //Parameter staffRole should be type String
    addStaff(staffName,staffRole) {
        if (staffName == undefined || staffRole == undefined) {   //checks if required values were included
            console.log("Please include a staffName and staffRole \n=====");
        }
        else if (typeof staffName === "string" && typeof staffRole === "string") {    //checks if roomType is a String
            var staffNumber = this.staffList[this.staffList.length - 1].staffNumber + 1 //auto increment for staff number
            this.staffList.push({staffNumber,staffName,staffRole})
            var latest = this.staffList[this.staffList.length - 1].staffNumber
            if (latest == staffNumber) {    //checks if staff was added successfully by comparing newest staff number
                console.log(`Staff ${staffName} has been added successfully. \n${staffName}\'s staff number is ${staffNumber} \n${staffName}\'s job is ${staffRole} \n=====`)
            }
            else {
                console.log("An error occured. Staff was not added. \n=====");
            }
        }
        else {
            console.log("Staff name or role is not in correct format. Both should be included as String. \n=====")
        }
    },

    //Removes staff from the list of Staff
    //Parameter staffNumber should be a Number
    removeStaff(staffNumber) {
        if (staffNumber == undefined) {   //checks if required values were included
            console.log("Please include a staffNumber \n=====");
        }
        else if (typeof staffNumber === "number") {    //checks if roomType is a String
            const staff = this.staffList.find(s => s.staffNumber == staffNumber)
            const index = this.staffList.findIndex(s => s.staffNumber == staffNumber)
            if (staff != undefined) {    //if staff exists
                this.staffList.splice(index,1)
                console.log(`Staff ${staff.staffName} has been removed successfully \n=====`)
            }
            else {
                console.log(`Staff number ${staffNumber} does not exist. \n=====`);
            }
        }
        else {
            console.log("Staff number is not in correct format. Should be included as Number. \n=====")
        }
    },

    //Used to change the role of staff (e.g. "Manager" to "Senior Manager")
    //Parameter staffNumber should be a Number
    //Parameter staffRole should be a String
    changeStaffRole(staffNumber,staffRole) {
        if (typeof staffNumber === "number" && typeof staffRole === "string") {  //checks if given staffRole is a String
            const staff = this.staffList.find(s => s.staffNumber == staffNumber);
            if (staff != undefined) {    //if staff exists
                staff.staffRole = staffRole
                console.log(`Staff ${staff.staffName}\'s job has been changed to ${staffRole} \n=====`)
            }
            else if (staff.staffRole.toLowerCase() == staffRole.toLowerCase()) {
                console.log(`Staff ${staff.staffName}\'s is already a \"${staffRole}\". \n=====`)
            }
            else {
                console.log(`Staff number ${staffNumber} not found. \n=====`)
            }
        }
        else {
            console.log("Staff number or role is not in correct format. \nStaff number should be included as Number. \nStaff role should be included as String \n=====")
        }
    },

    //Retrieves the list of Staff in staffList.
    //The staffRole parameter is an optional, case-insensitive parameter that if a staff role is included as a String (e.g. getAllStaff("Vice Manager") ), it will only retrieve staff with that job.
    getAllStaff(staffRole) {
        if (staffRole == undefined || staffRole == "") {  //lists all staff
            this.staffList.forEach(staff => console.log(
                `Staff Number: ${staff.staffNumber} \nStaff Name: ${staff.staffName} \nStaff Job: ${staff.staffRole} \n=====`
            ))
        }
        else {  //lists all staff of given staffRole
                var staffByRole = this.staffList.filter(staff => staff.staffRole.toLowerCase() == staffRole.toLowerCase())
                if (staffByRole.length == 0) {
                    console.log("There are no staff with the entered job. \n=====")
                }
                else {
                    staffByRole.forEach(staff => console.log(
                        `Staff Number: ${staff.staffNumber} \nStaff Name: ${staff.staffName} \nStaff Job: ${staff.staffRole} \n=====`
                    ));
                }
        }
    },

    //Retrieves the staff details of the specified staff
    getStaff(staffNumber) {
        var staff;
        for (var i=0; i<this.staffList.length; i++) {    //retrieves staff using number
            if (this.staffList[i].staffNumber==staffNumber) {
                staff = this.staffList.find(staff => staff.staffNumber == staffNumber)
                break;
            }
        }
        if (staff==null) {   //checks if staff using given staff number exists
            console.log(`Staff with number ${staffNumber} was not found. \n=====`)
        }
        else {
            console.log(`Staff with number ${staffNumber} found.`)
            console.log(
                `Details: \nStaff Name: ${staff.staffName} \nStaff Job: ${staff.staffRole} \n=====`
            )
        }
    },
}
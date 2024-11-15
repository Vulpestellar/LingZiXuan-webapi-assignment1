# Assignment 1 - Hotel Management
Ling Zi Xuan

## How To Use
> [!IMPORTANT]
> Node.js is required for this to run. <br>
> If you do not have it, please install Node.js

1. Download the file `LingZiXuan_HotelMgmt.js` and place it into a folder.
2. Create a .js file. The name should not matter.
3. Place your new .js file into the same folder as LingZiXuan_HotelMgmt.js
4. Add the line below into your new .js file:
```
const hotelApp = require("./LingZiXuan_HotelMgmt.js");
```
5. Add any functions you want to use into your new .js file. Available functions are listed in the Functions section further down.
6. **With `<filename>` being the name of your .js file**, <br>Run the below command in the terminal:
```
node <filename>.js
```

## Functions
Below is a list of all the functions available in LingZiXuan_HotelMgmt.js, as well as the required datatypes of the parameters.

> [!NOTE]
> The functions can be called directly from your .js file. <br>
> For example:
> ```
> hotelApp.addRoom("PS11","Presidential Suite");
> ```
> To add a room to the list of rooms

### addRoom(roomCode,roomType)
**roomCode: String** <br>
**roomType: String**
<p>This function adds a room to the room list. <br>
The room code cannot be the same as an existing room code.</p>

### getAllRooms(roomType)
**roomType: String** (Optional, case-insensitive)
<p>This function retrieves the details of all rooms in the room list.
The parameter "roomType" is an optional parameter that allows the user to
retrieve the details of all rooms of only the specified room type.</p>

### changeRoomStatus(roomCode,roomStatus)
**roomCode: String** <br>
**roomStatus: String**
<p>This function allows changing of room status. <br>
Examples of room status: "Available", "Occupied", "Cleaning".</p>

### getAvailableRooms(roomType)
**roomType: String** (Optional, case-insensitive)
<p>This function retrieves the details of all rooms with the "Available" status in the room list.
The parameter "roomType" is an optional parameter that allows the user to
retrieve the details of all available rooms of only the specified room type.</p>

### getRoom(roomCode)
**roomCode: String**
<p>This function retrieves the details of the room of the specified room code</p>

### addStaff(staffName,staffRole)
**staffName: String** <br>
**staffRole: String**
<p>This function adds a staff to the staff list. <br>
The staff number auto-increments and thus does not need to be specified.</p>

### removeStaff(staffNumber)
**staffNumber: number**
<p>This function removes the staff member that has the specified staffNumber from the staff list.</p>

### changeStaffRole(staffNumber,staffRole)
**staffNumber: number** <br>
**staffRole: String** (Case-insensitive)
<p>This function allows changing of staff roles. <br>
Examples of staff roles: "Senior Manager", "Front Desk", "Janitor".</p>

### getAllStaff(staffRole)
**staffRole: String** (Optional, case-insensitive)
<p>This function retrieves the details of all staff in the staff list.
The parameter "staffRole" is an optional parameter that allows the user to
retrieve the details of all staff of only the specified staff role.</p>

### getStaff(staffNumber)
**staffNumber: number**
<p>This function retrieves the details of the staff of the specified staff number</p>

# References
Provide the references that you have used to support your assignment.
For use of undefined: <br>
https://stackoverflow.com/questions/24403732/how-to-check-if-array-is-empty-or-does-not-exist

For use of typeof: <br>
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof

For use of .splice() in removeStaff(): <br>
https://stackoverflow.com/questions/5767325/how-can-i-remove-a-specific-item-from-an-array-in-javascript

For using optional parameters in the functions: <br>
https://stackoverflow.com/questions/23577632/optional-arguments-in-nodejs-functions

While debugging: <br>
https://stackoverflow.com/questions/62138582/why-does-my-array-become-undefined-as-soon-as-the-function-is-over <br>
https://stackoverflow.com/questions/48051475/searching-for-value-in-an-array-with-a-for-loop-in-javascript
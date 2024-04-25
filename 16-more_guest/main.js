//Creating guestname array
var guestName = ["Ayesha", "Sana", "Laiba"];
//Making variable for those guest who can't come
var dontCome = guestName[0];
//print the name of guest who can't come
console.log(dontCome, "cant come");
//add or remove names from guestname array
guestName.splice(0, 1, "Amna");
//print message for bigger table
console.log("Good News ! We have found a bigger table for dinner.");
//adding a new guest at starting index of array
guestName.unshift("Ali");
//adding a new guest at ending index of array
guestName.push("Zain");
//making variable for storing a middle index of our array
var middleIndex = Math.floor(guestName.length / 2);
//adding new guest to middle index of array
guestName.splice(middleIndex, 0, "Raza");
//print message of updated names
console.log("updated name of guests");
//sending an invitation message to our guests one by one
guestName.forEach(function (oneGuest) { return console.log("salam ".concat(oneGuest, ", would you like to dinner with me?")); });

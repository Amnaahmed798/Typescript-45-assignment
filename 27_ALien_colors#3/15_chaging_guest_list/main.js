var guestName = ["Ayesha", "Sana", "Laiba"];
var dontCome = guestName[0];
console.log(dontCome, "can't come");
guestName.splice(0, 1, "Amna");
guestName.forEach(function (guest) { return console.log("salam ".concat(guest, ",would you like to dinner with me?")); });

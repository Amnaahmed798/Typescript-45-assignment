let guestName = ["Ayesha" , "Sana" , "Laiba"];

let dontCome = guestName[0];

console.log(dontCome, "can't come");

guestName.splice(0, 1, "Amna");

guestName.forEach(guest => console.log(`salam ${guest},would you like to dinner with me?`));

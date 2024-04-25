"use strict";
function show_magicians(magicians) {
    magicians.forEach(name => console.log(name));
}
// Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name.
function make_great(magicians) {
    return magicians.map(name => `The Great ${name}`);
}
//define an array of magicians names.
let magiciansNames = ["Merlin the Magnificent",
    "Mickey the Magic", "Mystique the Marvelous",
    "Enigma the Enchanter"];
// call make_great function to modify the magicians list
let great_magicians = make_great(magiciansNames);
// Call show_magicians() to see that the list has actually been modified.
show_magicians(great_magicians);

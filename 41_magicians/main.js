"use strict";
//define a function to print each magician name from an array
function show_magician(magician) {
    magician.forEach(name => console.log(name));
}
//define an array of magician names
let magician_names = ["Harry potter", "Amna potter", "Noman potter"];
// call the function to print each magician name
show_magician(magician_names);

"use strict";
function make_shirt(size = "large", printMessage = "i love typescript") {
    console.log(`make a ${size} shirt with ${printMessage} print on it.`);
}
make_shirt();
make_shirt("medium");
make_shirt("small");

"use strict";
let currentUser = ["AmNa", "MiSbah", "FaTima", "John"];
let newUser = ["Ayesha", "FaTima", "Kinza", "MiSbah", "Hina"];
newUser.forEach(newnames => {
    let lowerCase = newnames.toLowerCase();
    if (currentUser.map(c_user => c_user.toLowerCase()).includes(lowerCase)) {
        console.log(`the username ${newnames} is not avaliable. please write a different username`);
    }
    else {
        console.log(`the username ${newnames} is avaliable.`);
    }
});

"use strict";
let userName = ["admin", "Amna", "Fatima", "Zohra", "admin", "Zulfiqar"];
//• Remove all of the usernames from your array, and make sure the correct message is printed
userName = [];
//• If the list is empty, print the message We need to find some users!
if (userName.length === 0) {
    console.log("We need to find some users! because your array is empty.");
}
else {
    //• If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?
    userName.forEach(oneUser => {
        if (oneUser === "admin") {
            console.log(`Hello ${oneUser} , would you like to see a status report?`);
        }
        //• Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.
        else {
            console.log(`Hello ${oneUser} , thank you for logging in again.`);
        }
    });
}

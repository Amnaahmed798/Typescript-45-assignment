//43. Unchanged Magicians: Start with your work from Exercise 40.

// Great Magicians: Start with a copy of your program from Exercise 39.
function show_magicians(magicians:string[]){
    magicians.forEach(name => 
        console.log(name));
    }
    // Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name.
    
    function make_great(magicians:string[]){
          return magicians.map(name => `The Great ${name}`);
    
    }
    //define an array of magicians names.
    let magiciansNames = ["Merlin the Magnificent" ,
    "Mickey the Magic","Mystique the Marvelous",
    "Enigma the Enchanter"];
    
     //   Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array.
let copy_magiciansNames = magiciansNames.slice();

//modify the copied array to include "The great" with their names.
    let copy_great_magicians = make_great(copy_magiciansNames);


//Call show_magicians() with each array to show that you have one array of the original names
   console.log("\nOriginal Array\n")
    show_magicians(magiciansNames);

//and one array with the Great added to each magician’s name.
console.log( "\nCopied Array\n")
show_magicians(copy_great_magicians);


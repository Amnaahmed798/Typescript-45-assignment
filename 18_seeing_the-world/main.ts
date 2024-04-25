//adding places names in array
let placesName: string[] = ["Canada" , "America" ,"Thailand" , "China" ,"Pakistan"];
//printing the array in orignal order
console.log("original order" , placesName);
//print the array in alphabetical order with its copy
console.log("alphabetical order:" , [...placesName].sort());
//cheaking the array is still in its original position
console.log("still in original order:" , placesName);
//printing array in reverse order without modifying actual array list
console.log("reverse order:" , [...placesName].reverse());
//cheaking the array is still in its original position
console.log("still in original order:" , placesName);
//printing the array in reverse order without making its copy
console.log("reverse original order:" , placesName.reverse());
//printig the array to get back to its original order
console.log("reverse again:" , placesName.reverse());
//print the array to chage in alphabetic order
console.log("alphabetic order:" , placesName.sort()); 
//printing the original order in reverse order again
console.log("reverse original order:" , placesName.reverse());


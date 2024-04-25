"use strict";
//calling a function with parameters which returns a value in string
function city_country(city, country) {
    return `${city}, ${country}`;
}
//print the returned value
console.log(city_country("Karachi", "Pakistan"));
console.log(city_country("Delhi", "India"));
console.log(city_country("London", "UK"));
console.log(city_country("New York", "USA"));

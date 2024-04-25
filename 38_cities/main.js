"use strict";
function describe_city(city, country = "Pakistan") {
    console.log(`${city} is in ${country}`);
}
//calling the function
describe_city("Karachi");
describe_city("Islamabad");
describe_city("Manchester", "England");

function car(manufacturer: string, model: string, ...otherInfo: string[]) {
    let car: { [key: string]: string } = {
        manufacturer: manufacturer,
        model: model,
    };

    // Add additional information to the car object.
    otherInfo.forEach(info => {
        let [key, value] = info.split(": ");
        car[key.trim()] = value.trim();
    });

    return car;
}

// Call the function with the required information and two other name-value pairs, such as a color or an optional feature.
let myCar = car('Honda', 'Accord', 'color: red', 'year: 2020', 'transmission: automatic', 'trim: LX', 'engine: 2.4L');

// Print the Object that’s returned to make sure all the information was stored correctly.
console.log(myCar);

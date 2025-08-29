let computer = {cpu : 12}
let lenovo = {
    screnn : "HD",
};

let HardWare = {}



console.log(`computer`, computer.__proto__);
console.log(`lenovo`, lenovo.__proto__);

lenovo = {
    __proto__ : computer
}

console.log(`lenovo`, lenovo.__proto__);

let GenericCar = {tyres : 4}
let tesla =
{
    driver : "Ai"
}

Object.setPrototypeOf(tesla, GenericCar)

console.log(tesla);
console.log(GenericCar);

console.log(`tesla`, Object.getPrototypeOf(tesla));


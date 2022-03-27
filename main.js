/*Kelvin to Celsius to Fahrenheit conversion */
const kelvin = 293
console.log(`The temperature value ${kelvin} in Kelvin is`)
/* celsius são 10 graus a menos que o Kelvin*/
let celsius = kelvin-10
/* Formula p/ fahrenheit */
let fahrenheit = Math.floor(celsius * (9/5)+32)

console.log(`The temperature is ${fahrenheit} `)

//celsius para Newton
let newton = Math.floor(celsius*(33/100));
console.log(`Temperature is ${newton} in Newtons`)

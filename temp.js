const celsius = 60;
const fahrenheit = 45;

function calcCelcius(fahrenheit) {
  const cel = 5 * ((fahrenheit - 32) / 9);
  return cel;
}

const calcFahrenheit = (celcius) => 9 * (celcius / 5) + 32;

console.log(`${celsius}\xB0C is ${calcFahrenheit(celsius)} \xB0F`);
console.log(`${fahrenheit}\xB0F is ${calcCelcius(fahrenheit)} \xB0C `);

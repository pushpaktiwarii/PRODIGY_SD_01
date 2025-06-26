function convertTemperature() {
   
 // Input value & unit
  const input = parseFloat(document.getElementById('temperatureInput').value);
  const unit = document.getElementById('unitSelect').value;
  const output = document.getElementById('output');

  //Check if input is valid
  if (isNaN(input)) {
    output.innerHTML = "❌ Please enter a valid number.";
    return;
  }

  let celsius, fahrenheit, kelvin;

  //Conversion logic
  if (unit === 'C') {
    celsius = input;
    fahrenheit = (input * 9/5) + 32;
    kelvin = input + 273.15;
  } else if (unit === 'F') {
    celsius = (input - 32) * 5/9;
    fahrenheit = input;
    kelvin = celsius + 273.15;
  } else if (unit === 'K') {
    celsius = input - 273.15;
    kelvin = input;
    fahrenheit = (celsius * 9/5) + 32;
  }

  //output
  output.innerHTML = `
     Celsius: ${celsius.toFixed(2)} °C<br>
     Fahrenheit: ${fahrenheit.toFixed(2)} °F<br>
     Kelvin: ${kelvin.toFixed(2)} K
  `;
}

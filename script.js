 
    function convertTemperature() {
      const tempInput = document.getElementById("temperature").value;
      const unit = document.getElementById("unit").value;
      const resultDiv = document.getElementById("result");

      if (tempInput === '' || isNaN(tempInput)) {
        resultDiv.innerText = "❌ Please enter a valid number!";
        return;
      }

      const temp = parseFloat(tempInput);
      let result = '';

      if (unit === "Celsius") {
        const f = (temp * 9/5) + 32;
        const k = temp + 273.15;
        result = `${f.toFixed(2)} °F | ${k.toFixed(2)} K`;
      } else if (unit === "Fahrenheit") {
        const c = (temp - 32) * 5/9;
        const k = (temp - 32) * 5/9 + 273.15;
        result = `${c.toFixed(2)} °C | ${k.toFixed(2)} K`;
      } else if (unit === "Kelvin") {
        const c = temp - 273.15;
        const f = (temp - 273.15) * 9/5 + 32;
        result = `${c.toFixed(2)} °C | ${f.toFixed(2)} °F`;
      }

      resultDiv.innerText = `Converted: ${result}`;
    }
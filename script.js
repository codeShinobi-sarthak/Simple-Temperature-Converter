document.getElementById("Convert-btn").onclick = function () {
  let temp;

  if (document.getElementById("cButton").checked) {
    temp = document.getElementById("Temperature").value;
    temp = Number(temp);
    temp = toCelsius(temp);
    document.getElementById("result").innerHTML = temp.toFixed(2) + " °C";
  } else if (document.getElementById("fButton").checked) {
    temp = document.getElementById("Temperature").value;
    temp = Number(temp);
    temp = toFahrenheit(temp);
    document.getElementById("result").innerHTML = temp.toFixed(2) + " °F";
  } else {
    document.getElementById("result").innerHTML = "Please Select a unit";
  }
};

function toCelsius(temp) {
  return (temp - 32) * (5 / 9);
}

function toFahrenheit(temp) {
  return (temp * 9) / 5 + 32;
}

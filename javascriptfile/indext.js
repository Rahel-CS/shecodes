// function displayTemperature(response){
//     let temperatue= Math.round(response.data.temperature.current);
//     let temperatureElement = document.querySelector("#temprature");
//     temperatureElement.innerHTML = `the temp in ${city} is ${temperatue}`;
// }
// let city="sydney";
//  let apiKey="200cc43bt60312a3e9528fo8814ed375&units=metric";

// let apiUrl=`https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;
// axios.get(apiUrl).then(displayTemperature);

function displayTemperature(response) {
    
    
let temperature = Math.round(response.data.temperature.current);

  let temperatureElement = document.querySelector("#temperature");
  
  temperatureElement.innerHTML = `it is ${temperature} degree in ${city}`;
}
let city="sydney";
 let apiKey="200cc43bt60312a3e9528fo8814ed375&units=metric";

 let apiUrl=`https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;
 axios.get(apiUrl).then(displayTemperature);
 
 

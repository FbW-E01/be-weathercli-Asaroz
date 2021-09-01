import axios from "axios";
import process  from "process";
import apiKey from "./api.js";

const processData = process.argv[2]

axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${processData}&units=metric&appid=${apiKey}`)
     .then(function(response){
        console.log(`It is now ${response.data.main.temp}°C in ${processData}, ${response.data.sys.country}`)
        console.log(`The current weather conditions are: ${response.data.weather[0].description}`)
     })
     .catch(function(error){
         console.log(error)
     })


console.log("__________________________")
import axios from "axios";
import { kelvinToCelsius } from "../utils/kelvinToCelsius";
import { kelvinToFahrenheit } from "../utils/kelvinToFarhenheit";
import { getIconById } from "../utils/getIconByid";

export const getCurrentWeather = async (lat, lon) => {

    try {
        const params = {lat: lat, lon: lon, appid: '3326efd8c73a341091514d936390e545'};

        const res = await axios.get('https://api.openweathermap.org/data/2.5/weather' , 
        {
            params,
        }
        ); 

        const weatherInfo = {
            country: res.data.sys.country,
            city: res.data.name,
            weather: { 
                main: res.data.weather[0].main,
                description: res.data.weather[0].description,
                icon: getIconById(res.data.weather[0].icon),
            },
            temperature: {
                kelvin: res.data.main.temp,
                celsius: parseFloat(kelvinToCelsius(res.data.main.temp)),
                fahrenheit: parseFloat(kelvinToFahrenheit(res.data.main.temp)),
            }
        }
        return weatherInfo;
    } catch (error) {
        console.error(error);
    }

}
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import TextField from '@mui/material/TextField';
import { useState } from 'react';

export default function SearchBox() {
    let [city, setCity] = useState("");


    const API_URL = "http://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "c948ffbccd8a551eca9469af546199d0";


    let getWeatherInfo = async () => {
       let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
      let jsonResponse = await response.json();
      let result = {
        city: city,
        temp: jsonResponse.main.temp,
        tempMin: jsonResponse.main.temp_min,
        temMax: jsonResponse.main.temp_max,
        humidity: jsonResponse.main.humidity,
        feelsLike: jsonResponse.main.feels_like,
        weather: jsonResponse.weather[0].description,
      }
      console.log(result);
    }



    let handleCityInfo = (event) => {
        setCity(event.target.value);
    }

    let handleSubmit = (event) => {

        event.preventDefault();
        console.log(city);
        setCity("");
        getWeatherInfo();

    }

    return (
        <div>
            <h4>Search for the Weather</h4>
            <form onSubmit={handleSubmit}>
                <TextField value={city} onChange={handleCityInfo} id="city" label="City Name" variant="outlined" required /> <br /> <br />
                <Button type='submit' variant="contained" endIcon={<SendIcon />}>
                    Send
                </Button>
            </form>
        </div>
    );
}
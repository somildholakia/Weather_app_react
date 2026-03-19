import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import TextField from '@mui/material/TextField';
import { useState } from 'react';

if(process.env.NODE_ENV != "production"){
    require('dotenv').config();
}

export default function SearchBox({updateInfo}) {
    let [city, setCity] = useState("");


    const API_URL = process.env.API_URL;
    const API_KEY = process.env.API_KEY;


    let getWeatherInfo = async () => {
       let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
      let jsonResponse = await response.json();
      let result = {
        city: city,
        temp: jsonResponse.main.temp,
        tempMin: jsonResponse.main.temp_min,
        tempMax: jsonResponse.main.temp_max,
        humidity: jsonResponse.main.humidity,
        feelsLike: jsonResponse.main.feels_like,
        weather: jsonResponse.weather[0].description,
      }
      console.log(result);
      return result;
    }



    let handleCityInfo = (event) => {
        setCity(event.target.value);
    }

    let handleSubmit = async (event) => {

        event.preventDefault();
        console.log(city);
        setCity("");
      let newInfo = await getWeatherInfo();
      updateInfo(newInfo);

    }

    return (
        <div>
           
            <form onSubmit={handleSubmit}>
                <TextField value={city} onChange={handleCityInfo} id="city" label="City Name" variant="outlined" required /> <br /> <br />
                <Button className='Button' type='submit' variant="contained" endIcon={<SendIcon />}>
                    Send
                </Button> <br /><br />
            </form>
        </div>
    );
}
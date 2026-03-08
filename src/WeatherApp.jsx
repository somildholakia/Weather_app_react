import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";

export default function WeatherApp(){

    let [weatherInfo,setWeatherInfo] = useState({
        city: "",
        feelsLike: 0,
        humidity: 0,
        tempMax: 0,
        temp: 0,
        tempMin: 0,
        weather: "",
    });

    let updateInfo = (newInfo) => {
        setWeatherInfo(newInfo);
    }

    return (
        <div>
            <h1>Weather App</h1>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo}/>
        </div>
  );
}
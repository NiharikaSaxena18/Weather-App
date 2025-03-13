import SearchBox from './SearchBox'
import Info from './Info'
import { useState } from 'react';

export default function WeatherApp() {
    const [weatherInfo, setWeatherInfo] = useState({
        temp: 21,
        temp_min: 18,
        temp_max: 24,
        feels_like: 20,
        city: "Emerald City",
        country: "Wonderland",
        desc: "Nice and cool",
        windspeed: 12,
        humidity: 28
    });

    let updateInfo = (newRes) => {
        setWeatherInfo(newRes);
    };

    return (
        <>
        <h1>Weather App</h1>
        <SearchBox updateInfo={updateInfo}/><br/>
        <Info info={weatherInfo}/>
        </>
    );
}
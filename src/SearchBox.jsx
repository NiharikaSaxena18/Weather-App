import "./SearchBox.css";
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import { useState } from "react";

export default function SearchBox({updateInfo}) {
    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const apiKey = import.meta.env.VITE_API_KEY;

    let getWeather = async (city) => {
        let response = await fetch(`${API_URL}?q=${city}&appid=${apiKey}&units=metric`);
        let data = await response.json();
        console.log(data);
        let result = {
            temp: data.main.temp,
            temp_min: data.main.temp_min,
            temp_max: data.main.temp_max,
            feels_like: data.main.feels_like,
            city: data.name,
            country: data.sys.country,
            desc: data.weather[0].description,
            windspeed: data.wind.speed,
            humidity: data.main.humidity
        };
        console.log(result);
        return result;
    };

    let [city,setCity] = useState("");

    let handleChange = (e) => {
        setCity(e.target.value);
    };

    let handleSubmit = async (e) => {
        e.preventDefault();
        console.log(city);
        setCity("");
        let newInfo = await getWeather(city);
        updateInfo(newInfo);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="search-box">
            <input type="text" placeholder="Search city"
            required value={city} onChange={handleChange} /><br/><br/>
            <Button variant="contained" endIcon={<SendIcon />}
            type="submit">Search</Button>
            </div>
        </form>
    );
}
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import WbTwilightIcon from '@mui/icons-material/WbTwilight';
import "./Info.css";

export default function Info({info}) {

    let INIT_URL = "https://imgs.search.brave.com/xPF7VMqQUkHWrbBtmETldnUcP9cXHZn8mIkOxBNRuuQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvNTE3/MTg4Njg4L3Bob3Rv/L21vdW50YWluLWxh/bmRzY2FwZS5qcGc_/cz02MTJ4NjEyJnc9/MCZrPTIwJmM9QTYz/a29QS2FDeUl3UVdP/VEZCUldYal9Qd0Ny/UjRjRW9PdzJTOVE3/eVZsOD0";
    let HOT_URL = "https://images.unsplash.com/photo-1714552815828-22d8b675d54b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    let COLD_URL = "https://images.unsplash.com/photo-1518873890627-d4b177c06e51?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    let RAIN_URL = "https://imgs.search.brave.com/fa6Mxj0ZBWo50RowjMEglXYrDESk5ErAyZFoS4iWBQA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAwLzMyLzk4LzQ4/LzM2MF9GXzMyOTg0/ODkxXzJ4aHBOdWli/c25HZXBIODdCSzhS/MnA4WGptekIyVzN1/LmpwZw";

    return (
        <div className="info-box">
            <Card sx={{ minWidth: 300, maxWidth: 350, borderRadius: 2, boxShadow: 5 }}>
                <CardActionArea>
                    <CardMedia
                    component="img" height="180"
                    image= {info.humidity>75 ? RAIN_URL : info.temp>30 ? HOT_URL : info.temp<15 ? COLD_URL : INIT_URL}
                    alt="City"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">{info.city}, {info.country}
                            &nbsp; {info.humidity>75 ? <ThunderstormIcon/> : info.temp>30 ? <WbSunnyIcon/> : info.temp<15 ? <AcUnitIcon/> : <WbTwilightIcon/>}</Typography>
                        <Typography variant="body2" sx={{ color: 'text.tertiary' }} component={"span"}>
                            <h3>Temperature: {info.temp}°C</h3>
                            <h3>Min Temperature: {info.temp_min}°C</h3>
                            <h3>Max Temperature: {info.temp_max}°C</h3>
                            <h3>Feels Like: {info.feels_like}°C</h3>
                            <h3>Description: {info.desc}</h3>
                            <h3>Wind Speed: {info.windspeed} m/s</h3>
                            <h3>Humidity: {info.humidity}%</h3>
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </div>
    );
}
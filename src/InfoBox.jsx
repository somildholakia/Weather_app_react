import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";

export default function InfoBox() {

    const INITIAL_URL = "https://plus.unsplash.com/premium_vector-1714142580885-97d3f0e39f98?q=80&w=2054&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

    let info = {
        city: "mumbai",
        feelsLike: 30.68,
        humidity: 60,
        tempMax: 28.79,
        temp: 28.79,
        tempMin: 28.79,
        weather: "clear sky",
    }

    return (
        <div className="InfoBox">
            <h2>Weather Info - {info.weather}</h2>

            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    sx={{ height: 180 }}
                    image={INITIAL_URL}
                    title="Weather App"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {info.city}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'black' }} component={"span"}>

                      <span className='snd-title'> {info.weather} </span>
                        <p>Temperature = {info.temp}&deg;C</p>
                        <p>Humidity = {info.humidity}</p>
                        <p>Min Temp = {info.tempMin}&deg;C</p>
                        <p>Max Temp = {info.tempMax}&deg;C</p>
                        <p>Feels Like = {info.feelsLike}&deg;C</p>
                         


                      
                    </Typography>
                </CardContent>
              
            </Card>

        </div>
    );
}
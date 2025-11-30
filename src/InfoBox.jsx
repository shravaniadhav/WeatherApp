import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";

export default function InfoBox({info}){

    const IMG_URL = "https://images.unsplash.com/photo-1722858344552-7acf888a7046?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    // let info={
    //     city:"Pune",
    //     feelsLike: 23.15,
    //     humidity: 92,
    //     temp: 22.45,
    //     tempMax: 22.45,
    //     tempMin: 22.45,
    //     weather: "scattered clouds"
    // }

    const HOT_URL = "https://media.istockphoto.com/id/824845572/photo/thermometer-sun-high-degres-hot-summer-day-high-summer-temperatures.webp?a=1&b=1&s=612x612&w=0&k=20&c=DPDwtq156djUSKSd57TR23BmU4vzC8xqolwMkqHCdfU=";
    const COLD_URL = "https://images.unsplash.com/photo-1457269449834-928af64c684d?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const RAIN_URL = "https://images.unsplash.com/photo-1664887981255-55ef7a62e19d?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    return (
        <div className="InfoBox">
              
            <div className='cardContainer'>
              <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image =  {info.humidity > 80 ? RAIN_URL : info.temp > 15 ? HOT_URL : COLD_URL }
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city} {info.humidity > 80 ? <i class="fa-solid fa-cloud-bolt"></i> : info.temp > 15 ? <i class="fa-solid fa-sun"></i> : <i class="fa-solid fa-snowflake"></i> }
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
        
           <p>Temperature = {info.temp}&deg;C</p>
           <p>Humidity = {info.humidity}</p>
           <p>Min Temp = {info.tempMin}</p>
           <p>Max Temp = {info.tempMax}</p>
           <p>The Weather can be described as <i>{info.weather}</i> & feels Like = {info.feelsLike}&deg;C</p>
          
        </Typography>
      </CardContent>

    </Card>
      </div>
        </div>
    )
}
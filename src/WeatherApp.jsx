import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";


export default function Weather(){

   const[weatherInfo, setWeatherInfo]=useState({
        city:"Wonderland",
        feelsLike: 23.15,
        humidity: 92,
        temp: 22.45,
        tempMax: 22.45,
        tempMin: 22.45,
        weather: "scattered clouds"
   });

   let updateInfo=(newInfo)=>{
    setWeatherInfo(newInfo);
   }

    return(
        <div style={{textAlign:"center"}}>
            <h2>Weather App</h2>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo}/>
        </div>
    )
} 
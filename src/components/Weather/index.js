import './style.css';
import { useEffect, useState } from 'react'
import axios from 'axios'

function Weather() {
  const [weatherData, setWeatherData] = useState({ //weatherData is our state variable and setWeatherData is a function used to change that variable
    temp: 0,
    feels_like: 0,
    weatherMain: "",
    weatherDescription: "",
    iconCode: "01d",
    placeName: "",
    windSpeed: 0,
  })

  // const [formData, setFormData] = useState({
  //   lat: 0,
  //   lon: 0
  // })

  const [latAndLon, setLatAndLon] = useState({
    lat: 38.88,
    lon: -77.05
  })

  useEffect(() => {
    const fetchData = async () => {
      console.log('test');
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=38.820450&lon=-77.050552&units=imperial&appid=${process.env.REACT_APP_WEATHER_KEY}`)
      const weatherResponse = response.data
      setWeatherData({
        temp: weatherResponse.main.temp,
        feels_like: weatherResponse.main.feels_like,
        weatherMain: weatherResponse.weather[0].main,
        weatherDescription: weatherResponse.weather[0].description,
        iconCode: weatherResponse.weather[0].icon,
        placeName: weatherResponse.name,
      })
    }
    fetchData();
  }, [latAndLon])

//   const handleChange = (event) => {
//     setFormData({...formData, [event.target.name]: event.target.value})
//   }

//   const handleSubmit = (event) => {
//     event.preventDefault()
//     setLatAndLon(formData)
//   }
  
  return (
        <div className="weatherWid">      
          
           <p className='weatherCity'> {weatherData.placeName}</p>
          <p className='weatherTemp'>{weatherData.temp}°</p> 
          

          {/* <img className="weatherIcon" alt="weather icon" src={`http://openweathermap.org/img/wn/${weatherData.iconCode}@2x.png`}/> */}
          <p className="weatherDetails">
           {weatherData.weatherDescription}
          </p>


          </div>
      );
    }

export default Weather;
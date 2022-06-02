import React, { useState, useEffect } from 'react'
import axios from 'axios';
import './style.css'
import GetNumberOfPosts from './GetNumberOfPosts';


function Apod() {

  //useState hook adds state to the function component
  //apodData is the state variable
  //setApodData is the function that changes that variable
const [apod, setApod] = useState({});

console.log("PINK");

// const [formData, setFormData] = useState({
//   date: 0,
//   number_of_results: 0
// })

// const [latAndLon, setLatAndLon] = useState({
//   date: today,
//   number_of_results: 1
// })

//useEffect hook fetches data after render
//similar to react class lifecycle methods
useEffect(() => {
  const fetchData = async () => {
    let response = await axios.get(
      `https://api.nasa.gov/planetary/apod?api_key=eqGATUERMZJyV6LSOb2A5L9SSC3jhWJrjKS4ikba`
    );
    setApod(response.data);
    console.log(response.data)
  };
  fetchData();
}, [])

//async, await. TRY, CATCH.
//.get api endpoint
//include process.env in our api key in endpoint so it is able to read the .env file
//sets setApodData to response from the  api fetch, or...
// ...fetching the data from our API and setting it as the new value to our data variable

// const fetchData = async () => {
//   let response = await axios.get(
//     `https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_API_KEY}`
//   );
//   setApodData(response.data.Search);
// };


  return (
    <div id="apodSection" className='apodContainer'>

      <div className='apodNasaHeader'>  
        <h1>NASA's Astronomy Picture of the Day</h1> 
      </div>
      <div className='apodContent'>
        <div className='apodImg'>
          <a href={apod.hdurl}>
            <img src={apod.url} 
            alt="NASA Astronomy Picture of the Day"
            className='apodImg'
            width="auto" 
            title="Click to see HD image"
            // height="80%" 
            />
          </a>
        </div>
        <div className='apodDetails'>
          <div className='apodTitle'>{apod.title}</div>
          <div className='apodExplanation'> 
            <div className='apodDate'>
              {apod.date}
            </div>
            {apod.explanation}
          </div>
        <div className='apodGetMore'><button>Get Another APOD</button></div>


      </div>
    </div> </div>
  )
};







export default Apod;









//     <div></div>
//   </div>

//   // <Apod
//   //   favorites={favorites}
//   //   dispatch={dispatch}
//   //   movie={movie}
//   //   key={index}
//   // />

// ))

// };
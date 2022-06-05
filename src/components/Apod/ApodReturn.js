import React from "react";
import { useState, useEffect } from 'react';
import axios from 'axios'
import './style.css'


function ApodReturn() {
  const [movies, setMovies] = useState([]);


  useEffect(() => {
  const fetchData = async () => {
    let response = await axios.get(
      `https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_NASA_KEY}&count=10`
    );
    setMovies(response.data);
  }; fetchData();
}, [])

console.log(movies)


  return (
    <div>

<ul>
      {movies.map((movie, date) => (
        <li key={date} >
       {movie.title}
       {movie.date}
       <button>more info</button>
</li>
      )
      
      
      )}
'</ul>
    </div>
  );
}

export default ApodReturn;

  // useEffect(() => {
  //   const fetchData = async () => {
  //     let response = await axios.get(
  //       `https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_NASA_KEY}&count=5`
  //     );
  //     setApodData(response.data);
  //     console.log(response.data)

  //     console.log(apodData)
  //   };
  //   fetchData();
  // }, [apodData])

import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom";
import axios from "axios";
import './style.css'



function GetNumberOfPosts() {

  //useState hook adds state to the function component
  //apodData is the state variable
  //setApodData is the function that changes that variable

console.log("GetNumberAPODPosts");
useEffect(() => {
  const fetchData = async () => {
    let response = await axios.get(
      `https://api.nasa.gov/planetary/apod?api_key=eqGATUERMZJyV6LSOb2A5L9SSC3jhWJrjKS4ikba&count=5`
    );
    setApod(response.data);
    console.log(response.data)
  };
  fetchData();
}, [])



  return(
    apodData.map((apod, index) =>
        <div key={index} className='apodCards'>
            <div>{apod.title}</div>
            <div><i>{apod.date}</i></div>
            <div><a href={apod.hdurl}><img src={apod.url} alt="NASA Astronomy Picture of the Day" width="40%" height="auto"/></a></div>
        </div>
    ))
  }


export default GetNumberOfPosts
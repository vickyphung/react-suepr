import React, { useState, useEffect } from 'react'
import axios from 'axios';
import './style.css'
import { useNavigate } from 'react-router-dom';

function Apod(props) {
  //useState hook adds state to the function component
  //apod is the state variable
  //setApod is the function that changes that variable
const [apod, setApod] = useState({});

//Variable for function to show and hide APOD details
const [readMore,setReadMore]=useState(false);

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

const navigate = useNavigate();




const [formData, setFormData] = useState('')

const handleChange = (event) => {
  setFormData(event.target.value)
}

const handleSubmit = (event) => {
  event.preventDefault()
  props.setApodDate(formData)
 
}





const [apodDate, setApodDate] = useState(new Date());




useEffect(() => {
  const fetchData = async () => {
    let response = await axios.get(
      `https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_NASA_KEY}`
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
        <span className='apodDate'>{apod.date}</span>
      </div>
      <div className='apodContent'>
        <div className='apodTitle'>{apod.title}</div>
        <div className='apodImg'>
          <a href={apod.hdurl}>
            <img src={apod.url} 
            alt="NASA Astronomy Pic of the Day"
            className='apodImg'
            width="auto" 
            title="Click to see HD image"
            />
          </a>
        </div>
        <div className='apodDetails'>
          <div>
          <button className='apodBtn' onClick={()=>{setReadMore(!readMore)}}>Details</button>
            <p className='apodExplanation'>{readMore && apod.explanation} </p>
          </div>
        </div>










<div className='formInput'>
    <form onSubmit={handleSubmit}>
      <label>
        date:
        <input type="date" placeholder="2022-05-31" onChange={handleChange} />
      </label>
      <input type="submit" value="Submit" />
    </form>
  </div>
 

<div>


<button className='apodBtn' onClick={()=>navigate('/apodreturn')}>Random</button>

</div>














    </div>
  </div>  
  )
};

export default Apod;






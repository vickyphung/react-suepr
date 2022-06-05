
import React from "react";
import axios from 'axios'
import { useState, useEffect } from "react";


const ApodDate = (props) => {
const [apodData, setApodData] = useState({});


    useEffect(()=>{
        const fetchData = async () => {
            if (props.testDate) {
                console.log ("TEST DATE FROM FORM SUCCESSFULLY PASSED")
                console.log (props.testDate)
                const response = await axios.get(`https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_NASA_KEY}&date=${props.testDate}`)
                setApodData(response.data)
            } 
        }
        fetchData();
    }, [props.testDate])
            
    console.log(apodData)

    return (
        <div>
            <p>{apodData.title} and {apodData.date}</p>
            <img src={apodData.url} 
            alt="NASA Astronomy Picture of the Day"
            className='apodImg'
            width="auto" 
            title="Click to see HD image"
            />

        </div>
    )
}



export default ApodDate;


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
        <div className="dateContainer">
            <div className='apodTitle'>{apodData.title}<br></br>
                <span className='apodDate'>{apodData.date}</span>
            </div>
            <div className='apodImg'>
                 <a href={apodData.hdurl}>
                    <img src={apodData.url} 
                   className='apodImg'
                    width="auto" 
                    />
                </a>
            </div>
            <div className='apodExplanation'>
                {apodData.explanation}
            </div>
        </div>
    )
}


export default ApodDate;

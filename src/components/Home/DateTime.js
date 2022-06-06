import  React, { useState , useEffect } from 'react'
import './style.css'

export const DateTime = () => {

    const [date,setDate] = useState(new Date());
    
    useEffect(() => {
        const timer = setInterval(()=>setDate(new Date()), 1000 )
        return function cleanup() {
            clearInterval(timer)
        }
    
    });






    
    return(
        <div className='dateTime'>
           <div> <p> {date.toLocaleTimeString()}</p> </div>
           <div>
            <p>  {date.toDateString()}</p>
            </div>
        </div>
    )
}

export default DateTime
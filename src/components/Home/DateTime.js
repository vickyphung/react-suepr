import  React, { useState , useEffect } from 'react'
import './style.css'

export const DateTime = () => {

    const [date,setDate] = useState(new Date());
    


    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    

    useEffect(() => {
        const timer = setInterval(()=>setDate(new Date()), 1000 )
        return function cleanup() {
            clearInterval(timer)
        }
    
    });

    
    return(
        <div className='dateTime'>
            <div className='date'>
                <p>{date.toLocaleDateString(undefined, options)}</p>
            </div>
            <div className='time'> <p> {date.toLocaleTimeString()}</p> </div>
        </div>
    )
}

export default DateTime
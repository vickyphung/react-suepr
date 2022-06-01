import './style.css';
import Intro from './Intro.js'
import Apod from "../Apod"
import Weather from '../Weather';

function Home() {
  return (
    <div className="homeContainer">


      <div className='homeContent'>
        <div> <Intro /></div>
       
       
       
       
       <div className='dashboard'>
         <div className="dateAndCal">
          <div className='dateDash'><text>Date</text></div>
          <div className='calendarDash'>Calendar</div>
         </div>
         <div className='weatherDash'><Weather /></div>
         <div className='dash'>Dash, events?</div>
      </div>

      <div className="toDoDash">
        To Do
      </div>




        <div><Apod /></div>
        {/* <Blog /> */}
        {/* <Reddit /> */}
      </div>
        

    
    

    </div>
  );
}

export default Home;

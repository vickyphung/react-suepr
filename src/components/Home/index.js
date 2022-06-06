import './style.css';
import Intro from './Intro.js'
import Weather from '../Weather';
import DateTime from './DateTime';
import ToDo from '../ToDo.js';
import Stopwatch from '../Stopwatch';
function Home() {



  return (
    <div className="homeContainer">

      <div className='homeContent'>


       <div className='dashboard'>
          <div className="dateAndCal">
            <div className='dateDash'><DateTime /></div>
          </div>
          <div className='weatherDash'><Weather /></div>
      </div>

      <div className='dash'><Stopwatch /></div>
      
      <div className="toDoDash"><ToDo /></div>




    


      </div>
    </div>
  );
}

export default Home;

import './style.css';
import Intro from './Intro.js'
import Weather from '../Weather';
import DateTime from './DateTime';
import ToDo from '../ToDo.js';
function Home() {



  return (
    <div className="homeContainer">


      <div className='homeContent'>
        {/* <div> <Intro /></div> */}
       
       
       
       
       <div className='dashboard'>
         <div className="dateAndCal">
          <div className='dateDash'><DateTime /></div>
         </div>
         <div className='weatherDash'><Weather /></div>
         {/* <div className='dash'>[empty]</div> */}
      </div>

      <div className="toDoDash">
        <ToDo />
      </div>




        {/* <div><Apod /></div> */}
        {/* <Blog /> */}
        {/* <Reddit /> */}
      </div>
        

    
    

    </div>
  );
}

export default Home;

import './style.css';
import Weather from '../Weather';
import DateTime from './DateTime';
import ToDo from '../ToDo.js';
import Stopwatch from '../Stopwatch';
function Home() {



  return (
    <div className="container">

      <div className='heading'><h1>Dashboard</h1></div>

      <div className='content'>
        <div className='dateDash'><DateTime /></div>
        <div className='weatherDash'><Weather /></div>
        
        
        {/* <div className='dash'><Stopwatch /></div> */}
        
        {/* <div className="toDoDash"><ToDo /></div> */}
      </div>
      
    </div>
  );
}

export default Home;

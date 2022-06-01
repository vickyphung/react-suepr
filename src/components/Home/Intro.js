import './style.css';

function Intro(props) {

const greeting = "Mare cœlo miscere"

  return (
    <div className="introContent">
      
    <div>
      <p>
         hello. i am developing this website for personal use, learning, and being cool. </p>
    </div>

      <div className='testingProps'>

        <p>{greeting}, {props.name}</p>


      </div>




    </div>
  );
}





export default Intro;

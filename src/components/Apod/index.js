import './style.css'
import DateInput from './components/DateInput';
import ApodHome from './ApodHome';
import ApodDate from './components/ApodDate';
import ApodRandom from './components/ApodRandom'
import {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import RandomBtn from './components/RandomBtn';
import ApodNav from './components/ApodNav';

function Apod(props) {
    
  const [testDate, setTestDate] = useState('')
  const navigate = useNavigate();

//In Apod index, which is where we call setTestDate,
//and set it to the actual apod data (when we click on the button),
//because we put setApodDate={setTestDateAndLink} in the Apod route path BELOW,
//when we call setTestDate (in Apod), it executes the function setTestDateandLink,
//which in turn, sets the testDate that we declared ABOVE,
//to whatever data we put in when we call setTestDate(<whatever data>),
//and by putting testDate={testDate} in the route path BELOW
//ApodDate is able to receive a the testDate prop from the ApodIndex

  const setTestDateAndLink = (formData) => {
    setTestDate(formData)
    // navigate('/apoddate')
  }

  const [randomButton, setRandomButton] = useState('')

  const setRandomButtoneAndLink = (randomInput) => {
    setRandomButton(randomInput)
    // navigate('/apoddate')
  }
 

  return (
    <div id="apodSection" className='apodContainer'>

{/* 
          <Routes>
            <Route path="/" element={<ApodHome />} />
            <Route path="/apoddate" element={<ApodDate testDate={testDate}/>} />
            <Route path="/apodrandom" element={<ApodRandom randomButton={randomButton}/>} />
          </Routes> */}







          <div><ApodNav /> </div>
      <div><ApodHome /></div>
      <div><DateInput setApodDate={setTestDateAndLink} /></div>
      <div><ApodDate testDate={testDate}/></div>


      <div><RandomBtn setRandom={setRandomButtoneAndLink}/></div>
      <div><ApodRandom randomButton={randomButton}/></div>
  </div>  
  )
};

export default Apod;
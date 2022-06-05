import { useNavigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Nav from "./components/Nav";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Apod from "./components/Apod";
import ApodDate from "./components/Apod/ApodDate.js";
import ApodReturn from './components/Apod/ApodReturn.js';
import ToDo from "./components/ToDo.js";
import { useState } from "react";



function App() {


//Declaring the Props I intend to Pass to ApodDate
const water = "YELLLOW"
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
  navigate('/apoddatepage')
}


  return (
    <div>
      <Nav />
      <div className="AppContainer">
        <div className="">
          <Header />
        </div>
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/apod" element={<Apod setApodDate={setTestDateAndLink}/>} />
            <Route path="/apoddatepage" element={<ApodDate water={water} testDate={testDate}/>} />
            <Route path="/apodreturn" element={<ApodReturn />} />
            <Route path="/todo" element={<ToDo />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;

import { Route, Routes } from "react-router-dom";
import "./App.css";
import Nav from "./components/Nav";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import ToDo from "./components/ToDo.js";

import Apod from "./components/Apod";
import ApodNav from './components/Apod/components/ApodNav';
import Random from "./components/Apod/components/Random";
import Date from "./components/Apod/components/Date";

function App() {
  return (
    <div>
      <Nav />
      <div className="AppContainer">
         <div className="">
          <Header />
        </div>
        <div className="">
          <ApodNav />
        </div>
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/todo" element={<ToDo />} />
            <Route path="/about" element={<About />} />

            <Route path="/apod" element={<Apod />} />
            <Route path="/random" element={<Random />} />
            <Route path="/date" element={<Date />} />
      
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;

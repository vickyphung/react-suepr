import { Route, Routes } from "react-router-dom";
import "./App.css";
import Nav from "./components/Nav";
import Home from "./components/Home";
import About from "./components/About";
import ToDo from "./components/ToDo.js";
import Journal from "./components/Journal";
import Stuff from "./components/stuff";
import Projects from "./components/Projects";
import StopWatch from "./components/Stopwatch";

function App() {
  return (
    <div>
      <Nav />
      <div className="AppContainer">

        <div>
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/todo" element={<ToDo />} />
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<Journal />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/stuff" element={<Stuff />} />

            <Route path="/stopwatch" element={<StopWatch />} />

      
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;

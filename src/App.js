import { Route, Routes } from "react-router-dom";
import "./App.css";
import Nav from "./components/Nav";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Apod from "./components/Apod";
import Footer from "./components/Footer";

function App() {
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
            <Route path="/apod" element={<Apod />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;

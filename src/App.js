import { Routes, Route } from "react-router-dom";
import "./App.css";
import MainTab from "./Components/Home";
import Nav from "./Components/Nav";
import About from "./Components/About";
import Work from "./Components/Work";
import Contact from "./Components/Contact";
import More from "./Components/More";

function App() {
  return (
    <div className="App text-white">
      <div className="">
        <div id="sidebar">
          <Nav />
        </div>
        <br />
        <div id="main-tab">
          <Routes>
            <Route path="/" element={<MainTab />} />
            <Route path="/about" element={<About />} />
            <Route path="/work" element={<Work />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/more" element={<More />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;

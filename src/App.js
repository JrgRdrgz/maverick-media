import './App.css';
import Navbar from "./components/navbar";
import React from 'react';
import Livestream from './pages/livestream';
import Homepage from './pages/homepage';
import Media from './pages/media';
import About from './pages/about';
import Contact from './pages/contact';
import Footer from './pages/footer';
import Blog from './pages/blog';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar /> 
        <Routes>
          <Route path="/" element={<Homepage/>}/>
          <Route path="livestream" element={<Livestream />}/>
          <Route path="media" element={<Media/>}/>
          <Route path="about" element={<About/>}/>
          <Route path="contact" element={<Contact/>}/>
          <Route path="blog" element={<Blog/>}/>
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}
export default App;

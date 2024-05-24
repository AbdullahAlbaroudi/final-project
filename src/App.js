import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Menu from './components/Menu';
import Review from './components/Review';
import SpecialRequest from './components/SpecialRequest';
import Footer from './components/Footer';
import './App.css'; 

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/review" element={<Review />} />
          <Route path="/SpecialRequest" element={<SpecialRequest />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
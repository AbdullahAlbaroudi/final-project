import React from 'react';
import { Link } from 'react-router-dom';
import homeImg1 from '../images/logo.png';
import homeImg2 from '../images/grinder.png';
import homeImg3 from '../images/v60.png';
import homeImg4 from '../images/cup.png';


function Home() {
  return (
    <section className="home" id="home">
      <div className="row">
        <div className="content">
          <h3>Crafting Your Perfect Coffee Experience
</h3>
          <Link to="/menu" className="btn">buy one now</Link>
        </div>
        <div className="image">
          <img src={homeImg1} className="main-home-image" alt="Coffee" />
        </div>
      </div>
      <div className="image-slider">
        <img src={homeImg4} alt="home1" />
        <img src={homeImg2} alt="home2" />
        <img src={homeImg3} alt="home3" />
      </div>
    </section>
  );
}

export default Home;

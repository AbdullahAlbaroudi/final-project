import React from 'react';
import { Link } from 'react-router-dom';

import homeImg1 from '../images/logo.png';

function About() {
  return (
    <section className="about" id="about">
      <h1 className="heading">about us</h1>
      <div className="row">
        <div className="image">
          <img src={homeImg1} alt="" />
        </div>
        <div className="content">
          <h3 className="title">Discover the Art of Coffee Making with Baro
</h3>
          <p>
          Welcome to Baro, your premier destination for all things coffee! At Baro,
           we are passionate about providing coffee enthusiasts with the finest tools and accessories to enhance their brewing experience.
            From high-quality coffee grinders to the perfect V60 dripper, we offer a curated selection of products designed to bring out the best in every cup.
             Our mission is to empower you to create the perfect brew,
              whether you’re a seasoned barista or a home coffee lover. Join us on this flavorful journey and discover the art of coffee making with Baro.
          </p>
          <Link to="/menu" className="btn">see the menu</Link>
          <div className="icons-container">
           
          
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;

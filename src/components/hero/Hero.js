import React from "react";
import hero__watch from "../../assets/images/hero__watch.png";
import search__icon from "../../assets/icons/search__icon__hero.svg";

const Hero = () => {
  return (
    <section id="hero" className="hero">
      <div className="container hero__wrapper">
        <div className="hero__wrapper__content">
          <h1>Discover Most Suitable Watches</h1>
          <p>
            Find the best, reliable, and cheap smart watches here. We focus on
            product quality. Here you can find smart watches of almost all
            brands. So why you are waiting? Just order now!
          </p>
          <div className="hero__search">
            <img src={search__icon} alt="search icon" />
            <input type="email" placeholder="Find the best brands" />
            <button>Search</button>
          </div>
        </div>
        <div className="hero__wrapper__image">
          <img src={hero__watch} alt="hero image" />
        </div>
      </div>
    </section>
  );
};

export default Hero;

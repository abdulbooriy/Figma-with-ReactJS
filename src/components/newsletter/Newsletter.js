import React from "react";
import apple__image from "../../assets/images/apple_watch_one.png";
import search__image from "../../assets/icons/search__icon.svg";

const Newsletter = () => {
  return (
    <section id="newsletter" className="newsletter">
      <div className="container newsletter__wrapper">
        <div className="newsletter__main__card">
          <div className="newsletter__card__body">
            <h3>Subscribe To Newsletter</h3>
            <p>Get free guide about smart watches daily.</p>

            <div className="newsletter__card__body__search">
              <img src={search__image} alt="search icon" />
              <input type="email" placeholder="Enter Email Address" />
              <button>Subscribe</button>
            </div>
          </div>

          <div className="newsletter__card__image">
            <img src={apple__image} alt="newsletter image" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;

import React from "react";
import person__one__image from "../../assets/images/person-one.png";
import person__two__image from "../../assets/images/person_two.png";
import star__icons from "../../assets/icons/star.svg";

const Client = () => {
  return (
    <section id="clients" className="clients">
      <div className="title">
        <p>
          <a href="#">
            <span>Here are our some of the best clients.</span>
          </a>
        </p>
        <h3>What People Say About Us</h3>
      </div>
      <div className="container clients__wrapper">
        <div className="clients__card">
          <div className="clients__card__image">
            <img src={person__one__image} alt="person one image" />
          </div>
          <div className="clients__card__body">
            <h3>Hamza Faizi</h3>
            <p>
              Don’t waste time, just order! This is the best website to puschase
              smart watches.
            </p>
            <div className="clients__card__stars">
              {Array(5)
                .fill("")
                .map((_, inx) => (
                  <img key={inx} src={star__icons} alt="star icons" />
                ))}
            </div>
          </div>
        </div>
        <div className="clients__card">
          <div className="clients__card__image">
            <img src={person__two__image} alt="person two image" />
          </div>
          <div className="clients__card__body">
            <h3>Hafiz Huzaifa</h3>
            <p>
              I’ve been purchasing smart watches of Mohid for a long time. All
              the products are good quality.
            </p>
            <div className="clients__card__stars">
              {Array(5)
                .fill("")
                .map((_, inx) => (
                  <img key={inx} src={star__icons} alt="star icons" />
                ))}
            </div>
          </div>
        </div>
      </div>
      <div className="clients__card__dots">
        {Array(4)
          .fill("")
          .map((_, inx) => (
            <div key={inx} className="dots"></div>
          ))}
        <div className="dots_with__color"></div>
      </div>
    </section>
  );
};

export default Client;

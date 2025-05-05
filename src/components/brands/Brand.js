import React from "react";
import apple__image from "../../assets/images/apple.png";
import xiaomi__image from "../../assets/images/xiaomi.png";
import fitbit__image from "../../assets/images/fitbit.png";

const Brand = () => {
  return (
    <section id="brands" className="brands">
      <div className="container brands__wrapper">
        <div className="brand__card">
          <div className="brand__card__image">
            <img src={apple__image} alt="apple image" />
          </div>
          <div className="brand__card__body">
            <h3>Apple</h3>
            <p>
              Apple is one of the most famous smart watches providing company.
            </p>
          </div>
        </div>
        <div className="brand__card">
          <div className="brand__card__image">
            <img src={xiaomi__image} alt="apple image" />
          </div>
          <div className="brand__card__body">
            <h3>Xiaomi</h3>
            <p>Xiaomi smart watches are produced by MI company.</p>
          </div>
        </div>
        <div className="brand__card">
          <div className="brand__card__image">
            <img src={fitbit__image} alt="apple image" />
          </div>
          <div className="brand__card__body">
            <h3>FitBit</h3>
            <p>
              FitBit smart watches are best for there health and fitness
              features.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Brand;

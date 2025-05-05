import React from "react";
import star__image from "../../assets/icons/star.svg";
import apple__one from "../../assets/images/apple_watch_one.png";
import apple__two from "../../assets/images/apple_watch_two.png";
import apple__three from "../../assets/images/apple_watch_three.png";
import apple__four from "../../assets/images/apple_watch_four.png";
import samsung__watch__pro from "../../assets/images/samsung_watch_pro.png";
import fitbit__max from "../../assets/images/fitbit_watch_max.png";
import favourite__icon from "../../assets/icons/favourite.svg";
import shopping__bucket from "../../assets/icons/shopping_cart__icon.svg";

const Products = () => {
  return (
    <section id="products" className="products">
      <div className="title">
        <p>
          <a href="#">
            <span>Find your favourite smart watch.</span>
          </a>
        </p>
        <h3>Our Latest Products</h3>
      </div>
      <div className="container products__wrapper">
        <div className="product__card">
          <div className="product__card__image">
            <img src={apple__one} alt="apple smart one" />
          </div>

          <div className="product__card__favourite">
            <div className="favourite__button">
              <img src={favourite__icon} alt="favourite icon" />
            </div>
          </div>
          <div className="product__card__shopping__bucket">
            <div className="shopping__bucket">
              <img src={shopping__bucket} alt="shopping__bucket icon" />
            </div>
          </div>

          <div className="product__card__body">
            <h3>Apple Smart I</h3>
            <div className="product__card__body__stars">
              {Array(5)
                .fill("")
                .map((_, inx) => (
                  <img key={inx} src={star__image} alt="stars" />
                ))}
            </div>
            <p>
              <span> $300.00</span>
              <strong>$255.00</strong>
            </p>
          </div>
        </div>

        <div className="product__card">
          <div className="product__card__image">
            <img src={apple__two} alt="apple smart one" />
          </div>
          <div className="product__card__body">
            <h3>Apple Smart II</h3>
            <div className="product__card__body__stars">
              {Array(5)
                .fill("")
                .map((_, inx) => (
                  <img key={inx} src={star__image} alt="stars" />
                ))}
            </div>
            <p>
              <span>$300.00</span>
              <strong>$255.00</strong>
            </p>
          </div>
        </div>
        <div className="product__card">
          <div className="product__card__image">
            <img src={apple__three} alt="apple smart one" />
          </div>
          <div className="product__card__body">
            <h3>Apple Smart III</h3>
            <div className="product__card__body__stars">
              {Array(5)
                .fill("")
                .map((_, inx) => (
                  <img key={inx} src={star__image} alt="stars" />
                ))}
            </div>
            <p>
              <span>$300.00</span>
              <strong>$255.00</strong>
            </p>
          </div>
        </div>
        <div className="product__card">
          <div className="product__card__image">
            <img src={apple__four} alt="apple smart one" />
          </div>
          <div className="product__card__body">
            <h3>Apple Smart IV</h3>
            <div className="product__card__body__stars">
              {Array(5)
                .fill("")
                .map((_, inx) => (
                  <img key={inx} src={star__image} alt="stars" />
                ))}
            </div>
            <p>
              <span>$450.00</span>
              <strong>$399.00</strong>
            </p>
          </div>
        </div>
        <div className="product__card">
          <div className="product__card__image">
            <img src={samsung__watch__pro} alt="apple smart one" />
          </div>
          <div className="product__card__body">
            <h3>Samsung Watch Pro</h3>
            <div className="product__card__body__stars">
              {Array(5)
                .fill("")
                .map((_, inx) => (
                  <img key={inx} src={star__image} alt="stars" />
                ))}
            </div>
            <p>
              <span>$300.00</span>
              <strong>$255.00</strong>
            </p>
          </div>
        </div>
        <div className="product__card">
          <div className="product__card__image">
            <img src={fitbit__max} alt="apple smart one" />
          </div>
          <div className="product__card__body">
            <h3>Fitbit Max 1</h3>
            <div className="product__card__body__stars">
              {Array(5)
                .fill("")
                .map((_, inx) => (
                  <img key={inx} src={star__image} alt="stars" />
                ))}
            </div>
            <p>
              <strong>$155.00</strong>
            </p>
          </div>
        </div>
        <button className="view__more__button">
          <span>View More</span>
        </button>
      </div>
    </section>
  );
};

export default Products;

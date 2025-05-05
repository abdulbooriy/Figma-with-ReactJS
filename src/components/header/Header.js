import React from "react";
import apple__watch__logo from "../../assets/icons/apple__watch__logo.svg";
import search__icon from "../../assets/icons/search__icon.svg";
import person__icon from "../../assets/icons/person__icon.svg";
import shopping_cart__icon from "../../assets/icons/shopping_cart__icon.svg";
import vector__icon from "../../assets/icons/Vector.svg";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <nav className="header__navbar">
          <div className="header__logo">
            <img src={apple__watch__logo} alt="apple watch icon" />
            <p>
              <a href="#">
                <span>Mohid</span>
              </a>
            </p>
          </div>

          <ul className="header__collection">
            <li className="header__collection__item">
              <a href="#">
                <span>Home</span>
              </a>
            </li>
            <li className="header__collection__item">
              <a href="#">
                <span>
                  Brands
                  <img src={vector__icon} alt="vector icon" />
                </span>
              </a>
            </li>
            <li className="header__collection__item">
              <a href="#">
                <span>Recent Products</span>
              </a>
            </li>
            <li className="header__collection__item">
              <a href="#">
                <span>Contact</span>
              </a>
            </li>
            <li className="header__collection__item">
              <a href="#">
                <span>About</span>
              </a>
            </li>
          </ul>

          <div className="header__options">
            <img src={search__icon} alt="search icon" />
            <img src={person__icon} alt="search icon" />
            <img src={shopping_cart__icon} alt="search icon" />
            <div className="shopping__cart__icon__counter">
              <div className="shopping__cart__counter">1</div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;

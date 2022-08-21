import React, { useState } from "react";
import "../../assets/scss/hamburger.scss";
import { NavLink, Link } from "react-router-dom";
import { FiShoppingBag } from "react-icons/fi";
import venia from "../../assets/images/venia.png";

function Hamburger(props) {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);
  return (
    <div className="hamburgerPhone">
      <div class="navbar">
        <div class="container nav-container">
          <input
            onClick={showSidebar}
            class="checkbox"
            type="checkbox"
            name=""
            id=""
            checked={sidebar}
          />
          <div class="hamburger-lines" onClick={showSidebar}>
            <span class="line line1"></span>
            <span class="line line2"></span>
            <span class="line line3"></span>
          </div>
          {console.log(sidebar, "showSidebar")}
          <div className="hamberger__logo">
            <NavLink className="" to="/">
              <img src={venia} />
            </NavLink>
          </div>
          <div className="header__icons">
            <ul>
              <NavLink to="/cart" className="">
                <FiShoppingBag />{" "}
                {props.countCartItems ? (
                  <button className="cartCount1">{props.countCartItems}</button>
                ) : (
                  ""
                )}
              </NavLink>{" "}
            </ul>
          </div>
          {sidebar ? (
            <div class="menu-items" onClick={showSidebar}>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <Link to="/women">Women</Link>
              </li>
              <li>
                <NavLink to="/men">Men</NavLink>
              </li>
              <li>
                <NavLink to="/smartGear">Smart Gear</NavLink>
              </li>
              <li>
                <NavLink to="/accessories">Accessories</NavLink>
              </li>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
}

export default Hamburger;

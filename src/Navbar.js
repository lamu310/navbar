import React, { useState, useRef, useEffect } from "react";
import { FaBars, FaTwitter } from "react-icons/fa";
import { links, social } from "./data";
import logo from "./logo.svg";

const Navbar = () => {
  const [height, setHeight] = useState(200);

  return (
    <>
      <nav>
        <div className="nav-center">
          <div className="nav-header">
            <img src={logo} alt="logo(coding addict)" />
            <button
              className="nav-toggle"
              onClick={() => {
                if (height == 200) {
                  setHeight(0);
                  return;
                }

                setHeight(200);
              }}
            >
              <FaBars />
            </button>
          </div>

          <div className="links-container" style={{ height: `${height}px` }}>
            <ul className="links">
              {links.map((item, index) => {
                return (
                  <li key={item.id}>
                    <a href={item.url}>{item.text}</a>
                  </li>
                );
              })}
            </ul>
          </div>

          <ul className="social-icons">
            {social.map((item) => {
              return (
                <li key={item.id}>
                  <a href={item.url}>{item.icon}</a>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

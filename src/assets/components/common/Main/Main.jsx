import React from "react";

const main = () => {
  return (
    <header>
      <div className="container">
        <div className="header-content">
          <h1>
            I'm a <br />
            <span>Anish Pokharel</span>
          </h1>
          <h3>Software Developer</h3>
          <ul className="social-media">
            <li>
              <a href="#" className="flex">
                <i className="fab fa-facebook-f"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default main;

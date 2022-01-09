import React from "react";

import '../styles/banner.scss';

const Banner = () => (
  <div className="banner">
    <div className="banner__heading">
      <span className="banner__heading-text--primary">
        Computer
      </span>
      <span className="banner__heading-text--secondary">
        Programmer
      </span>
    </div>
    <div className="banner__description">
      Sample Text
    </div>
  </div>
);

export default Banner;

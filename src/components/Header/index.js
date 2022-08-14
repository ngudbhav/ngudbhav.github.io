import React from "react";

import FixedBar from "../FixedBar";

import "./index.scss";

const CLASSNAME = 'header';

const Header = () => (
  <FixedBar className={CLASSNAME}>
    <div className={`${CLASSNAME}__name`}>
      Start
    </div>
    <div className={`${CLASSNAME}__know-more`}>
      <a href="#" className={`${CLASSNAME}__know-more-link`}>
        Know about me
      </a>
    </div>
  </FixedBar>
);

export default Header;

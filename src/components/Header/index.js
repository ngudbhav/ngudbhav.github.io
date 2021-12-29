import React from "react";

import FixedBar from "../FixedBar";

import { header } from "../styles/header.module.scss";

const Header = () => (
  <FixedBar className={header}>
    <div className={header.left}>
      Start
    </div>
    <div className={header.right}>
      End
    </div>
  </FixedBar>
);

export default Header;
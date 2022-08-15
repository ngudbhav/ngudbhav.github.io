import React from "react";

import FixedBar from "../FixedBar";
import { House } from 'phosphor-react';

import "./index.scss";

const CLASSNAME = 'header';

const Header = () => (
  <FixedBar className={CLASSNAME}>
    <div className={`${CLASSNAME}__home`}>
      <House size={40} />
    </div>
  </FixedBar>
);

export default Header;

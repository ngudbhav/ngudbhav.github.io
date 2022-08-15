import React from "react";

import FixedBar from "components/FixedBar";
import { HouseLine } from 'phosphor-react';

import "./index.scss";

const CLASSNAME = 'header';

const Header = () => (
  <FixedBar className={CLASSNAME}>
    <div className={`${CLASSNAME}__home`}>
      <HouseLine size={40} weight="fill" />
    </div>
  </FixedBar>
);

export default Header;

import React from "react";
import { Link } from "gatsby"
import { HouseLine } from 'phosphor-react';

import FixedBar from "components/FixedBar";

import "./index.scss";

const CLASSNAME = 'navbar';

const NavBar = () => (
  <FixedBar className={CLASSNAME}>
    <Link className={`${CLASSNAME}__home`} to="/">
      <HouseLine size={40} weight="fill" />
    </Link>
  </FixedBar>
);

export default NavBar;

import React from "react";
import { Link } from "gatsby"

import FixedBar from "components/FixedBar";
import { HouseLine } from 'phosphor-react';

import "./index.scss";

const CLASSNAME = 'header';

const Header = () => (
  <FixedBar className={CLASSNAME}>
    <Link className={`${CLASSNAME}__home`} to="/">
      <HouseLine size={40} weight="fill" />
    </Link>
  </FixedBar>
);

export default Header;

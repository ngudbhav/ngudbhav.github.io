import React from "react";
import TransitionLink from 'gatsby-plugin-transition-link';
import { HouseLine } from 'phosphor-react';

import FixedBar from "components/FixedBar";
import { TIMING } from 'utils/constants/anim';

import "./index.scss";

const CLASSNAME = 'navbar';

const NavBar = () => (
  <FixedBar className={CLASSNAME}>
    <TransitionLink
      className={`${CLASSNAME}__home`}
      to="/"
      title="Home"
      exit={{length: TIMING}}
      entry={{length: TIMING, delay: TIMING}}
    >
      <HouseLine size={40} weight="fill" />
    </TransitionLink>
  </FixedBar>
);

export default NavBar;

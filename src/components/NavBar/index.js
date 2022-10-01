import React from "react";
import TransitionLink from 'gatsby-plugin-transition-link';
import { HouseLine } from 'phosphor-react';

import FixedBar from "components/FixedBar";
import { TIMING } from 'utils/constants/anim';

import "./index.scss";

const CLASSNAME = 'navbar';

const NavBar = () => (
  <FixedBar className={`${CLASSNAME} ${CLASSNAME}--${window.location.pathname === '/' ? 'center' : 'right'}`}>
    <TransitionLink className={`${CLASSNAME}__home`} to="/" entryDelay={TIMING} exitLength={TIMING}>
      <HouseLine size={40} weight="fill" />
    </TransitionLink>
  </FixedBar>
);

export default NavBar;

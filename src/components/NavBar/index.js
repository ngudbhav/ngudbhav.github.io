import React, { useEffect, useState } from "react";
import TransitionLink from 'gatsby-plugin-transition-link';
import { HouseLine } from 'phosphor-react';

import FixedBar from "components/FixedBar";
import { TIMING } from 'utils/constants/anim';

import "./index.scss";

const CLASSNAME = 'navbar';

const NavBar = () => {
  const [isHome, setIsHome] = useState(false);
  useEffect(() => {
    setIsHome(window.location.pathname === '/');
  }, []);

  return (
    <FixedBar className={`${CLASSNAME} ${CLASSNAME}--${isHome ? 'center' : 'right'}`}>
      <TransitionLink className={`${CLASSNAME}__home`} to="/" entryDelay={TIMING} exitLength={TIMING}>
        <HouseLine size={40} weight="fill" />
      </TransitionLink>
    </FixedBar>
  );
};

export default NavBar;

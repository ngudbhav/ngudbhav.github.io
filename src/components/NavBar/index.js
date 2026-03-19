import React from "react";
import { Link } from "gatsby";
import { HouseLine, ArticleMedium } from 'phosphor-react';

import FixedBar from "components/FixedBar";

import "./index.scss";

const CLASSNAME = 'navbar';

const NavBar = () => (
  <FixedBar className={`${CLASSNAME} full-width flex-row space-between`}>
    <a
      className={`${CLASSNAME}__blog`}
      href="https://blog.ngudbhav.com"
      title="Blog"
      target="_blank"
      rel="noopener noreferrer"
    >
      <ArticleMedium size={40} weight="fill"/>
    </a>
    <Link
      className={`${CLASSNAME}__home`}
      to="/"
      title="Home"
    >
      <HouseLine size={40} weight="fill"/>
    </Link>
  </FixedBar>
);

export default NavBar;

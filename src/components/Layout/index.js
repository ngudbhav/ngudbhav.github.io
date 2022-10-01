import React from 'react';
import { TransitionPortal } from 'gatsby-plugin-transition-link';

import NavBar from 'components/NavBar';
import Header from 'components/Header';
import Box from "../Box";

// import './index.scss';

const CLASSNAME = 'layout';

const Body = React.memo(({ children }) => (
  <>
    {children}
  </>
));

const Layout = ({ children, headerProps = {}, transitionStatus, useBox = false, boxProps = {} }) => (
  <div className={`${CLASSNAME} ${transitionStatus}`}>
    <TransitionPortal level="top">
      <NavBar />
    </TransitionPortal>
    <Header
      pageTransitionStatus={transitionStatus}
      { ...headerProps }
    />
    {useBox ? (
      <TransitionPortal>
        <Box { ...boxProps } >
          {children}
        </Box>
      </TransitionPortal>
    ) : (
      <Body>
        {children}
      </Body>
    )}
    {/*<TransitionPortal >*/}
    {/*  Hello*/}
    {/*</TransitionPortal>*/}
  </div>
);

export default Layout;

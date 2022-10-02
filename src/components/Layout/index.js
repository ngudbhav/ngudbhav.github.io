import React from 'react';
import { TransitionPortal } from 'gatsby-plugin-transition-link';

import NavBar from 'components/NavBar';
import Header from 'components/Header';

const CLASSNAME = 'layout';

const Body = React.memo(({ children }) => (
  <>
    {children}
  </>
));

const Layout = ({ children, headerProps = {}, transitionStatus }) => (
  <div className={`${CLASSNAME} ${transitionStatus}`}>
    <TransitionPortal level="top">
      <NavBar />
    </TransitionPortal>
    <Header
      pageTransitionStatus={transitionStatus}
      { ...headerProps }
    />
    <Body>
      {children}
    </Body>
  </div>
);

export default Layout;

import React from 'react';

import './index.scss';

const CLASSNAME = 'header';

const Header = ({ text1, text2, className, children, pageTransitionStatus }) => (
  <div className={`${className}__header align-center ${CLASSNAME} ${pageTransitionStatus}`}>
    {text1 && (
      <div className={`${className}__text h1 ${CLASSNAME}__text primary-font-color`} suppressHydrationWarning>
        {text1}
      </div>
    )}
    {text2 && (
      <h1 className={`${className}__text ${CLASSNAME}__text`} suppressHydrationWarning>
        {text2}
      </h1>
    )}
    {children}
  </div>
);

export default Header;

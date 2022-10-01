import React from 'react';

import './index.scss';

const CLASSNAME = 'header';

const Header = ({ text1, text2, className, children, pageTransitionStatus }) => (
  <div className={`${className}__header align-center ${CLASSNAME} ${pageTransitionStatus}`}>
    {text1 && (
      <div className={`${className}__text h1 ${CLASSNAME}__text`}>
        {text1}
      </div>
    )}
    {text2 && (
      <div className={`${className}__text h1 ${CLASSNAME}__text primary-font-color`}>
        {text2}
      </div>
    )}
    {children}
  </div>
);

export default Header;

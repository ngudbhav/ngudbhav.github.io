import React from "react";

import './index.scss';

const Container = ({ children, className, ...restProps }) => (
  <div className={`container ${className}`} { ...restProps }>
    {children}
  </div>
);

export default Container;

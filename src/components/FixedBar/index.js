import React from "react";

import './index.scss';

const FixedBar = ({ className= '',children }) => (
  <div className={`fixed-bar ${className}`}>
    {children}
  </div>
);

export default FixedBar;

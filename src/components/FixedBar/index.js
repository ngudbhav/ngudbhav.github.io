import React from "react";

import '../styles/fixed_bar.scss';

const FixedBar = ({ className= '',children }) => (
  <div className={`fixed-bar ${className}`}>
    {children}
  </div>
);

export default FixedBar;
import React from "react";

import { fixedBar } from '../styles/fixed_bar.module.scss';

const FixedBar = ({ className= '',children }) => (
  <div className={`${fixedBar} ${className}`}>
    {children}
  </div>
);

export default FixedBar;
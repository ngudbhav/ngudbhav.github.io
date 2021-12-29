import React from "react";

import FixedBar from "../FixedBar";

import { footer } from "../styles/footer.module.scss";

const Footer = () => (
  <FixedBar className={footer}>
    <div className={footer.left}>
      Start
    </div>
    <div className={footer.right}>
      End
    </div>
  </FixedBar>
);

export default Footer;
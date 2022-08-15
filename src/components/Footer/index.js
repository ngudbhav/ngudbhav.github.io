import React from "react";
import { StaticImage } from "gatsby-plugin-image"

import FixedBar from "components/FixedBar";

import "./index.scss";

const CLASSNAME = "footer";

const Footer = () => (
  <FixedBar className={CLASSNAME}>
    <div className={`${CLASSNAME}__music`}>
      <StaticImage
        src="../../images/svg/headphones.svg"
        alt="headphones"
        objectFit="contain"
        className={`${CLASSNAME}__music-image`}
      />
    </div>
    <div className={`${CLASSNAME}__video`}>
      <StaticImage
        src="../../images/svg/video.svg"
        alt="video"
        objectFit="contain"
        className={`${CLASSNAME}__video-image`}
      />
    </div>
  </FixedBar>
);

export default Footer;

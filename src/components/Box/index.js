import React from 'react';
import { Link } from "gatsby";

import './index.scss';

const CLASSNAME = 'box-link';

const Box = ({
  className, link, children, externalLink = false, component = Link,
}) => {
  const _component = externalLink ? 'a' : component;
  const _link = externalLink ? 'href' : 'to';
  const _target = externalLink ? 'target' : '';

  return React.createElement(
    _component,
    {
      className: `${className} align-center h2 ${CLASSNAME}`,
      [ _link ]: link,
      [ _target ]: '_blank',
      children,
    },
  );
};

export default Box;

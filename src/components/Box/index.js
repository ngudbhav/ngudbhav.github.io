import React from 'react';
import TransitionLink from 'gatsby-plugin-transition-link';

import { TIMING } from 'utils/constants/anim';

import './index.scss';

const CLASSNAME = 'box-link';

const Box = ({
  className, link, children, externalLink = false, component = TransitionLink,
}) => {
  const BoxContent = React.memo(() => (
    <div className="box-link__content">{children}</div>
  ));

  if (externalLink) {
    return (
      <a href={link} target="_blank" rel="noopener noreferrer" aria-label="Read more about Udbhav" className={`${className} align-center h2 ${CLASSNAME}`}>
        <BoxContent />
      </a>
    );
  } else {
    return React.createElement(
      component,
      {
        className: `${className} align-center h2 ${CLASSNAME}`,
        to: link,
        'aria-label': "Read more about Udbhav",
        exit: { length: TIMING },
        entry: { length: TIMING, delay: TIMING },
        children: <BoxContent />,
        activeClassName: 'box-link--active',
      },
    );
  }
};

export default Box;

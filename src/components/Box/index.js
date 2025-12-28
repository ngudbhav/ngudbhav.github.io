import React from 'react';
import TransitionLink from 'gatsby-plugin-transition-link';

import './index.scss';

const CLASSNAME = 'box-link';

const BoxContent = ({children}) => (
  <div className="box-link__content">{children}</div>
);

const Box = ({
  className, link, children, externalLink = false, component = TransitionLink, ...remainingProps
}) => {
  const [isActive, setIsActive] = React.useState(false);

  if (externalLink) {
    return (
      <a href={link} target="_blank" rel="noopener noreferrer" aria-label="Read more about Udbhav" className={`${className} align-center h2 ${CLASSNAME}`} {...remainingProps}>
        <BoxContent>{children}</BoxContent>
      </a>
    );
  } else {
    return React.createElement(
      component,
      {
        className: `${className} align-center h2 ${CLASSNAME} ${isActive ? 'box-link--active' : ''}`,
        to: link,
        'aria-label': "Read more about Udbhav",
        children: <BoxContent>{children}</BoxContent>,
        onClick: () => link ? setIsActive(true) : null,
        ...remainingProps
      },
    );
  }
};

export default Box;

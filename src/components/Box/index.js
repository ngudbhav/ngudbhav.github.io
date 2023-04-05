import React from 'react';
import TransitionLink from 'gatsby-plugin-transition-link';

import './index.scss';

const CLASSNAME = 'box-link';

const Box = ({
  className, link, children, externalLink = false, component = TransitionLink,
}) => {
  const [isActive, setIsActive] = React.useState(false);
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
        className: `${className} align-center h2 ${CLASSNAME} ${isActive ? 'box-link--active' : ''}`,
        to: link,
        'aria-label': "Read more about Udbhav",
        children: <BoxContent />,
        onClick: () => link ? setIsActive(true) : null,
      },
    );
  }
};

export default Box;

import React from 'react';
import TransitionLink from 'gatsby-plugin-transition-link';

import { TIMING } from 'utils/constants/anim';

import './index.scss';

const CLASSNAME = 'box-link';

const Box = ({
  className, link, children, externalLink = false, component = TransitionLink,
}) => {
  const _component = externalLink ? 'a' : component;
  const _link = externalLink ? 'href' : 'to';
  const _target = externalLink ? 'target' : '';
  const BoxContent = React.memo(() => (
    <div className="box-link__content">{children}</div>
  ));

  return React.createElement(
    _component,
    {
      className: `${className} align-center h2 ${CLASSNAME}`,
      [ _link ]: link,
      [ _target ]: '_blank',
      exit: { length: TIMING, trigger: () => console.log('exit') },
      entry: { length: TIMING, trigger: ({ node, e, exit, entry }) => console.log(node, e, exit, entry), delay: TIMING },
      children: <BoxContent />,
      activeClassName: 'box-link--active',
    },
  );
};

export default Box;

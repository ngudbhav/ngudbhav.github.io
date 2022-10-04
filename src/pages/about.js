import React, { useMemo } from 'react';
import { Trophy } from "phosphor-react";

import Layout from 'components/Layout';
import Box from 'components/Box';
import Header from 'components/Header';
import Meta from 'components/OpenGraph';
import { ABOUT_HEADING } from 'utils/constants/text';
import { WEB, DESKTOP, HYBRID, ABOUT_AWARDS, LINKS } from 'utils/constants/about';

import 'styles/pages/about.scss';

const CLASSNAME = 'about';

const Body = React.memo(({ transitionStatus }) => {
  const introduction = useMemo(
    () => ABOUT_HEADING[ABOUT_HEADING.length * Math.random() | 0],[],
  );

  return (
    <Layout
      headerProps={
        {
          text2: introduction,
          className: CLASSNAME,
        }}
      transitionStatus={transitionStatus}
    >
      <section className={`${CLASSNAME}__award-container flex-row`}>
        {ABOUT_AWARDS.map((award, index) => (
          <Box component="div" className={`${CLASSNAME}__main-award`}>
            <Trophy size={40} weight="fill" />
            <div key={`about-award-${index}`} className={`${CLASSNAME}__award-icon`}>
              {award}
            </div>
          </Box>
        ))}
      </section>
      <hr />
      <section className={`${CLASSNAME}__award-container flex-row`}>
        <Box component="div" className={`${CLASSNAME}__main-skill full-width`}>
          <Header text2="Skills" />
          <span className={`${CLASSNAME}__skill-title`}>
            App
            :
          </span>
          <span className={`${CLASSNAME}__skill-content`}>
            {DESKTOP.map((item, index) => (
              <>
              <span key={`desktop-${index}`}>
                {item}
              </span>
              </>
            ))}
          </span>
          <br /><br />
          <span className={`${CLASSNAME}__skill-title`}>
            Web
            :
          </span>
          <span className={`${CLASSNAME}__skill-content`}>
            <div className={`${CLASSNAME}__web-skill`}>
              {Object.keys(WEB).map((item, index) => (
                <div>
                  <span key={`web-${index}`} className={`${CLASSNAME}__skill-title`}>
                    {item}
                  </span>
                  <span className={`${CLASSNAME}__skill-content`}>
                    {WEB[item]}
                  </span>
                </div>
              ))}
            </div>
          </span>
          <br />
          <span className={`${CLASSNAME}__skill-title`}>
            Hybrid
            :
          </span>
          <span className={`${CLASSNAME}__skill-content`}>
            {HYBRID.map((item, index) => (
              <>
              <span key={`hybrid-${index}`}>
                {item}
              </span>
              </>
            ))}
          </span>
        </Box>
      </section>
      <hr />
      <section className={`${CLASSNAME}__award-container flex-row`}>
        <Box component="div" className={`${CLASSNAME}__main-skill full-width`}>
          <Header text1="Connect" />
          <div className={`${CLASSNAME}__connect-icons flex-row`}>
            {Object.keys(LINKS).map((item, index) => (
              <div key={`connect-${index}`}>
              <span className={`${CLASSNAME}__skill-title`}>
                <a href={LINKS[item].link} target="_blank" rel="noopener noreferrer">
                  {LINKS[item].icon}
                </a>
              </span>
              </div>
            ))}
          </div>
        </Box>
      </section>
    </Layout>
  );
});

const About = ({ transitionStatus }) => (
  <div className={`${CLASSNAME} full-height ${transitionStatus}`}>
    <Body transitionStatus={transitionStatus}/>
  </div>
);

export default About;
export const Head = () => (
  <>
    <Meta />
    <title>About || Udbhav Gambhir</title>
    <meta name="title" content="About || Udbhav Gambhir" />
    <meta name="description" content="Udbhav Gambhir, NGUdbhav, Portfolio Website About Page"/>
  </>
);

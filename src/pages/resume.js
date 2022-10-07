import React from 'react';
import { StaticImage } from "gatsby-plugin-image";

import Layout from 'components/Layout';
import Box from 'components/Box';
import Meta from 'components/OpenGraph';
import { RESUME_HEADINGS } from 'utils/constants/text';

import 'styles/pages/resume.scss';

const CLASSNAME = 'resume';

const Body = React.memo(() => {
  const resumeHeading = RESUME_HEADINGS[RESUME_HEADINGS.length * Math.random() | 0];

  return (
    <Layout headerProps={
      {
        text2: resumeHeading,
        className: CLASSNAME,
      }
    }>
      <section className={`${CLASSNAME}__container`}>
        <Box className={`${CLASSNAME}__main`} link="https://www.linkedin.com/in/ngudbhav" externalLink>
          <StaticImage src="../images/resume.webp" alt="Udbhav Gambhir's Resume" />
        </Box>
      </section>
    </Layout>
  );
});

const Resume = ({ transitionStatus }) => (
  <div className={`${CLASSNAME} full-height ${transitionStatus}`}>
    <Body />
  </div>
);

export default Resume;
export const Head = () => (
  <>
    <Meta />
    <title>Resume || Udbhav Gambhir</title>
    <meta name="title" content="Resume || Udbhav Gambhir" />
    <meta name="description" content="Udbhav Gambhir, NGUdbhav, Portfolio Website Resume"/>
  </>
);

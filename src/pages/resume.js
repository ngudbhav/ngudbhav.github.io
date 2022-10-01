import React from 'react';

import Layout from 'components/Layout';
import Box from 'components/Box';
import { StaticImage } from "gatsby-plugin-image";

import 'styles/pages/resume.scss';
import { RESUME_HEADINGS } from "../utils/constants/text";

const CLASSNAME = 'resume';

const Body = React.memo(() => {
  const resumeHeading = RESUME_HEADINGS[RESUME_HEADINGS.length * Math.random() | 0];

  return (
    <Layout headerProps={
      {
        text1: resumeHeading,
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

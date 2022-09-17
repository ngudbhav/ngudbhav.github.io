import React from 'react';

import NavBar from 'components/NavBar';
import Box from 'components/Box';
import {StaticImage} from "gatsby-plugin-image";

import 'styles/pages/resume.scss';
import { RESUME_HEADINGS } from "../utils/constants/text";
import Header from "../components/Header";

const CLASSNAME = 'resume';

const Resume = () => (
  <div className={`${CLASSNAME} full-height`}>
    <NavBar />
    <Header
      text1={RESUME_HEADINGS[RESUME_HEADINGS.length * Math.random() | 0]}
      className={CLASSNAME}
    />
    <section className={`${CLASSNAME}__container`}>
      <Box className={`${CLASSNAME}__main`} link="https://www.linkedin.com/in/ngudbhav" externalLink>
        <StaticImage src="../images/resume.webp" alt="Udbhav Gambhir's Resume" />
      </Box>
    </section>
  </div>
);

export default Resume;

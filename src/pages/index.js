import React, { useMemo } from 'react';
import { CirclesThreePlus, Files, PaperPlaneTilt, Person } from 'phosphor-react';

import Box from 'components/Box';
import Layout from 'components/Layout';
import CanvasBackground from 'components/CanvasBackground';
import Container from 'components/Container';
import Meta from 'components/OpenGraph';
import { INTRODUCTION, REAL_INTRODUCTION } from 'utils/constants/text';

import 'styles/pages/index.scss';
import 'fonts/rockwell.ttf';

const CLASSNAME = 'index';

const Links = () => (
  <section className={`${CLASSNAME}__main full-height`}>
    <div className={`${CLASSNAME}__links flex-row space-around full-height`}>
      <div className={`${CLASSNAME}__links--left flex-col`}>
        <Box className={`${CLASSNAME}__link`} link="/projects">
          Projects
          <br />
          <CirclesThreePlus weight="fill" className={`${CLASSNAME}__link-icon primary-font-color`} />
        </Box>
        <Box className={`${CLASSNAME}__link`} link="/contact">
          Contact
          <br />
          <PaperPlaneTilt weight="fill" className={`${CLASSNAME}__link-icon primary-font-color`} />
        </Box>
      </div>
      <div className={`${CLASSNAME}__links--right flex-col`}>
        <Box className={`${CLASSNAME}__link`} link="/resume">
          Resume
          <br />
          <Files weight="fill" className={`${CLASSNAME}__link-icon primary-font-color`} />
        </Box>
        <Box className={`${CLASSNAME}__link`} link="/about">
          About
          <br />
          <Person weight="fill" className={`${CLASSNAME}__link-icon primary-font-color`} />
        </Box>
      </div>
    </div>
  </section>
);

const Body = React.memo(({ transitionStatus }) => {
  const introduction = useMemo(
    () => (INTRODUCTION[INTRODUCTION.length * Math.random() | 0]), [],
  );

  return (
    <Layout
      headerProps={
      {
        text1: introduction,
        text2: REAL_INTRODUCTION,
        className: CLASSNAME,
      }}
      transitionStatus={transitionStatus}
    >
      <CanvasBackground className="canvas" />
      <Container>
        <Links />
      </Container>
    </Layout>
  );
});

const Index = ({ transitionStatus }) => (
  <div className={`${CLASSNAME} full-height ${transitionStatus}`}>
    <Body transitionStatus={transitionStatus}/>
  </div>
);

export default Index;
export const Head = () => (
  <>
    <title>NGUdbhav || Udbhav Gambhir</title>
    <meta name="description" content="Udbhav Gambhir, NGUdbhav, Portfolio Website Landing Page"/>
    <Meta />
  </>
);

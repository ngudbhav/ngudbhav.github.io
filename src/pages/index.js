import React from 'react';
import { CirclesThreePlus, Files, PaperPlaneTilt, Person } from 'phosphor-react';

import Box from 'components/Box';
import NavBar from 'components/NavBar';
import CanvasBackground from 'components/CanvasBackground';
import Container from "components/Container";
import { INTRODUCTION, REAL_INTRODUCTION } from 'utils/constants/text';

import 'styles/pages/index.scss';
import 'fonts/rockwell.ttf';
import Header from "../components/Header";

const CLASSNAME = 'index';

const Links = () => (
  <section className={`${CLASSNAME}__main full-height`}>
    <div className={`${CLASSNAME}__links flex-row space-around full-height`}>
      <div className={`${CLASSNAME}__links--left flex-col`}>
        <Box className={`${CLASSNAME}__link`} link="/projects">
          Projects
          <br />
          <CirclesThreePlus weight="fill" className={`${CLASSNAME}__link-icon`} />
        </Box>
        <Box className={`${CLASSNAME}__link`} link="/contact">
          Contact
          <br />
          <PaperPlaneTilt weight="fill" className={`${CLASSNAME}__link-icon`} />
        </Box>
      </div>
      <div className={`${CLASSNAME}__links--right flex-col`}>
        <Box className={`${CLASSNAME}__link`} link="/resume">
          Resume
          <br />
          <Files weight="fill" className={`${CLASSNAME}__link-icon`} />
        </Box>
        <Box className={`${CLASSNAME}__link`} link="/about">
          About
          <br />
          <Person weight="fill" className={`${CLASSNAME}__link-icon`} />
        </Box>
      </div>
    </div>
  </section>
);

const Index = () => (
  <div className={`${CLASSNAME} full-height`}>
    <CanvasBackground className="canvas" />
    <NavBar />
    <Container>
      <Header
        text1={INTRODUCTION[INTRODUCTION.length * Math.random() | 0]}
        text2={REAL_INTRODUCTION}
        className={CLASSNAME}
      />
      <Links />
    </Container>
  </div>
);

export default Index;

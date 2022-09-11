import React from 'react';
import { CirclesThreePlus, Files, PaperPlaneTilt, Person } from 'phosphor-react';
import { Link } from 'gatsby';

import Header from 'components/Header';
import CanvasBackground from 'components/CanvasBackground';
import Container from "components/Container";
import { INTRODUCTION, REAL_INTRODUCTION } from 'utils/constants/text';

import 'styles/pages/index.scss';
import 'fonts/rockwell.ttf';

const CLASSNAME = 'index';

const Heading = () => (
  <div className={`${CLASSNAME}__heading align-center`}>
    <div className={`${CLASSNAME}__introduction h1`}>
      {INTRODUCTION[INTRODUCTION.length * Math.random() | 0]}
    </div>
    <div className={`${CLASSNAME}__real-introduction h1`}>
      {REAL_INTRODUCTION}
    </div>
  </div>
);

const Links = () => (
  <section className={`${CLASSNAME}__main full-height`}>
    <div className={`${CLASSNAME}__links flex-row space-around full-height`}>
      <div className={`${CLASSNAME}__links--left flex-col`}>
        <Link className={`${CLASSNAME}__link align-center h2`} to="/projects">
          Projects
          <br />
          <CirclesThreePlus weight="fill" className={`${CLASSNAME}__link-icon`} />
        </Link>
        <Link className={`${CLASSNAME}__link align-center h2`} to="/contact">
          Contact
          <br />
          <PaperPlaneTilt weight="fill" className={`${CLASSNAME}__link-icon`} />
        </Link>
      </div>
      <div className={`${CLASSNAME}__links--right flex-col`}>
        <Link className={`${CLASSNAME}__link align-center h2`} to="/resume">
          Resume
          <br />
          <Files weight="fill" className={`${CLASSNAME}__link-icon`} />
        </Link>
        <Link className={`${CLASSNAME}__link align-center h2`} to="/about">
          About
          <br />
          <Person weight="fill" className={`${CLASSNAME}__link-icon`} />
        </Link>
      </div>
    </div>
  </section>
);

const Index = () => (
  <div className={`${CLASSNAME} full-height`}>
    <CanvasBackground className="canvas" />
    <Header />
    <Container>
      <Heading />
      <Links />
    </Container>
  </div>
);

export default Index;

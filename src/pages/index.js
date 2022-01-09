import React from 'react';

import Header from '../components/Header';
import Footer from '../components/Footer';
import CanvasBackground from '../components/CanvasBackground';
import Container from "../components/Container";

import '../components/styles/index.scss';
import '../fonts/rockwell.ttf';

const Index = () => (
  <>
    <CanvasBackground id="pixel-background" />
    <>
      <Header />
      <Container />
      <Footer />
    </>
  </>
);

export default Index;
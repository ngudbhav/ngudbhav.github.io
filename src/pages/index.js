import React from 'react';

// import Banner from "../components/Banner";
import Header from '../components/Header';
// import Footer from '../components/Footer';
import CanvasBackground from '../components/CanvasBackground';
import Container from "../components/Container";

import '../styles/pages/index.scss';
import '../fonts/rockwell.ttf';

const Index = () => (
  <>
    <CanvasBackground id="pixel-background" />
    <>
      <Header />
      <Container>
        {/*<Banner />*/}
      </Container>
      {/*<Footer />*/}
    </>
  </>
);

export default Index;

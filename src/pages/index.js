import React from 'react';

import Header from '../components/Header';
import Footer from '../components/Footer';
import CanvasBackground from '../components/CanvasBackground';

import '../components/styles/index.module.scss';

const Index = () => (
  <>
    <CanvasBackground id="pixel-background" />
    <div>
      <Header />
      <Footer />
    </div>
  </>
);

export default Index;
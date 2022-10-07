import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

export const PROJECT_HEADINGS = [
  'First, solve the problem. Then, write the code.',
  'Talk is cheap. Show me the code.',
  'Code is like humor. When you have to explain it, it’s bad.',
  'Fix the cause, not the symptom.',
  'The only way to learn a new programming language is by writing programs in it.',
  'Testing leads to failure, and failure leads to understanding.',
  'The most damaging phrase in the language is.. it\'s always been done this way',
  'Copy-and-Paste was programmed by programmers for programmers actually.',
];

export const PROJECTS = [
  {
    name: 'TriCo',
    link: 'https://github.com/ngudbhav/TriCo-electron-app#installing-the-app',
    image: <StaticImage alt="TriCo Desktop Software" src="../../images/projects/trico.webp" />,
  },
  {
    name: 'LazyType',
    link: 'https://github.com/ngudbhav/lazyType#download-for-windows-x64--download-for-windows-x86',
    image: <StaticImage alt="Lazy Type Desktop Software" src="../../images/projects/lazy.webp" />,
  },
  {
    name: 'excel-to-mysql',
    link: 'https://www.npmjs.com/package/excel-to-mysql',
    image: <StaticImage alt="excel-to-mysql NPM Package" src="../../images/projects/mysql.webp" />,
  },
  {
    name: 'excel-to-mongodb',
    link: 'https://www.npmjs.com/package/excel-to-mongodb',
    image: <StaticImage alt="excel-to-mongodb NPM Package" src="../../images/projects/mongo.webp" />,
  },
  {
    name: 'Webkiosk Wrapper',
    link: 'https://github.com/ngudbhav/Webkiosk-Wrapper',
    image: <StaticImage alt="Webkiosk Wrapper Desktop Software" src="../../images/projects/webkiosk.webp" />,
  },
  {
    name: 'Farm Suraksha',
    link: 'https://youtu.be/kf3cMpKzWH0',
    image: <StaticImage alt="Farm Suraksha" src="../../images/projects/farm.webp" />,
  },
  {
    name: 'Cyber-Srishti 2019',
    link: '/cs2019',
    image: <StaticImage alt="Cyber-Srishti 2019" src="../../images/projects/cs2019.webp" />,
  },
  {
    name: 'Others',
    link: 'https://github.com/ngudbhav?tab=repositories',
    image: <StaticImage alt="Github Repositories Page" src="../../images/projects/github.webp" />,
  },
];

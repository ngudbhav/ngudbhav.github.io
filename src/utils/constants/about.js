import React from 'react';
import {
  FacebookLogo, GithubLogo, InstagramLogo, LinkedinLogo, TwitterLogo,
} from "phosphor-react";

export const ABOUT_AWARDS = [
'Smart India Hackathon - 2019 WINNER',
'Rebel Foods JS Coding Challenge - 3.0 WINNER',
'Softpedia 100% Badge WINNER',
];

export const WEB = {
  Frontend: 'SCSS, Webpack, Templating, React.Js',
  Backend: 'Ruby / Rails, Node.Js, Express.Js, Socket',
  Database: 'MySQL, MongoDB, Redis',
  Testing: 'Jest, Rspec, Mocha, Chai',
  DevOps: 'AWS, Docker, Jenkins, Git, Github, Travis, Circle, Cloudflare, Heroku',
  Others: 'Jira, Slack, Asana',
};

export const DESKTOP = [
  'Electron.Js, ',
  'OS API',
];

export const HYBRID = [
  'Phonegap/Cordova, ',
  'React Native',
];

export const LINKS = {
  github: {
    icon: <GithubLogo size={60} weight="fill" />,
    link: 'https://github.com/ngudbhav',
  },
  linkedin: {
    icon: <LinkedinLogo size={60} weight="fill" />,
    link: 'https://www.linkedin.com/in/ngudbhav/',
  },
  twitter: {
    icon: <TwitterLogo size={60} weight="fill" />,
    link: 'https://twitter.com/ngudbhav',
  },
  instagram: {
    icon: <InstagramLogo size={60} weight="fill" />,
    link: 'https://www.instagram.com/ngudbhav/',
  },
  facebook: {
    icon: <FacebookLogo size={60} weight="fill" />,
    link: 'https://www.facebook.com/ngudbhav',
  },
};

export const ABOUT_INTRODUCTION = `
I am a Developer. I build stuff!\n
For Desktop Softwares, I use Electron.Js
For Web:\n
\t\t For Backend, I have used Node.Js and Ruby (Rails). I have also built some things with PHP.
\t\t For Frontend, I have used React.Js.
\t\t For Database, I have used MySQL, NoSQL (Mongo DB)
\t\t For CI/CD, I have used Jenkins, Travis and Circle CI
\t\t For Cloud, I have used AWS, Cloudflare and other static hosting tools.
\nBTW: I also have knowledge about building Hybrid Mobile apps.
\nI am learning and exploring Hardware these days. Fingers Crossed!
\nCheck me out @GitHub: https://www.github.com/ngudbhav
`;

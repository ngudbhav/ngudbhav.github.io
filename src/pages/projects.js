import React from 'react';

import Header from 'components/Header';
import NavBar from 'components/NavBar';
import Box from 'components/Box';
import { PROJECT_HEADINGS, PROJECTS } from 'utils/constants/projects';
import 'styles/pages/projects.scss';

const CLASSNAME = 'projects';

const Projects = () => (
  <div className={`${CLASSNAME} full-height`}>
    <NavBar />
    <Header
      text1={PROJECT_HEADINGS[PROJECT_HEADINGS.length * Math.random() | 0]}
      className={CLASSNAME}
    />
    <section className={`${CLASSNAME}__container`}>
      <Box component="div" className={`${CLASSNAME}__main`}>
        <div className={`${CLASSNAME}__links flex-row`}>
          {PROJECTS.map((project, index) => (
            <Box className={`${CLASSNAME}__link`} link={project.link} key={`${project.name}-${index}`} externalLink>
              {project.name}
              <div className={`${CLASSNAME}__link-image`}>
                {project.image}
              </div>
            </Box>
          ))}
        </div>
      </Box>
    </section>
  </div>
);

export default Projects;

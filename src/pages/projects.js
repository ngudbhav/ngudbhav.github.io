import React, { useMemo } from 'react';

import Layout from 'components/Layout';
import Box from 'components/Box';
import { PROJECT_HEADINGS, PROJECTS } from 'utils/constants/projects';
import 'styles/pages/projects.scss';

const CLASSNAME = 'projects';

const Body = React.memo(({ transitionStatus }) => {
  const projectHeading = useMemo(() => PROJECT_HEADINGS[PROJECT_HEADINGS.length * Math.random() | 0], []);

  return (
    <Layout
      headerProps={
      {
        text1: projectHeading,
        className: CLASSNAME,
      }}
      transitionStatus={transitionStatus}
    >
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
    </Layout>
  );
});

const Projects = ({ transitionStatus }) => (
  <div className={`${CLASSNAME} full-height ${transitionStatus}`}>
    <Body transitionStatus={transitionStatus}/>
  </div>
);

export default Projects;

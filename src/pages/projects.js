import React, { useMemo } from 'react';

import Layout from 'components/Layout';
import Box from 'components/Box';
import Meta from 'components/OpenGraph';
import { PROJECT_HEADINGS, PROJECTS } from 'utils/constants/projects';
import 'styles/pages/projects.scss';

const CLASSNAME = 'projects';

const Body = React.memo(({ transitionStatus }) => {
  const projectHeading = useMemo(() => PROJECT_HEADINGS[PROJECT_HEADINGS.length * Math.random() | 0], []);

  return (
    <Layout
      headerProps={
      {
        text2: projectHeading,
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
export const Head = () => (
  <>
    <Meta />
    <title>Projects || Udbhav Gambhir</title>
    <meta name="title" content="Projects || Udbhav Gambhir" />
    <meta name="description" content="Udbhav Gambhir, NGUdbhav, Portfolio Website Projects Page"/>
  </>
);

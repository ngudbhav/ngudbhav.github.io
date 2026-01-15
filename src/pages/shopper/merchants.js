import React from 'react';
import { graphql } from "gatsby";

import Meta from 'components/OpenGraph';
import Layout from 'components/Layout';
import Box from 'components/Box';

import 'styles/pages/shopper.scss';

const CLASSNAME = 'shop';

const Body = React.memo(({ data }) => (
  <div className={`${CLASSNAME}__suggestions flex-row flex-wrap justify-center merchants__container`}>
    {data.map((suggestion, index) => (
      <Box className={`${CLASSNAME}__suggestion-item merchants__item`} key={`suggestion-${index}`} link={`/shopper/${suggestion.name.toLowerCase()}`}>
        {suggestion.name}
      </Box>
    ))}
  </div>
));

const Merchants = ({ transitionStatus, data }) => (
  <Layout
    headerProps={
      {
        text1: 'Shop Smart',
        text2: `Last updated: ${new Date(data.allGitHubFileMeta.nodes[0].lastUpdatedAt).toLocaleDateString("en-IN", {
          day: "numeric",
          month: "long",
          year: "numeric",
        })}`,
        className: CLASSNAME,
      }}
    transitionStatus={transitionStatus}
  >
    <section className={`${CLASSNAME}__container full-height`}>
      <Body data={data.allMerchantsJson.nodes.filter(m => m.name).sort((a, b) => a.name.localeCompare(b.name))} />
    </section>
  </Layout>
);

export default Merchants;
export const Head = () => (
  <>
    <Meta />
    <title>Merchants || NGUdbhav</title>
    <meta name="title" content="Merchants || NGUdbhav" />
    <meta name="description" content="Udbhav Gambhir, NGUdbhav, Portfolio Website Resume"/>
  </>
);

export const query = graphql`
  query MerchantsQuery {
    allMerchantsJson {
      nodes {
        id
        name
        domains
        category
        recommendedCards {
          card
          rewardRate
          rewardType
          valuePer100
          rank
        }
      }
    }
    allGitHubFileMeta {
      nodes {
        lastUpdatedAt
      }
    }
  }
`

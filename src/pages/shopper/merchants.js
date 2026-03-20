import React, { useState } from 'react';
import { graphql } from "gatsby";

import Meta from 'components/OpenGraph';
import Layout from 'components/Layout';
import Box from 'components/Box';


import 'styles/pages/shopper.scss';

const CLASSNAME = 'shop';

const formatCategory = (cat) =>
  cat.replace(/_/g, ' ').replace(/\b\w/g, c => c.toUpperCase());

const CategoryFilters = ({ categories, active, onChange }) => (
  <div className="merchants__filters">
    <button
      className={`merchants__filter-btn ${!active ? 'merchants__filter-btn--active' : ''}`}
      onClick={() => onChange(null)}
    >
      All
    </button>
    {categories.map(cat => (
      <button
        key={cat}
        className={`merchants__filter-btn ${active === cat ? 'merchants__filter-btn--active' : ''}`}
        onClick={() => onChange(cat)}
      >
        {formatCategory(cat)}
      </button>
    ))}
  </div>
);

const Body = React.memo(({ data }) => {
  const [activeCategory, setActiveCategory] = useState(null);

  const categories = React.useMemo(
    () => [...new Set(data.map(m => m.category))].sort(),
    [data]
  );

  const filtered = activeCategory
    ? data.filter(m => m.category === activeCategory)
    : data;

  return (
    <>
      <CategoryFilters
        categories={categories}
        active={activeCategory}
        onChange={setActiveCategory}
      />
      <div className="merchants__section-header">
        <span className="merchants__section-title">
          {activeCategory ? formatCategory(activeCategory) : 'All Merchants'}
        </span>
        <span className="merchants__section-count">{filtered.length}</span>
      </div>
      <div className="merchants__container">
        {filtered.map((merchant, index) => (
          <Box
            className="merchants__item"
            key={`${merchant.name}-${index}`}
            link={`/shopper/${merchant.name.toLowerCase()}`}
          >
            {merchant.name}
          </Box>
        ))}
      </div>
    </>
  );
});

const Merchants = ({ transitionStatus, data }) => (
  <Layout
    headerProps={{
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
    <meta name="description" content="Udbhav Gambhir, NGUdbhav, Portfolio Website Resume" />
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

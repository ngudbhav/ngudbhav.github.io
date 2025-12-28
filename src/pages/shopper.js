import React, { useCallback, useState } from 'react';
import {graphql} from "gatsby";

import Meta from 'components/OpenGraph';
import Layout from 'components/Layout';
import Box from 'components/Box';
import {shopper, shopperMerchants} from "utils/handlers/form";

import 'styles/pages/shopper.scss';

const CLASSNAME = 'shop';

const NoResults = () => (
  <Box className={`${CLASSNAME}__no-results--empty`} component="div" externalLink={false}>
    No results found.
  </Box>
);

const ResultsUi = ({ results }) => (
  <div className={`${CLASSNAME}__results-container`}>
    {results.recommendedCards.sort((a, b) => a.rank - b.rank).map((result, index) => (
      <Box className={`${CLASSNAME}__results`} component="div" key={result.id} externalLink={false}>
        {index === 0 && (
          <div className={`${CLASSNAME}__results-comment`}>
            Best Card
          </div>
        )}
        <div className={`${CLASSNAME}__results-name h2`}>
          {result.card}
        </div>
        <div className={`${CLASSNAME}__results-rewards-rate flex-row space-between`}>
          <div className={`${CLASSNAME}__results-rewards-rate-title`}>
            Reward Rate
          </div>
          <div className={`${CLASSNAME}__results-rewards-rate-value`}>
            {result.rewardRate}X
          </div>
        </div>
        <div className={`${CLASSNAME}__results-rewards-type flex-row space-between`}>
          <div className={`${CLASSNAME}__results-rewards-type-title`}>
            Rewards Type:
          </div>
          <div className={`${CLASSNAME}__results-rewards-type-value`}>
            {result.rewardType}
          </div>
        </div>
        <div className={`${CLASSNAME}__results-value flex-row space-between`}>
          <div className={`${CLASSNAME}__results-value-title`}>
            Value per ₹100 spent:
          </div>
          <div className={`${CLASSNAME}__results-value-value`}>
            ₹{result.valuePer100}
          </div>
        </div>
      </Box>
    ))}
  </div>
)

const Results = ({ results }) => (
  !results || Object.keys(results).length === 0 ? (
    <NoResults />
  ) : (
    <ResultsUi results={results} />
  )
);

const Suggestions = ({ suggestions, clickHandler }) => (
  <div className={`${CLASSNAME}__suggestions flex-row space-between overflow-x-scroll`}>
    {suggestions.map((suggestion, index) => (
      <Box className={`${CLASSNAME}__suggestion-item full-width`} component="div" externalLink={false} onClick={clickHandler} key={`suggestion-${index}`} data-name={suggestion.name}>
        {suggestion.name}
      </Box>
    ))}
  </div>
);

const Body = React.memo(({ data }) => {
  const [results, setResults] = useState([]);
  const [suggestions, setSuggestions] = useState([]);
  const [query, setQuery] = useState('');
  const suggestMerchants = useCallback((event) => {
    setQuery(event.target.value);
    if (event.target.value.length === 0) {
      setSuggestions([]);
      return;
    }
    const result = shopperMerchants(event, data);
    setSuggestions(result);
  }, []);
  const setMerchant = useCallback((event) => {
    const inputQuery = event.currentTarget.dataset.name;
    const result = shopper(inputQuery, data);
    if (inputQuery) {
      setResults(result);
      suggestMerchants({target: {value: ''} });
      setQuery(inputQuery);
    } else {
      setResults([]);
    }
  }, []);
  const selectMerchant = useCallback((event) => {
    if (event.key === 'Enter') {
      if (suggestions[0]) {
        const inputQuery = suggestions[0].name;
        setMerchant({currentTarget: {dataset: {name: inputQuery}}});
      }
    }
  }, [suggestions]);

  return (
    <>
      <Box className={`${CLASSNAME}__search`} component="div" externalLink={false}>
        <input type="text" placeholder="Enter a website or merchant name" autoComplete="search" className={`${CLASSNAME}__form-input full-width`} name="search" onChange={suggestMerchants} value={query} onKeyDown={selectMerchant} />
        <Suggestions suggestions={suggestions} clickHandler={setMerchant}/>
      </Box>
      <Results results={results} />
    </>
  );
});

const Shopper = ({ transitionStatus, data }) => (
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
      <Body data={data} />
    </section>
  </Layout>
);

export default Shopper;
export const Head = () => (
  <>
    <Meta />
    <title>Shopper || NGUdbhav</title>
    <meta name="title" content="Shopper || NGUdbhav" />
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

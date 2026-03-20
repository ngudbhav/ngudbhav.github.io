import React, { useCallback, useEffect, useState } from 'react';
import {graphql, Link, navigate} from "gatsby";

import Meta from 'components/OpenGraph';
import Layout from 'components/Layout';
import Box from 'components/Box';
import { shopper, shopperMerchants } from "utils/handlers/form";

import 'styles/pages/shopper.scss';

const CLASSNAME = 'shop';
const LS_KEY = 'shopper_my_cards';

const ISSUES_URL = 'https://github.com/ngudbhav/ngudbhav.github.io/issues/new';
const DATA_URL = 'https://github.com/ngudbhav/ngudbhav.github.io/blob/master/src/data/merchants.json';
const CONTRIBUTE_URL = 'https://github.com/ngudbhav/ngudbhav.github.io/blob/master/src/data/merchants.json';
const SUBREDDIT_URL = 'https://www.reddit.com/r/CreditCardsIndia/';

const Disclaimer = () => (
  <div className={`${CLASSNAME}__disclaimer`}>
    <div className={`${CLASSNAME}__disclaimer-community`}>
      This data is maintained by the{' '}
      <a href={SUBREDDIT_URL} target="_blank" rel="noopener noreferrer" className={`${CLASSNAME}__disclaimer-link`}>
        r/CreditCardsIndia
      </a>
      {' '}community. The underlying dataset is{' '}
      <a href={DATA_URL} target="_blank" rel="noopener noreferrer" className={`${CLASSNAME}__disclaimer-link`}>
        publicly available on GitHub
      </a>
      {' '}— anyone can contribute by opening a pull request.
    </div>
    <ul className={`${CLASSNAME}__disclaimer-list`}>
      <li>This tool is for informational purposes only and does not constitute financial advice.</li>
      <li>Reward rates and cashback offers change frequently. Always verify current rates with your card issuer before making a purchase decision.</li>
      <li>Data may be incomplete, outdated, or inaccurate. We are not responsible for any financial loss arising from reliance on this data.</li>
      <li>We are not affiliated with any bank, card issuer, or merchant listed on this portal.</li>
      <li>Actual rewards may vary based on your card variant, membership tier, offer period, and applicable terms and conditions.</li>
      <li>Some offers may require minimum transaction amounts, specific payment modes, or prior activation.</li>
      <li>
        Found incorrect or outdated data?{' '}
        <a href={ISSUES_URL} target="_blank" rel="noopener noreferrer" className={`${CLASSNAME}__disclaimer-link`}>
          Report an issue
        </a>
        {' '}or{' '}
        <a href={CONTRIBUTE_URL} target="_blank" rel="noopener noreferrer" className={`${CLASSNAME}__disclaimer-link`}>
          submit a fix directly
        </a>
        .
      </li>
    </ul>
  </div>
);

const NoResults = () => (
  <Box className={`${CLASSNAME}__no-results--empty`} component="div" externalLink={false}>
    No results found.
  </Box>
);

const ResultsUi = ({ results, myCards }) => {
  const hasMyCards = myCards.length > 0;
  const sorted = [...results.recommendedCards].sort((a, b) => {
    if (hasMyCards) {
      const aOwned = myCards.includes(a.card);
      const bOwned = myCards.includes(b.card);
      if (aOwned !== bOwned) return aOwned ? -1 : 1;
    }
    return a.rank - b.rank;
  });
  const topIsOwned = hasMyCards && myCards.includes(sorted[0]?.card);

  return (
    <div className={`${CLASSNAME}__results-container`}>
      {sorted.map((result, index) => {
        const owned = myCards.includes(result.card);
        return (
          <Box className={`${CLASSNAME}__results`} component="div" key={result.card} externalLink={false}>
            {index === 0 && (
              <div className={`${CLASSNAME}__results-comment`}>
                {topIsOwned ? 'Best for You' : 'Best Card'}
              </div>
            )}
            <div className={`${CLASSNAME}__results-name h2`}>
              {result.card}
              {owned && (
                <span className={`${CLASSNAME}__results-owned-badge`}>You own this</span>
              )}
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
        );
      })}
    </div>
  );
};

const Results = ({ results, myCards }) => (
  !results || Object.keys(results).length === 0 ? (
    <NoResults />
  ) : (
    <ResultsUi results={results} myCards={myCards} />
  )
);

const Suggestions = ({ suggestions, clickHandler }) => (
  <div className={`${CLASSNAME}__suggestions`}>
    {suggestions.map((suggestion, index) => (
      <div
        className={`${CLASSNAME}__suggestion-item`}
        onClick={clickHandler}
        key={`suggestion-${index}`}
        data-name={suggestion.name}
        style={{ '--i': index }}
      >
        {suggestion.name}
      </div>
    ))}
  </div>
);

const Body = React.memo(({ data, query: initialQuery = '' }) => {
  const [results, setResults] = useState([]);
  const [suggestions, setSuggestions] = useState([]);
  const [query, setQuery] = useState(initialQuery.toLowerCase());
  const [myCards, setMyCards] = useState([]);
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
    if (inputQuery) {
      navigate(`/shopper/${inputQuery.toLowerCase()}`);
    } else {
      setResults([]);
    }
  }, []);
  const selectMerchant = useCallback((event) => {
    if (event.key === 'Enter') {
      if (suggestions[0]) {
        const inputQuery = suggestions[0].name;
        navigate(`/shopper/${inputQuery.toLowerCase()}`);
      }
    }
  }, [suggestions]);
  useEffect(() => {
    try {
      setMyCards(JSON.parse(localStorage.getItem(LS_KEY)) || []);
    } catch {
      // localStorage unavailable
    }
    if (query && query.length > 0) {
      const result = shopper(query, data);
      setResults(result);
      suggestMerchants({target: {value: ''} });
      setQuery(initialQuery);
    }
  }, []);

  return (
    <>
      <Box className={`${CLASSNAME}__search`} component="div" externalLink={false}>
        <input type="text" placeholder="Enter a website or merchant name" autoComplete="search" className={`${CLASSNAME}__form-input full-width`} name="search" onChange={suggestMerchants} value={query} onKeyDown={selectMerchant} />
        <Suggestions suggestions={suggestions} clickHandler={setMerchant}/>
        <div className={`${CLASSNAME}__merchants-link flex-row`}>
          <Link to={`/shopper/merchants`} className={`${CLASSNAME}__merchants-link-text h3`}>
            Browse all merchants
          </Link>
          <Link to={`/shopper/my-cards`} className={`${CLASSNAME}__merchants-link-text h3`}>
            My Cards
          </Link>
        </div>
      </Box>
      <Results results={results} myCards={myCards} />
      <Disclaimer />
    </>
  );
});

const Shopper = ({ transitionStatus, data, params, pageContext }) => (
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
      <Body data={data} query={params.merchant || pageContext.merchant} />
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

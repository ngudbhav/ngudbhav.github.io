import React, { useEffect, useMemo, useState } from 'react';
import { graphql, Link } from 'gatsby';

import Meta from 'components/OpenGraph';
import Layout from 'components/Layout';
import Box from 'components/Box';

import 'styles/pages/shopper.scss';

const CLASSNAME = 'shop';
const LS_KEY = 'shopper_my_cards';

const loadMyCards = () => {
  try {
    return JSON.parse(localStorage.getItem(LS_KEY)) || [];
  } catch {
    return [];
  }
};

const saveMyCards = (cards) => {
  localStorage.setItem(LS_KEY, JSON.stringify(cards));
};

const CardItem = ({ card, owned, onToggle }) => (
  <Box
    className={`${CLASSNAME}__my-card-item ${owned ? `${CLASSNAME}__my-card-item--owned` : ''}`}
    component="div"
    externalLink={false}
    onClick={() => onToggle(card)}
    aria-pressed={owned}
  >
    {card}
    {owned && <span className={`${CLASSNAME}__my-card-badge`}>Owned</span>}
  </Box>
);

const Body = React.memo(({ data }) => {
  const [myCards, setMyCards] = useState([]);

  const allCards = useMemo(() => {
    const seen = new Set();
    data.allMerchantsJson.nodes.forEach(merchant => {
      merchant.recommendedCards.forEach(rc => {
        if (!seen.has(rc.card)) {
          seen.add(rc.card);
        }
      });
    });
    return [...seen].sort();
  }, [data]);

  useEffect(() => {
    setMyCards(loadMyCards());
  }, []);

  const toggle = (card) => {
    setMyCards(prev => {
      const next = prev.includes(card)
        ? prev.filter(c => c !== card)
        : [...prev, card];
      saveMyCards(next);
      return next;
    });
  };

  return (
    <>
      <p className={`${CLASSNAME}__my-cards-intro`}>
        Tap a card to mark it as owned. Results will prioritise cards you own.
      </p>
      <div className={`${CLASSNAME}__my-cards-grid`}>
        {allCards.map(card => (
          <CardItem
            key={card}
            card={card}
            owned={myCards.includes(card)}
            onToggle={toggle}
          />
        ))}
      </div>
      <div className={`${CLASSNAME}__merchants-link flex-row`}>
        <Link to="/shopper" className={`${CLASSNAME}__merchants-link-text h3`}>
          Back to search
        </Link>
      </div>
    </>
  );
});

const MyCards = ({ transitionStatus, data }) => (
  <Layout
    headerProps={{
      text1: 'My Cards',
      text2: 'Personalise your recommendations',
      className: CLASSNAME,
    }}
    transitionStatus={transitionStatus}
  >
    <section className={`${CLASSNAME}__container full-height`}>
      <Body data={data} />
    </section>
  </Layout>
);

export default MyCards;

export const Head = () => (
  <>
    <Meta />
    <title>My Cards || NGUdbhav</title>
    <meta name="title" content="My Cards || NGUdbhav" />
    <meta name="description" content="Save your credit cards and get personalised recommendations on Shopper." />
  </>
);

export const query = graphql`
  query MyCardsQuery {
    allMerchantsJson {
      nodes {
        recommendedCards {
          card
        }
      }
    }
  }
`;

#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const DATA_PATH = path.resolve(__dirname, '../src/data/merchants.json');

const ALLOWED_CATEGORIES = new Set([
  'beauty', 'charity', 'dining', 'ecommerce', 'electronics',
  'entertainment', 'fashion', 'food_delivery', 'grocery', 'home',
  'jewelry', 'medical', 'services', 'shopping', 'sports',
  'telecom', 'travel', 'utilities', 'wallet',
]);

const ALLOWED_REWARD_TYPES = new Set(['cashback', 'miles', 'neucoins', 'points']);

// Domains may include sub-paths (e.g. swiggy.com/instamart) but must not include a protocol
const DOMAIN_RE = /^(?!https?:\/\/)\S+\.\S+/;

// ─── helpers ────────────────────────────────────────────────────────────────

let errors = [];
let warnings = [];

const error = (msg) => errors.push(`  ✖ ${msg}`);

const isString  = (v) => typeof v === 'string' && v.trim().length > 0;
const isNumber  = (v) => typeof v === 'number' && isFinite(v);
const isInteger = (v) => Number.isInteger(v);

// ─── validation ─────────────────────────────────────────────────────────────

function validateMerchant(merchant, index) {
  const prefix = `merchants[${index}] (${merchant.name || 'unnamed'})`;

  // Required string fields
  if (!isString(merchant.id))       error(`${prefix}: "id" must be a non-empty string`);
  if (!isString(merchant.name))     error(`${prefix}: "name" must be a non-empty string`);
  if (!isString(merchant.category)) error(`${prefix}: "category" must be a non-empty string`);

  // Category must be one of the allowed values
  if (isString(merchant.category) && !ALLOWED_CATEGORIES.has(merchant.category)) {
    error(`${prefix}: unknown category "${merchant.category}". Allowed: ${[...ALLOWED_CATEGORIES].join(', ')}`);
  }

  // Domains
  if (!Array.isArray(merchant.domains) || merchant.domains.length === 0) {
    error(`${prefix}: "domains" must be a non-empty array`);
  } else {
    merchant.domains.forEach((domain, i) => {
      if (!isString(domain)) {
        error(`${prefix}: domains[${i}] must be a non-empty string`);
      } else if (!DOMAIN_RE.test(domain)) {
        error(`${prefix}: domains[${i}] "${domain}" is not a valid domain (remove protocol/path)`);
      }
    });
  }

  // recommendedCards
  if (!Array.isArray(merchant.recommendedCards) || merchant.recommendedCards.length === 0) {
    error(`${prefix}: "recommendedCards" must be a non-empty array`);
    return; // no point validating cards if the array is broken
  }

  const cardNames = new Set();
  const ranks = [];

  merchant.recommendedCards.forEach((card, i) => {
    const cprefix = `${prefix} > cards[${i}]`;

    if (!isString(card.card)) {
      error(`${cprefix}: "card" must be a non-empty string`);
    } else {
      if (cardNames.has(card.card)) {
        error(`${prefix}: duplicate card name "${card.card}"`);
      }
      cardNames.add(card.card);
    }

    if (!isNumber(card.rewardRate) || card.rewardRate <= 0) {
      error(`${cprefix}: "rewardRate" must be a positive number (got ${card.rewardRate})`);
    }

    if (!isNumber(card.valuePer100) || card.valuePer100 <= 0) {
      error(`${cprefix}: "valuePer100" must be a positive number (got ${card.valuePer100})`);
    }

    if (!isString(card.rewardType)) {
      error(`${cprefix}: "rewardType" must be a non-empty string`);
    } else if (!ALLOWED_REWARD_TYPES.has(card.rewardType)) {
      error(`${cprefix}: unknown rewardType "${card.rewardType}". Allowed: ${[...ALLOWED_REWARD_TYPES].join(', ')}`);
    }

    if (!isInteger(card.rank) || card.rank < 1) {
      error(`${cprefix}: "rank" must be a positive integer (got ${card.rank})`);
    } else {
      ranks.push(card.rank);
    }
  });

  // Ranks must be unique and sequential starting from 1
  const sortedRanks = [...ranks].sort((a, b) => a - b);
  const expectedRanks = sortedRanks.map((_, i) => i + 1);
  if (JSON.stringify(sortedRanks) !== JSON.stringify(expectedRanks)) {
    error(`${prefix}: card ranks must be unique and sequential starting from 1 (got [${sortedRanks.join(', ')}])`);
  }
}

function validate() {
  // Load file
  let data;
  try {
    data = JSON.parse(fs.readFileSync(DATA_PATH, 'utf8'));
  } catch (e) {
    console.error(`\n❌ Failed to parse merchants.json: ${e.message}\n`);
    process.exit(1);
  }

  if (!Array.isArray(data)) {
    console.error('\n❌ merchants.json must be a JSON array\n');
    process.exit(1);
  }

  // Global uniqueness checks
  const ids   = new Map();
  const names = new Map();

  data.forEach((merchant, index) => {
    if (isString(merchant.id)) {
      if (ids.has(merchant.id)) {
        error(`merchants[${index}]: duplicate id "${merchant.id}" (first seen at index ${ids.get(merchant.id)})`);
      } else {
        ids.set(merchant.id, index);
      }
    }
    if (isString(merchant.name)) {
      if (names.has(merchant.name)) {
        error(`merchants[${index}]: duplicate name "${merchant.name}" (first seen at index ${names.get(merchant.name)})`);
      } else {
        names.set(merchant.name, index);
      }
    }

    validateMerchant(merchant, index);
  });

  // Report
  console.log(`\nValidating ${data.length} merchants in src/data/merchants.json\n`);

  if (warnings.length > 0) {
    console.log(`⚠  ${warnings.length} warning(s):\n`);
    warnings.forEach(w => console.log(w));
    console.log('');
  }

  if (errors.length > 0) {
    console.log(`❌ ${errors.length} error(s):\n`);
    errors.forEach(e => console.log(e));
    console.log('\nValidation failed. Fix the errors above before merging.\n');
    process.exit(1);
  }

  console.log(`✅ All ${data.length} merchants passed validation.\n`);
}

validate();

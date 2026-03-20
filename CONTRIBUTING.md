# Contributing to Shopper

The merchant and credit card data powering [Shopper](https://www.ngudbhav.com/shopper) lives in a single file: [`src/data/merchants.json`](src/data/merchants.json). Anyone can improve it by opening a pull request.

Community discussion and rate change announcements happen on [r/CreditCardsIndia](https://www.reddit.com/r/CreditCardsIndia/). If you spot a rate change there, this is the place to record it.

---

## Before you start

- Always verify data against an official source before submitting — a bank's rewards page, an r/CreditCardsIndia thread, or a card issuer's T&C document.
- Run `npm run validate` locally before opening a PR. The CI will block merge if it fails.
- One logical change per PR (e.g. one card's rate update, or one new merchant). Easier to review, easier to revert if wrong.

---

## Merchant schema

Each entry in `merchants.json` follows this structure:

```json
{
  "id": "amazon",
  "name": "Amazon",
  "domains": ["amazon.in"],
  "category": "ecommerce",
  "recommendedCards": [
    {
      "card": "HDFC Infinia",
      "rewardRate": 16.5,
      "rewardType": "points",
      "valuePer100": 16.5,
      "image": "infinia",
      "note": "Partner Offer: Smartbuy (5X)",
      "rank": 1
    }
  ]
}
```

### Merchant fields

| Field | Type | Required | Notes |
|---|---|---|---|
| `id` | string | yes | Lowercase, alphanumeric slug. Must be unique. |
| `name` | string | yes | Display name shown in the UI. Must be unique. |
| `domains` | string[] | yes | One or more domains/sub-paths used for search matching (e.g. `swiggy.com/instamart`). No `http://` prefix. |
| `category` | string | yes | Must be one of the [allowed categories](#allowed-categories). |
| `recommendedCards` | object[] | yes | At least one card required. |

### Card fields

| Field | Type | Required | Notes |
|---|---|---|---|
| `card` | string | yes | Full card name as it appears on the card issuer's site. Must be unique within a merchant. |
| `rewardRate` | number | yes | Reward multiplier (e.g. `5` for 5X). Must be > 0. |
| `rewardType` | string | yes | One of `cashback`, `points`, `miles`, `neucoins`. |
| `valuePer100` | number | yes | Effective value earned per ₹100 spent, in rupees. Must be > 0. |
| `rank` | integer | yes | 1-indexed. Cards must be ranked by `valuePer100` descending with no gaps or duplicates. |
| `image` | string | no | Image key for the card logo. Leave blank if unsure. |
| `note` | string | no | Short context for the rate (e.g. `"Partner Offer: Smartbuy (5X)"`). |

### Allowed categories

`beauty` · `charity` · `dining` · `ecommerce` · `electronics` · `entertainment` · `fashion` · `food_delivery` · `grocery` · `home` · `jewelry` · `medical` · `services` · `shopping` · `sports` · `telecom` · `travel` · `utilities` · `wallet`

---

## Common contributions

### Update a reward rate

1. Find the merchant in `src/data/merchants.json`
2. Update `rewardRate` and `valuePer100` on the relevant card
3. Re-sort `recommendedCards` by `valuePer100` descending and update `rank` values accordingly
4. Run `npm run validate`

### Add a new card to an existing merchant

1. Find the merchant in `src/data/merchants.json`
2. Append a new card object to `recommendedCards`
3. Re-sort by `valuePer100` descending and assign sequential `rank` values starting from 1
4. Run `npm run validate`

### Add a new merchant

1. Pick the right `category` from the allowed list
2. Create a new object following the schema above
3. Add it anywhere in the array (the UI sorts alphabetically at runtime)
4. Run `npm run validate`

### Remove a stale card or merchant

Open a PR with a comment citing why (e.g. card discontinued, offer ended). Link to a source if possible.

---

## Validation rules (enforced by CI)

The `npm run validate` script (`scripts/validate-merchants.js`) checks:

- All required fields are present and correctly typed
- `category` and `rewardType` are one of the allowed values
- `rewardRate` and `valuePer100` are positive numbers
- Card names are unique within a merchant
- `rank` values are unique and sequential (1, 2, 3 …) within a merchant
- Merchant `id` and `name` are unique across the entire file
- Domains do not include a protocol prefix (`http://`)

PRs that fail validation cannot be merged.

---

## What counts as a valid source?

| Source | Acceptable? |
|---|---|
| Bank's official rewards/offers page | ✅ Best |
| Card issuer's T&C document | ✅ Best |
| r/CreditCardsIndia thread with screenshot | ✅ Good |
| Personal experience with a screenshot | ⚠️ Acceptable for small changes |
| "I think" / no source | ❌ Not acceptable |

---

## Questions?

Open a [GitHub issue](https://github.com/ngudbhav/ngudbhav.github.io/issues/new) or post on [r/CreditCardsIndia](https://www.reddit.com/r/CreditCardsIndia/).

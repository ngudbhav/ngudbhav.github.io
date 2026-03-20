## What does this PR change?

<!-- Briefly describe what merchant(s) or card(s) you are adding, updating, or removing. -->

---

## Source

> Paste a link that verifies the data. A GitHub issue, bank rewards page, or r/CreditCardsIndia thread all count.

- Source: <!-- https://... -->

---

## Checklist

- [ ] I have verified the reward rates against an official or community source (linked above)
- [ ] `rewardRate` and `valuePer100` are both positive numbers
- [ ] `rewardType` is one of: `cashback`, `points`, `miles`, `neucoins`
- [ ] `category` is one of the allowed values in the schema
- [ ] Card `rank` values within each merchant are unique and sequential starting from 1
- [ ] No duplicate merchant `id` or `name` introduced
- [ ] Domains do not include `http://` or trailing slashes
- [ ] I have run `node scripts/validate-merchants.js` locally and it passes

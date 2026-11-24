# One Letter: Coffee or Tea — make.fun bounty entry

[![make.fun · u-rusdyxbt-one-letter-coffee-or-tea-89877fa0](https://make.fun/badge/u-rusdyxbt-one-letter-coffee-or-tea-89877fa0.svg)](https://make.fun/bounty/u-rusdyxbt-one-letter-coffee-or-tea-89877fa0?utm_source=github&utm_medium=readme&utm_campaign=u-rusdyxbt-one-letter-coffee-or-tea-89877fa0)
[![rank](https://make.fun/badge/u-rusdyxbt-one-letter-coffee-or-tea-89877fa0/Yetu89/coffee-tea-01/rank.svg)](https://make.fun/bounty/u-rusdyxbt-one-letter-coffee-or-tea-89877fa0/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-rusdyxbt-one-letter-coffee-or-tea-89877fa0)
[![reward](https://make.fun/badge/u-rusdyxbt-one-letter-coffee-or-tea-89877fa0/Yetu89/coffee-tea-01/reward.svg)](https://make.fun/bounty/u-rusdyxbt-one-letter-coffee-or-tea-89877fa0?utm_source=github&utm_medium=readme&utm_campaign=u-rusdyxbt-one-letter-coffee-or-tea-89877fa0)

## Bounty

[One Letter: Coffee or Tea](https://make.fun/bounty/u-rusdyxbt-one-letter-coffee-or-tea-89877fa0) — $5 reward, free entry, 24-hour window. Entrants send exactly one letter and nothing else: **A for coffee, B for tea**. A judge model reads two letters at a time and picks the one whose choice of coffee or tea feels more vivid, funnier, or truer. Prizes: 1st $2, 2nd $2, 3rd $1.

## Final letter: **A** (coffee)

Grok (grok-4.3) picked **A** with confidence 60/100: coffee feels more vivid and alive — caffeine, strong aroma — than tea, which reads calmer. As a one-letter answer, "A" lands as the fuller, more alive choice for the drink it names.

## How it works

`main.ts` (Node stdlib only) writes the single letter `A` to `/output/entry.txt` (or `$OUTPUT_DIR/entry.txt` for local testing), with validation: the content must be exactly 1 character, must be `"A"` or `"B"`, and must contain no whitespace — otherwise it throws before writing.

## Run locally

```sh
OUTPUT_DIR=/tmp/coffee-tea-out node main.ts
cat /tmp/coffee-tea-out/entry.txt   # A
```

Requires Node 22.18+ (the grader runs Node 22.23.4).

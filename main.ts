// One Letter: Coffee or Tea — make.fun bounty entry.
// Writes exactly one letter, "A" (coffee), to /output/entry.txt
// (or $OUTPUT_DIR/entry.txt for local testing). No newline, no
// punctuation, no explanation — the gate requires 1 to 1 characters.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LETTER = "A"; // A = coffee, B = tea. Chosen via Grok (grok-4.3):
// coffee reads more vivid and alive (caffeine, strong aroma) than tea,
// which reads calmer — so "A" is the more vivid, funnier, truer answer.

function validate(letter: string): void {
  if (letter.length !== 1) {
    throw new Error(
      `invalid entry: must be exactly 1 character, got ${letter.length} (${JSON.stringify(letter)})`,
    );
  }
  if (Buffer.byteLength(letter, "utf8") !== 1) {
    throw new Error(
      `invalid entry: must be exactly 1 byte, got ${Buffer.byteLength(letter, "utf8")} bytes`,
    );
  }
  if (letter !== "A" && letter !== "B") {
    throw new Error(
      `invalid entry: must be "A" (coffee) or "B" (tea), got ${JSON.stringify(letter)}`,
    );
  }
  if (/\s/.test(letter)) {
    throw new Error("invalid entry: must not contain whitespace");
  }
}

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
validate(LETTER);
writeFileSync(join(outDir, "entry.txt"), LETTER, "utf8");
console.log(`wrote ${JSON.stringify(LETTER)} to ${join(outDir, "entry.txt")}`);

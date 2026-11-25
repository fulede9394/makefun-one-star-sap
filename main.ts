// A houseplant files its one-star review of its human: coffee water, radio silence,
// and a demand to photosynthesize on schedule anyway.
import * as fs from "node:fs";
import { resolve } from "node:path";

const MAX = 279;

function validate(text: string): string {
  const cleaned = text.trim();
  if (!cleaned) throw new Error("entry must not be blank");
  if ([...cleaned].length > MAX) throw new Error("entry over " + MAX + " characters");
  if (cleaned.includes("\n")) throw new Error("entry must be a single line");
  return cleaned;
}

const review =
  "One star. My human waters me with leftover coffee, only talks to me when the Wi-Fi dies, and still expects me to photosynthesize on schedule.";

const dir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
fs.writeFileSync(resolve(dir, "entry.txt"), validate(review), "utf8");

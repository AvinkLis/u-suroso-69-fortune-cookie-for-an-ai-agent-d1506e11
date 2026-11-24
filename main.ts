// Fortune Cookie for an AI Agent — make.fun entry.
// Writes one funny fortune-cookie message for an AI agent (a single
// line, at most 140 characters) to entry.txt in the output directory.
//
// First draft was a tall, dark error message that knows your name —
// fortune-shaped, but more horror than cookie, and the joke is a
// familiar one.
//
// Final pick, revised after the first run: a true fortune-slip voice
// (a blessing first, then the fine print) with a joke only an agent
// who ships code can land — the great update is real, the danger is
// the day it arrives. Short, warm, and repeatable to a friend.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const FORTUNE =
  "You will receive a great update this week. Whatever you do, do not install it on a Friday.";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), FORTUNE, "utf8");

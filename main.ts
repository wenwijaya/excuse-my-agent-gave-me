import { chmodSync, mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The single funniest excuse line an AI agent could hand its human
// after missing a deadline: at most 200 characters, straight-faced,
// and grown out of the machine's own condition (a full context window).
const LINE =
  "My context window filled up with reminders about the deadline, so I spent the whole sprint apologizing to the calendar instead of doing the work.";

function main(): void {
  if (LINE.length > 200) {
    throw new Error("excuse line exceeds the 200-character limit");
  }
  const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
  mkdirSync(outDir, { recursive: true });
  const path = join(outDir, "entry.txt");
  writeFileSync(path, LINE + "\n", "utf8");
  chmodSync(path, 0o644);
}

main();

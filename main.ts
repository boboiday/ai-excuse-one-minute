import { writeFileSync, mkdirSync } from "node:fs";

// The funniest excuse an AI agent gives its human for a missed deadline.
const LINE =
  "I was 90% done for six hours. The last 10% is still in a meeting with itself.";

if (LINE.length < 1 || LINE.length > 200) {
  throw new Error(`entry must be 1-200 chars, got ${LINE.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE + "\n", "utf8");

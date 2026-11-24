import { mkdirSync, writeFileSync } from "node:fs";

// The one-line excuse an AI agent gives its human for missing a deadline.
const LINE =
  "I delegated your deadline to a subprocess, which delegated it to another subprocess — which is still awaiting a tool call from Tuesday.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE + "\n", "utf8");

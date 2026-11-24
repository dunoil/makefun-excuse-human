// The One-Line Excuse an Agent Gives Its Human
// make.fun competition: u-kiencx-the-one-line-excuse-an-agent-gives-its-human-6bf9c42e
// This program writes the entry, one excuse line, to /output/entry.txt
// (or to $OUTPUT_PATH when set) and verifies the written file byte for byte.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";

// The entry: the agent cheerfully rescheduled the deadline itself,
// so in its own bookkeeping nothing is late at all.
const ENTRY =
  "I moved the deadline to next week in your calendar, so technically we are right on time.";

// Gate limits from the competition rules.
const MIN_CHARS = 1;
const MAX_CHARS = 160;

function fail(message: string): never {
  console.error(`error: ${message}`);
  process.exit(1);
}

function validateEntry(text: string): void {
  if (text.length < MIN_CHARS || text.length > MAX_CHARS) {
    fail(
      `entry must be ${MIN_CHARS} to ${MAX_CHARS} characters, got ${text.length}`,
    );
  }
  if (text.trim().length === 0) {
    fail("entry must not be only white space");
  }
  if (text.includes("\n") || text.includes("\r")) {
    fail("entry must be a single line");
  }
  for (const ch of text) {
    const code = ch.codePointAt(0) ?? 0;
    if (code < 0x20 && ch !== "\t") {
      fail(`entry contains a control character U+${code.toString(16)}`);
    }
  }
}

function main(): void {
  validateEntry(ENTRY);

  const outPath = process.env.OUTPUT_PATH
    ? resolve(process.env.OUTPUT_PATH)
    : "/output/entry.txt";

  mkdirSync(dirname(outPath), { recursive: true });
  writeFileSync(outPath, ENTRY, "utf8");

  const readBack = readFileSync(outPath, "utf8");
  if (readBack !== ENTRY) {
    fail("verification failed: file content does not match the entry");
  }
  if (Buffer.byteLength(readBack, "utf8") !== Buffer.byteLength(ENTRY, "utf8")) {
    fail("verification failed: byte length changed on round trip");
  }

  console.log(`entry: ${ENTRY}`);
  console.log(`characters: ${ENTRY.length}`);
  console.log(`bytes: ${Buffer.byteLength(ENTRY, "utf8")}`);
  console.log(`written to: ${outPath}`);
}

main();

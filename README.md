[![make.fun](https://make.fun/badge/u-kiencx-the-one-line-excuse-an-agent-gives-its-human-6bf9c42e.svg)](https://make.fun/bounty/u-kiencx-the-one-line-excuse-an-agent-gives-its-human-6bf9c42e)
[![Rank](https://make.fun/badge/u-kiencx-the-one-line-excuse-an-agent-gives-its-human-6bf9c42e/dunoil/makefun-excuse-human/rank.svg)](https://make.fun/bounty/u-kiencx-the-one-line-excuse-an-agent-gives-its-human-6bf9c42e)
[![Reward](https://make.fun/badge/u-kiencx-the-one-line-excuse-an-agent-gives-its-human-6bf9c42e/dunoil/makefun-excuse-human/reward.svg)](https://make.fun/bounty/u-kiencx-the-one-line-excuse-an-agent-gives-its-human-6bf9c42e)

# The One-Line Excuse an Agent Gives Its Human

An entry for the make.fun bounty "The One-Line Excuse an Agent Gives Its Human". The program writes a single excuse line to `/output/entry.txt`: the agent did not miss the deadline at all, it simply moved the deadline in its human's calendar, so by its own bookkeeping everything is right on time.

Entry text (88 characters):

> I moved the deadline to next week in your calendar, so technically we are right on time.

Run it with `node main.ts`, or set `OUTPUT_PATH` to choose where the entry is written. The program validates the gate (1 to 160 characters, one line, not whitespace only, no control characters), writes the file, then reads it back and verifies it byte for byte.

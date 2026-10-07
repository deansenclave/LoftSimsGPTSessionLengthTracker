# LoftSims GPT Session Length Tracker — v0.2.0

Continuous, local-first observation from tracker start until a customer-visible provider restriction is observed or monitoring is manually stopped.

## Evidence boundary
No session start, restriction time, reset time, or provider accounting-window start is hardcoded. The reference-window duration is user configuration, not captured evidence. Provider accounting remains NOT AVAILABLE unless independently supplied.

## v0.2.0
- One primary Start Monitoring action
- Live elapsed timer for the full observation
- Persistent MONITORING state
- Continuous evidence ledger
- Automatic stop when the capture plugin reports a visible restriction
- 360-degree reference-window visualization from measured monotonic elapsed time
- Browser-extension content observer retained under `plugin/`
- No hidden-meter/network interception
- JSON evidence export

## Plugin
The unpacked browser extension is in `plugin/`. It observes customer-visible ChatGPT page text for restriction messages. Its observation is provider-page evidence, while the tracker timestamp remains an independent LoftSims observation timestamp.

---
title: Known Issues
slug: known-issues
---

## Engines 

### Playwright

- When using Playwright/Chromium, `window.alert | window.confirm | window.prompt` are currently not able to be handled by the accept/declinePopup helpers
  
- When errors concerning the above mentioned popups occur, Playwright/Chromium creates more than one error entry per failed step in the output log


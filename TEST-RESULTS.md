# Verification — 27 October 2026

PASS: JavaScript syntax checks for app.js, server.cjs and verify.cjs.

PASS: Automated headless Microsoft Edge checks against the local HTML file:

- COT Admin demo login and sign-out.
- Service creation, opening, editing and Completed status.
- Entered script-like text displays as literal text, with no execution.
- Browser-local persistence after reload.
- Search and status filter.
- CSV download with expected filename.
- Customer creation, vehicle creation and customer linkage.
- Duplicate vehicle registration rejected.
- Confirmed reset restores the three starter services.
- Desktop (1440px) and mobile (390px) screenshots inspected.
- No JavaScript page errors throughout the workflow.

Browser testing required permission to run outside the restricted execution environment. The HTTP preview was inaccessible across that boundary; functional checks therefore used the directly opened index.html file. The optional local HTTP server was syntax-checked, but its browser workflow was not separately verified.

Run `node verify.cjs` with Playwright and Microsoft Edge installed to repeat. The test uses a temporary browser profile and fictional records. Screenshots are stored in ignored test-results/.

No GitHub upload or live deployment performed. Original CareCheck logo and full prior requirements were unavailable.

Branding update: supplied original CareCheck logo integrated in login/sidebar; browser workflow checks passed again. Desktop and mobile screenshots regenerated. The original logo is now available; full earlier requirements remain unavailable.

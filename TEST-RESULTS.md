# Verification — KCHECK Stage 1 version 2, 27 October 2026

PASS: JavaScript syntax checks for core app, enhancements, server and browser QA.

PASS: Automated Microsoft Edge tests over the local HTTP server:

- HTTP startup and working CSS, JavaScript and relative portal navigation.
- Admin demo sign-in and all ten navigation destinations.
- Quotation with multiple items, quantity, labour, discount and tax: RM 148.40 expected and rendered.
- Repair blocked before approval of the current quotation.
- Portal customer selection scopes displayed records and available decisions.
- Simulated approval unlocks repair progression.
- Receipt submission remains Receipt Submitted and does not expose a verified receipt.
- Separate admin verification enables the demo receipt.
- Browser print invocation and generated A4 PDF output.
- Quotation revision increments version and clears earlier approval/payment verification.
- Editable workshop settings persist after reload.
- Admin and customer portal desktop and mobile screenshots generated and visually reviewed.
- No JavaScript page errors during tested workflows.

The header overlap found during visual review was corrected and the browser suite rerun. The original core create/edit/search/filter/CSV/reset workflows were also tested in version 1; the expanded suite focuses on the new workflows. This is not a production security audit, and no actual authentication, payment processing or WhatsApp sending is claimed.

Run npm run test:browser with Playwright and Microsoft Edge installed. It starts a local HTTP server on port 4173, uses an isolated temporary browser profile and exits after testing. Screenshots/PDFs remain in ignored test-results/. Browser testing requires permission outside the restricted execution environment on this computer.

No live deployment, GitHub Pages configuration, Firebase setup or customer-data upload performed.

Dashboard analytics update:
- PASS deterministic aggregation tests: monthly counts, year boundaries, empty data, invalid dates, on-time/late and missing dates, verified-only monetary totals, superseded approval exclusion and duplicate verification event handling.
- Browser suite expanded to cover service target/actual completion field saving and the 6/12-month chart selector.
PASS: expanded HTTP browser suite including completion-date persistence and chart period switching; no page errors. Dashboard screenshots regenerated for desktop/mobile review.

Pre-check and guided helper:
- PASS pure checks: 32 unique points, answer counts, safety-priority detection, deduplicated assessment suggestions, urgent symptom routing, offline disclosure and unsupported-question fallback.
- Browser coverage expanded to checklist persistence, single linked service request, portal vehicle scoping, summary printing, chat text escaping, chart ranking search and Top 5 filtering.
PASS: full HTTP browser suite including 32-point pre-check persistence, duplicate-request prevention, scoped portal checklist, chatbot disclosure/text safety, print summary and ranking filters. Desktop/mobile screenshots inspected. No browser page errors. No live AI connection or live-site deployment performed.

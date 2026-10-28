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

28 October 2026 — vehicle details, media and account screen previews:
- PASS: optional vehicle year/odometer/tyre size/colour/fuel/transmission save and survive reload; invalid negative odometer rejected.
- PASS: before/after test photo upload, display, IndexedDB persistence, captions, unsupported-format rejection, no photo data in localStorage, customer-filtered gallery, deletion and reset cleanup.
- PASS: capture-enabled inputs configured for both photo stages. Physical mobile camera capture is NOT verified.
- PASS: customer sign-up/sign-in preview navigation; fields and submit controls disabled while secure backend setup is pending. Real authentication is NOT implemented or tested.
- PASS: no page errors in the media browser suite; desktop/mobile screenshots inspected. Test photos were generated non-sensitive fixtures, not customer images.
- The real bank/QR image remains outside the app and repository. Payment screen continues to use non-payable demo information.
PASS: full HTTP regression suite after the vehicle/media update, including dashboard charts, pre-checks, quotations, approval guards, payment simulation and customer portal. No browser page errors.
28 October 2026: user explicitly authorised displaying/publishing the supplied real bank details and QR. PASS: dedicated admin/customer bank dialog, original JPEG served correctly, displayed account number checked against supplied image, real/demo distinction and accounts disabled pending Firebase. No bank transfer, QR payment or live authentication test performed. Earlier notes that the bank image is excluded are superseded by this authorised change.

Firebase accounts — 28 October 2026:
- PASS GitHub Linux Firestore ownership tests: verified owner access, denial for a different customer/anonymous/unverified user, immutable ownership, validated vehicle fields, owner-scoped queries, blocked role escalation and protected coordinator workflow updates. CI run: https://github.com/irridhuan-pixel/kcheck-cot-app/actions/runs/40692237056
- PASS real Firebase SDK against local Auth emulator: password confirmation, sign-up, verification-email request, unverified-record gate, sign-out, wrong/correct password sign-in and password-reset request. No real users created or actual emails sent.
- Fixed sign-out retaining the sign-up tab, discovered by the emulator browser test.
- Local Firestore emulator startup is blocked by Windows Unix-socket loopback; rule tests succeeded in Linux CI instead.
- Production rule deployment and end-to-end customer-record tests await project-owner CLI sign-in. Protected record forms remain gated off. No cloud photo access is permitted by the supplied Storage rules.
- GitHub Pages was discovered to auto-publish stage1-demo. The integration push triggered that existing deployment and was disclosed. Follow-up source changes use firebase-accounts; no hosting settings were altered.

Account startup resilience — 28 October 2026:
- Public GitHub account page loaded successfully in a fresh isolated browser. The screenshot's stalled load was not reproduced there; no exact client-specific cause was established.
- PASS browser tests for normal SDK loading, aborted SDK requests, a deliberately stalled entry module (15-second independent watchdog), missing module, file:// explanation and mobile retry view.
- Successful sign-in screen is not overwritten by the watchdog. No real account operations or emails were used in these tests.
- Fix prepared on firebase-accounts; publishing to the auto-deployed stage1-demo branch requires user approval.

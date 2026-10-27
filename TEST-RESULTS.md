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

# KCHECK Service Tracker — Stage 1, version 2

Responsive HTML/CSS/JavaScript demo for COT Automotive, PSMZA. Includes the supplied original CareCheck logo and Alif Workshop coordination settings.

## Review locally

Extract the complete project ZIP, including assets/. With Node.js installed, run `npm start` in this directory. No dependency installation is needed.

Admin: http://127.0.0.1:4173
Customer preview: http://127.0.0.1:4173/portal.html

Sign in with any valid email and non-empty password. Credentials are never retained or sent. Use the same browser and origin for admin and portal so both share the local records. HTTP is the recommended review method.

## Included features

- Screenshot-inspired dark sidebar, light workspace and red accents.
- Dynamic dashboard, customer and vehicle management, service editing, search, status filters and CSV export.
- Quotations with multiple items, labour, other charges, discount, tax and calculated MYR totals.
- Quotation drafts, approval requests, customer approval/rejection/revision simulations.
- Current quotation approval required before changing a service into In progress, Ready or Completed. Starter jobs represent fictional existing work.
- Revision increments the quotation version, clears approval and payment verification, and returns affected repair records to Queued.
- Customer portal: demo customer selector, linked vehicles/services, quotation decisions, simulated receipt submission and printable documents.
- Receipt submission is separate from admin review and verification. No real receipt files are collected.
- Fictional bank reference and non-functional QR placeholder, labelled DEMO — NOT FOR PAYMENT.
- A4 browser-print quotations, service reports, itemised demo invoices and verified demo receipts. Use Save as PDF in the print dialog.
- Editable organisation, workshop and document footer.
- WhatsApp-style service message preview and copy; no automatic sending or real phone lookup.
- Browser-local persistence and cross-tab refresh on saved changes.

## Try the approval workflow

1. Sign in, open Quotations and create a quotation for KC-1002.
2. Enter items as description | quantity | unit price, one per line. Save and request demo approval.
3. Open Customer Portal, choose Demo Customer B and simulate approval.
4. In admin, change that service from Queued to In progress.
5. In the portal, simulate receipt submission. Its status remains Receipt Submitted.
6. In admin Payments, review and simulate verification. A demo receipt becomes printable.
7. Revise the quotation: previous approval and payment verification are cleared.

## Project files

- index.html / portal.html: admin and portal entry pages.
- app.js: core records, forms, dashboard and storage.
- enhancements.js: quotations, portal, payments, documents, settings and coordination.
- styles.css / theme.css: base styles, screenshot-inspired theme and A4 printing.
- assets/carecheck-logo.png: supplied logo, unchanged.
- server.cjs: loopback-only server with an explicit file allowlist.
- verify.cjs / verify-v2.cjs: optional browser checks (Playwright and Microsoft Edge required).

## Limitations

This is a simulation, not secure customer access or financial processing. All shipped customer records are fictional. Do not store real customer information, passwords, banking data or receipts here. Browser storage is editable by its user and is not encrypted or shared across devices. Firebase and production authentication are not connected.

The service statuses remain Queued, In progress, Ready, Completed and Cancelled. Vehicle brand/model master data, deletion, attachments, full quotation version archives, per-service audit histories and production invoices are not implemented. Printable documents are demonstrations, not validated Malaysian e-Invoices. Background IBM Bob prompts were not executed.

## Testing and GitHub

Run `npm run check` for syntax checks. To repeat optional browser QA, install Playwright locally without saving it to package.json, then run `npm run test:browser`. The test starts its own server on port 4173; stop any existing preview first. See TEST-RESULTS.md for verified checks.

Source is maintained on the stage1-demo branch of https://github.com/irridhuan-pixel/kcheck-cot-app. Relative asset paths support static hosting under a repository subdirectory. No deployment workflow is included. GitHub Pages, Netlify and live site configuration are unchanged.

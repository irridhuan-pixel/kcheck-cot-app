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

## Dashboard charts

The dashboard now shows monthly service registrations, verified demo payment amounts and on-time completion, with a 6/12-month selector and expandable data tables. Payment totals use only current approved quotations and the latest recorded verification date. They represent simulated collections, not actual sales. No historical figures are fabricated.

Service forms include optional Target completion date and Actual completion date. Marking a job Completed records today if the actual date is blank. The on-time rate includes only Completed jobs with both dates and groups them by completion month; completion on the target date counts as on time. Missing timing is reported separately and excluded. Services are grouped by their recorded service date, including cancelled requests. Charts use the browser's local calendar.

analytics.js contains the chart calculations and SVG rendering; no external chart library or network dependency is required. Run npm run test:analytics for deterministic aggregation checks.

## 32-point pre-check and guided helper

Open **32-point Pre-check** in admin navigation, or select a demo customer and choose **Start 32-point pre-check** in the portal. The custom checklist has eight groups of four owner observations. Each point can be Not checked, No concern observed, Needs check / unsure, Safety concern or Not applicable. Only observe safely while parked, engine off and cooled. Do not dismantle, lift, crawl underneath or road-test. This is not an official inspection standard or roadworthiness certificate.

Save observations to this browser, print a summary and create one linked queued service request for coordinator review. Concern categories produce suggested professional assessments, not diagnoses, confirmed repairs or costs. Safety-priority observations route to professional assistance; no all-clear certification is generated. The customer selector scopes available demo vehicles but is not authentication.

The **Guided help** chat uses local keyword rules and current selected checklist findings. It is explicitly offline guided assistance, not a live generative AI model. It supports checklist help, common symptom routing, suggested assessment categories, quotation and demo-payment FAQs. Messages are held only in tab memory, are not saved and are not sent anywhere. It cannot inspect photographs or answer arbitrary questions.

GitHub stores the app code. Downloaded source can run locally without an internet connection; a hosted page still needs a connection to load unless separately cached. No service worker or offline installation is included. An online AI chatbot would require a secure backend; never put an AI API key in this public-facing JavaScript or in GitHub.

General guidance references (not Malaysian legal inspection criteria):
- https://www.gov.uk/guidance/the-highway-code/annex-6-vehicle-maintenance-safety-and-security
- https://www.nhtsa.gov/vehicle-safety/tires

Always follow the vehicle manufacturer's handbook and applicable local requirements. The 32-point grouping is specific to this demonstration. No claim of professional validation is made.

inspection.js contains the checklist, assessment rules and guided chat. Run npm run test:inspection to check point uniqueness, recommendation grouping and safety routing.

The chart style now includes navy bars with a yellow highest-value highlight, a navy payment trend line with yellow points and a service-type ranking table with search and Top 5 filters. Ranking share is a share of registrations, not a quality score.

## Vehicle specifications and before/after photos — version 2.2

Edit a vehicle to record optional manufacture year, odometer in km, tyre size, colour, fuel/power type and transmission. Values are validated, persist in this browser and appear in the vehicle list, linked customer vehicle card, vehicle CSV export and printable service documents. These are current vehicle details, not historical odometer snapshots at each visit.

Open Photos on a service or Before / after photos in the selected demo customer's portal. Each service has separate Before and After galleries (up to six photos per stage), captions and individual deletion. Upload JPEG, PNG or WebP images, up to 10 MB per source file. Images are decoded and re-encoded as JPEG, limited to 1600 pixels on the longest edge. Original filenames and EXIF/GPS metadata are not retained in the converted image.

Take photo uses the mobile browser's capture-enabled file picker. Camera availability and permission behaviour depend on the device/browser; this is not a live camera streaming feature. Physical camera capture was not tested on a phone. HEIC and SVG are unsupported; convert to JPEG first if needed.

Photo blobs are saved in IndexedDB on this browser/origin, rather than in localStorage or source files. They never go to GitHub. Closing/reloading retains them, but clearing browser data removes them. There is no cloud upload, cross-device sharing, backup or secure production media access. Use non-sensitive demo images only. Reset demo data deletes the stored photo galleries as well as demo records.

## Customer accounts and supplied bank image — pending decisions

Customer sign-in and sign-up screens are available as disabled previews. They do not collect passwords, register accounts, authenticate users or protect records. Secure sign-up/sign-in requires backend identity and server-enforced record/media ownership; this setup is pending the user's choice. Existing demo customer selection remains clearly labelled.

The supplied real bank/QR image is now included in assets/alif-payment.jpeg and displayed in a separate Workshop bank / QR dialog, following explicit user authorisation on 28 October 2026. Its real recipient is Alif Auto Motorsport (Maybank). All quotation amounts and transaction statuses in the demo remain simulated; the dialog directs users to confirm actual invoices with the workshop. No automatic payment verification is configured.

vehicle-media.js contains optional vehicle fields and IndexedDB galleries. customer-access.js contains the pending-setup account screen previews. Run npm run test:media for browser coverage of vehicle data, galleries, captions, filtering, deletion/reset and disabled account screens.


Real secure accounts were selected. Firebase project creation is the next external setup step; see FIREBASE-SETUP.md. Sign-up/sign-in remains disabled until the backend, ownership rules and access tests are implemented. The bank instructions are enabled separately and do not activate real account access.

## Firebase customer accounts — integration pending backend activation

The supplied Firebase web configuration is now connected to a separate secure.html account entry. Sign-up, sign-in, email verification, password reset and sign-out use Firebase Authentication. Only verified accounts may access the future protected workspace. It does not load the local demo data or photo storage, and Google Analytics is not loaded.

firestore.rules contains server-enforced ownership and field validation for customer vehicles and service requests. storage.rules denies all production photo access until that feature is implemented/tested. Protected record forms are gated off until tested Firestore rules are deployed. Existing local demo functions remain labelled demonstrations.

See FIREBASE-SETUP.md for project-owner setup, test status and remaining limitations. Older notes that accounts are disabled previews are superseded by this separate Firebase account entry; protected customer record access still requires deployment and activation. No website, billing or cloud-storage deployment is included.

Account startup now has an independent 15-second watchdog (secure-startup.js). Slow or blocked Firebase modules, missing account scripts, unavailable session storage and direct file opening produce actionable messages and a Retry connection button. Cache-versioned entry scripts request updated account code. Run npm run test:startup to check normal and blocked loading without account creation.

# KCHECK Service Tracker — Stage 1

Functional HTML/CSS/JavaScript demo for COT Automotive, PSMZA. No build step or external dependencies. No IBM Bob required.

## Run

Open `index.html` directly, or install Node.js and run `npm start`, then visit http://127.0.0.1:4173. The local server is bound to this computer only.

Sign in with any syntactically valid email and any non-empty password. Choose COT Admin. Passwords and email addresses are not retained or sent anywhere. This is a simulated login, not an access-control system.

## Included

- Overview with live counts, pipeline and recent changes.
- Create and edit customers and vehicles, including duplicate registration checks.
- Create service jobs, assign a technician, set date and priority, record notes, and update status.
- Search records and filter services by status.
- Export all records in the selected section as CSV (ignores the visible search/filter).
- Browser-local persistence, sign-out and confirmed demo-data reset.
- Responsive layout, native form validation and keyboard-accessible controls.

All starter records are fictional. Use demo information only. Local browser storage is not encrypted or shared across devices. Reset demo data from Overview to remove local edits. Browser storage restrictions can prevent persistence; the UI reports save failures.

## Branding and scope

The previous conversation's detailed assistant messages and original CareCheck logo could not be retrieved. The two available screenshots establish the KCHECK name, COT Automotive / PSMZA, COT Admin and simulated demo login. This implementation is provisional until the full agreed requirements and original logo are supplied. The K monogram is a clearly identified placeholder, not a recreation of the CareCheck logo.

Not included: production authentication, server database, customer portal, multi-user synchronization, messaging, payments, attachments or production deployment.

## GitHub handoff

This folder is ready for a GitHub repository. Do not add customer information, credentials, browser exports or private screenshots. No automatic publishing workflow is included.

After creating an empty **private** repository on GitHub, from this folder run:

```sh
git remote add origin https://github.com/YOUR-ACCOUNT/kcheck-service-tracker.git
git push -u origin main
```

GitHub Pages or any live-site deployment requires separate approval. No remote repository or live site is created by these local files.

## Manual acceptance checks

1. Submit an invalid email or empty password: browser blocks entry. A valid demo entry opens Overview.
2. Add a customer, then vehicle: both appear in their lists. Reusing a vehicle registration shows a validation error.
3. Create a service for that vehicle: it appears in Services and Overview counts update.
4. Open a service, change to Completed and save: its badge and dashboard counts update.
5. Search a registration and filter a status: only matching services appear. No-match queries show an empty state.
6. Reload: changes persist on the same browser origin. Sign out: the login screen returns.
7. Export CSV: all section records are downloaded. Formula-like leading characters are escaped.
8. Reset demo data: Cancel preserves records; confirm restores starter records.
9. Check narrow mobile width: navigation and tables remain accessible.

See `TEST-RESULTS.md` for executed verification.

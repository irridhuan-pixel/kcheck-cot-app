# Firebase integration status — 28 October 2026

The owner supplied public web configuration for kcheck-service-tracker. It is saved in firebase-config.mjs. Firebase Authentication is implemented in secure.html / secure-app.mjs, separately from the local demo. Google Analytics is not loaded.

## Implemented

- Firebase email/password sign-up and sign-in.
- Password confirmation, email verification and verification refresh.
- Password reset and sign-out; browser-session authentication persistence.
- Separate protected workspace for verified customers to add vehicles and submit service requests.
- Owner-filtered Firestore queries and rules enforcing account ownership, verified email, immutable ownership, validated fields and coordinator-only workflow updates.
- No import or migration of demo localStorage or IndexedDB photos into Firebase.
- Cloud Storage deny-all rules until a protected cloud-photo feature is implemented and tested. Existing photo galleries remain browser-local demonstrations.

## Activation gate

protectedWorkspaceReady in firebase-config.mjs is false. Account authentication can operate once Email/Password and authorised domains are configured, but the app will not expose a customer-record form until tested rules are deployed and the gate is enabled. A client flag is not the security boundary; the deployed Firebase rules must enforce access independently.

The local Firestore emulator could not start due to a Windows Unix-socket error. A GitHub Linux CI workflow runs the supplied ownership tests against an emulated demo project without production credentials. Do not enable the record workspace unless those tests pass and the exact tested rules are deployed.

## Required project-owner setup

1. Enable Email/Password under Authentication in Firebase Console.
2. Under Authentication settings > Authorised domains, add localhost for local review if missing, plus the final approved website domain when known. Do not deploy the website as part of this step.
3. Create the default Cloud Firestore database in production/locked mode if absent. Review the region before confirming. Do not choose public test rules.
4. Sign into the Firebase CLI with the Google account that owns the project, then deploy only the tested Firestore rules:
   node node_modules/firebase-tools/lib/bin/firebase.js deploy --only firestore:rules --project kcheck-service-tracker
5. Validate the deployed rules, then set protectedWorkspaceReady=true and test with two verified test accounts before allowing real customer records.

No Firebase Hosting configuration is included and no website deployment is performed. No billing upgrade or cloud photo storage is enabled by these files. Cloud Storage setup requires a separate decision before real media upload.

Admin access requires a trusted server-set custom claim admin=true. The local demo COT Admin login is not a Firebase administrator and cannot grant roles. Customer registration cannot assign admin permissions. Admin workflow UI, cloud quotation decisions and production payment verification are not connected yet; the protected customer area currently handles owned vehicles and new service requests only.

## Tests

- verify-firebase-auth.cjs exercises the real Firebase SDK against the local Auth emulator. It never creates live users or sends actual emails.
- verify-firebase-rules.mjs exercises ownership and role boundaries in the Firestore emulator.
- .github/workflows/firebase-security.yml runs rule tests on Linux. It has read-only repository permission and no deployment step or Firebase credentials.

Official documentation:
- https://firebase.google.com/docs/web/setup
- https://firebase.google.com/docs/auth/web/password-auth
- https://firebase.google.com/docs/rules/rules-and-auth
- https://firebase.google.com/docs/rules/unit-tests

# KCHECK secure-account setup — first step

Real secure accounts were selected on 28 October 2026. No Firebase project has been created or connected yet. Current customer account screens remain disabled and the existing portal remains a local demonstration.

## Create the project and web application

1. Sign into https://console.firebase.google.com/ with the Google account that should own KCHECK.
2. Choose the option to create a project and name it KCHECK Service Tracker. Review any terms yourself. Google Analytics is optional and is not required for this account setup.
3. When the project is ready, register a Web app using the </> option. Suggested app nickname: KCHECK Web. Do not enable hosting or deploy the website during this step.
4. Copy the firebaseConfig object from the web-app setup or Project settings > Your apps. This is the public web configuration used to connect a browser app.
5. Under Authentication, start setup and enable the Email/Password sign-in provider. Do not enable anonymous sign-in or public database rules.
6. Provide the public firebaseConfig object so the application integration can be prepared. Do not provide a Google password, service-account private key, Admin SDK credential or downloaded service-account JSON.

Stop here for now. Creating a project does not itself make the current demo secure. Before any real customer use, implementation must separate production and demo data, enforce record ownership in Firestore rules, protect photo storage, configure admin permissions, handle verification/reset flows and test one customer being denied access to another customer's data. Nothing should be copied from local demo storage to a public database.

If a step requests a billing upgrade, stop and review the requirement before accepting it. Shared cloud photo storage may require a separate billing/setup decision. No paid services are enabled by these repository files.

Official documentation:
- https://firebase.google.com/docs/web/setup
- https://firebase.google.com/docs/auth/web/password-auth
- https://firebase.google.com/docs/rules/rules-and-auth

The bank/QR addition is separate from account activation. It supplies real workshop payment instructions while the app's transaction records remain simulated. No automated bank reconciliation or payment gateway is configured.

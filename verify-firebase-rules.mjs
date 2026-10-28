import {initializeTestEnvironment,assertFails,assertSucceeds} from '@firebase/rules-unit-testing';
import {doc,setDoc,getDoc,getDocs,collection,query,where,updateDoc,serverTimestamp,deleteDoc} from 'firebase/firestore';
import {readFile} from 'node:fs/promises';
const env=await initializeTestEnvironment({projectId:'demo-kcheck-security',firestore:{host:'127.0.0.1',port:8080,rules:await readFile(new URL('./firestore.rules',import.meta.url),'utf8')}});
try{
 await env.clearFirestore();
 const alice=env.authenticatedContext('alice',{email_verified:true}).firestore(),bob=env.authenticatedContext('bob',{email_verified:true}).firestore(),unverified=env.authenticatedContext('alice',{email_verified:false}).firestore(),anon=env.unauthenticatedContext().firestore(),admin=env.authenticatedContext('admin',{email_verified:true,admin:true}).firestore();
 const vehicle={ownerUid:'alice',plate:'TEST-ONLY',model:'Test vehicle',year:2020,odometer:1000,colour:'Demo silver',tyreSize:'185/55 R15',createdAt:serverTimestamp()};
 await assertSucceeds(setDoc(doc(alice,'vehicles/a'),vehicle));
 await assertFails(getDoc(doc(bob,'vehicles/a')));await assertFails(getDoc(doc(unverified,'vehicles/a')));await assertFails(getDoc(doc(anon,'vehicles/a')));
 await assertSucceeds(getDoc(doc(alice,'vehicles/a')));await assertSucceeds(getDoc(doc(admin,'vehicles/a')));
 await assertFails(setDoc(doc(bob,'vehicles/forged'),vehicle));await assertFails(setDoc(doc(alice,'vehicles/role'),{...vehicle,admin:true}));
 await assertFails(updateDoc(doc(alice,'vehicles/a'),{ownerUid:'bob'}));await assertFails(updateDoc(doc(alice,'vehicles/a'),{odometer:-1}));await assertSucceeds(updateDoc(doc(alice,'vehicles/a'),{odometer:1100}));
 await assertFails(getDocs(collection(alice,'vehicles')));await assertSucceeds(getDocs(query(collection(alice,'vehicles'),where('ownerUid','==','alice'))));
 const request={ownerUid:'alice',vehicleId:'a',complaint:'Fictional inspection request',status:'New Request',coordinatorNotes:'',createdAt:serverTimestamp()};
 await assertSucceeds(setDoc(doc(alice,'serviceRequests/one'),request));await assertFails(setDoc(doc(bob,'serviceRequests/other'),{...request,ownerUid:'bob'}));
 await assertFails(setDoc(doc(alice,'serviceRequests/approved'),{...request,status:'Completed'}));await assertFails(setDoc(doc(alice,'serviceRequests/extra'),{...request,paymentVerified:true}));
 await assertFails(getDoc(doc(bob,'serviceRequests/one')));await assertFails(getDoc(doc(anon,'serviceRequests/one')));await assertFails(updateDoc(doc(alice,'serviceRequests/one'),{status:'Completed'}));
 await assertFails(updateDoc(doc(admin,'serviceRequests/one'),{ownerUid:'admin'}));await assertSucceeds(updateDoc(doc(admin,'serviceRequests/one'),{status:'Under Inspection',coordinatorNotes:'Coordinator review in progress'}));
 await assertFails(deleteDoc(doc(alice,'serviceRequests/one')));await assertFails(setDoc(doc(alice,'admins/alice'),{admin:true}));await assertFails(setDoc(doc(alice,'customers/alice'),{role:'admin'}));
 console.log('PASS: Firestore emulator ownership, verification, anonymous denial, owner-filtered queries, immutable ownership, input validation, anti-role-escalation, protected request status and coordinator claims.');
}finally{await env.cleanup()}

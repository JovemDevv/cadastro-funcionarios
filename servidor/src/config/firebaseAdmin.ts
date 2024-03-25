import * as admin from "firebase-admin";
import serviceAccount from "./firebase-adminsdk.json";

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount as admin.ServiceAccount),
  storageBucket: "rh-cadastro.appspot.com",
});

export const db = admin.firestore();
export const auth = admin.auth();
export const storage = admin.storage();

// src/config/firebaseAdminConfig.ts

import * as admin from "firebase-admin";
import * as path from "path";

// Obtendo o caminho absoluto para o arquivo serviceAccountKey.json
const serviceAccount = require(path.resolve(
  __dirname,
  "../.firebase/serviceAccountKey.json",
));

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount as admin.ServiceAccount),
});

const db = admin.firestore();
const storage = admin.storage();

export { admin, db, storage };

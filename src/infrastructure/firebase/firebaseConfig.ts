import { config } from "dotenv";
import { initializeApp } from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

// Carrega as variáveis de ambiente do arquivo .env
config();

const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
  appId: process.env.APP_ID,
};

// Inicializa o Firebase com a configuração fornecida
const app = initializeApp(firebaseConfig);

// Exporta as instâncias do Firebase para serem utilizadas em outras partes do código
export const auth = app.auth();
export const firestore = app.firestore();
export const storage = app.storage();


import app from "./firebase.config";

import { getAuth, GoogleAuthProvider } from "firebase/auth";

export const googleProvider = new GoogleAuthProvider();
const auth = getAuth(app);
export default auth;
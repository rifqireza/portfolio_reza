import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { app } from "../../config/firebase";

const auth = getAuth(app)
const AuthLogin = (email: string, password: string) => {
  return new Promise((resolve, reject) => {
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user
      resolve(user)
    })
    .catch(err => {
      reject(err)
    })
  })
}

export default AuthLogin
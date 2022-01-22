import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { ToastUtil } from "../common/ToastUtil";
import { ref, set } from "firebase/database";
import { firebaseAuth, firebaseDatabase } from "../../firebase";

const firebaseRef = ref(firebaseDatabase, "/");
const usersRef = ref(firebaseDatabase, "/users");

export const registerWithEmailAndPassword = (
  email: string,
  password: string
) => {
  createUserWithEmailAndPassword(firebaseAuth, email, password).then(
    () => {
      const params = {
        email,
        createdAt: Date.now(),
      };
      set(usersRef, params).then(() => {
        ToastUtil.show(ToastUtil.SUCCESS, "Register success!");
      });
    },
    (error) => {
      switch (error.code) {
        case "auth/invalid-email":
          ToastUtil.show(ToastUtil.ERROR, "Invalid email.");
          break;
        case "auth/email-already-in-use":
          ToastUtil.show(
            ToastUtil.ERROR,
            "Email already existed! Please try another email."
          );
          break;
        default:
          ToastUtil.show(ToastUtil.ERROR, "Internal Server Error!");
      }
      console.log(error.code);
    }
  );
};

export const loginWithEmailAndPassword = (email: string, password: string) => {
  signInWithEmailAndPassword(firebaseAuth, email, password).then(
    () => {
      ToastUtil.show(ToastUtil.SUCCESS, "Login success!");
    },
    (error) => {
      switch (error.code) {
        case "auth/user-not-found":
        case "auth/wrong-password":
          ToastUtil.show(
            ToastUtil.ERROR,
            "Username or password incorrect! Please try again."
          );
          break;
        default:
          ToastUtil.show(ToastUtil.ERROR, "Internal Server Error!");
      }
      console.log(`ERROR: FirebaseLogin error: ${error.code}`);
    }
  );
};

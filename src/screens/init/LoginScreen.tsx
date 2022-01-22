import { Button, Layout } from "@ui-kitten/components";
import {
  loginWithEmailAndPassword,
  registerWithEmailAndPassword,
} from "../../service/FirebaseService";

export const LoginScreen = () => {
  const register = () => {
    registerWithEmailAndPassword("admin@gmail.com", "admin@a");
  };

  const login = () => {
    loginWithEmailAndPassword("admin@gmail.com", "admin@a");
  };

  return (
    <Layout style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Button onPress={login}>Login</Button>
      <Button onPress={register}>Register</Button>
    </Layout>
  );
};

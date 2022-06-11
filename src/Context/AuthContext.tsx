import React, { useContext, useState } from "react";
import firebase from "firebase/app";
import { IAuth, IDataAuth } from "../Types/Auth-type";

interface IContextState {
  user: IAuth;
  setUser: (c: IAuth) => void;
  auth: IDataAuth;
  setAuth: (a: IDataAuth) => void;
}

export const AuthContext = React.createContext<IContextState>(
  {} as IContextState
);

const Auth = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<IAuth>({
    email: "",
    password: "",
  });
  const [auth, setAuth] = useState<IDataAuth>({
    refreshToken: "",
    email: "",
    uid: "",
  });
  return (
    <AuthContext.Provider value={{ auth, setAuth, user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export default Auth;

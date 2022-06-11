import React, { ChangeEvent, useContext, useState } from "react";
import { AuthContext } from "../Context/AuthContext";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import toast, { Toaster } from "react-hot-toast";
// import firebase from "../lib/firebaseSetup";
import { firebase } from "../lib/firebaseSetup";
const Register = () => {
  const [showPassConfirm, setShowPassConfirm] = useState<boolean>(false);
  const { user, setUser } = useContext(AuthContext);
  const { email, password } = user;

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };
  const handleRegister = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };
  return (
    <>
      <div className="flex w-full min-h-screen  items-center justify-center">
        <div className="xl:w-[40%] bg-lightDark min-h-[30vh] p-3  rounded">
          <h1 className="dark:text-white text-center font-semibold text-[1.2rem]">
            Register
          </h1>
          <div className="flex flex-col lg:p-7">
            {/* EMAIL */}
            <label className="mt-3">
              <h1 className="dark:text-white ">Email</h1>
              <input
                className="w-full h-8 text-slate-500 rounded pl-2 dark:bg-bgDarkInput dark:text-slate-200 outline-none focus:outline-none border border-slate-400"
                placeholder="Email"
                type="email"
                name="email"
                value={email}
                onChange={handleChange}
              />
            </label>

            {/* PASSWORD */}
            <label className="mt-3">
              <h1 className="dark:text-white ">Password</h1>
              <div className="relative">
                <input
                  className="w-full h-8 rounded pl-2 dark:bg-bgDarkInput text-slate-500 dark:text-slate-200 outline-none focus:outline-none border border-slate-400"
                  placeholder="Password"
                  name="password"
                  value={password}
                  onChange={handleChange}
                  type={showPassConfirm ? "text" : "password"}
                />
                <div>
                  {showPassConfirm ? (
                    <svg
                      onClick={() => setShowPassConfirm(!showPassConfirm)}
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 absolute  top-1 right-2 cursor-pointer dark:text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                      />
                    </svg>
                  ) : (
                    <svg
                      onClick={() => setShowPassConfirm(!showPassConfirm)}
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 absolute  top-1 right-2 cursor-pointer dark:text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
                      />
                    </svg>
                  )}
                </div>
              </div>
            </label>

            {/* CONFIRM PASSWORD */}

            <button
              onClick={handleRegister}
              className="mt-3  rounded  text-white py-1 h-10 bg-blue-400"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;

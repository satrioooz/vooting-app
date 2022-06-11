import { useState, useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";
import { AuthContext } from "../Context/AuthContext";

const Navbar = () => {
  const { auth, setAuth } = useContext(AuthContext);

  const handleLogout = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        console.log("Berhasil");
        setAuth({
          email: "",
          uid: "",
          refreshToken: "",
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <div className="w-full h-12 text-gray-700 flex  justify-between items-center px-12">
        <Link to="/" className="font-semibold text-[1.3rem] ">
          Hello World
        </Link>
        <ul className="flex gap-4 items-center">
          {auth.uid ? (
            <li>
              <Link onClick={handleLogout} to="/login">
                Logout
              </Link>
            </li>
          ) : (
            <>
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/register">Register</Link>
              </li>
            </>
          )}
        </ul>
      </div>
      <Outlet />
    </>
  );
};

export default Navbar;

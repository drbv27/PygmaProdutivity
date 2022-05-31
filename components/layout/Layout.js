import React from "react";
import Header from "./Header";
import Navbar from "./Navbar";
import firebaseApp from "../../credenciales";
import { getAuth, signOut } from "firebase/auth";

const Layout = ({correoUsuario}) => {
  /* console.log(correoUsuario) */
  return (
    <>
      <Navbar />
      <Header correoUsuario={correoUsuario}/>
    </>
  );
};

export default Layout;

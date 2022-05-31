import React from "react";
import Header from "./Header";
import Navbar from "./Navbar";


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

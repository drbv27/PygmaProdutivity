import React from "react";
import firebaseApp from "../credenciales";
import { getAuth, signOut } from "firebase/auth";
import AgregarTarea from "../components/AgregarTarea";
import ListadoTareas from "../components/ListadoTareas";
import Navbar from "../components/layout/Navbar";
import Header from "../components/layout/Header";

const auth = getAuth(firebaseApp);

const HomeP = ({ correoUsuario }) => {
  return (
    <>
      <Navbar />
      <Header>
        <h4>{`Hola ${correoUsuario} sesión iniciada`}</h4>
        <button onClick={() => signOut(auth)}>Cerrar Sesión</button>
      </Header>

      <AgregarTarea />
      <ListadoTareas />
    </>
  );
};

export default HomeP;

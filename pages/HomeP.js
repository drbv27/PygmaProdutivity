import React from "react";
import firebaseApp from "../credenciales";
import { getAuth, signOut } from "firebase/auth";
import AgregarTarea from "../components/AgregarTarea";
import ListadoTareas from "../components/ListadoTareas";
import Layout from "../components/layout/Layout";

const HomeP = ({ correoUsuario }) => {
  return (
    <>
      <Layout correoUsuario={correoUsuario}>
        <AgregarTarea />
        <ListadoTareas />
      </Layout>


    </>
  );
};

export default HomeP;

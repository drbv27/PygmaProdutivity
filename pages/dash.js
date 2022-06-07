import React,{useEffect,useState} from "react";
import firebaseApp from "../credenciales";
import { getAuth, signOut,onAuthStateChanged  } from "firebase/auth";
import {getFirestore,doc,getDoc,setDoc} from "firebase/firestore"
import AgregarTarea from "../components/AgregarTarea";
import ListadoTareas from "../components/ListadoTareas";
import Layout from "../components/layout/Layout";
import LineChart from "../components/ui/LineChart";

const firestore = getFirestore(firebaseApp);

const auth = getAuth(firebaseApp);


const dash = () => {
  const [usuarioGlobal,setUsuarioGlobal] = useState(null);


  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      setUsuarioGlobal(user.email)
      // ...
    } else {
      setUsuarioGlobal(null)
    }
  });

 

  return (
    <>
      <Layout correoUsuario={usuarioGlobal}>
        <LineChart/>
      </Layout>


    </>
  );
};

export default dash;

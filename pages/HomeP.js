import React,{useEffect,useState} from "react";
import firebaseApp from "../credenciales";
import { getAuth, signOut } from "firebase/auth";
import {getFirestore,doc,getDoc,setDoc} from "firebase/firestore"
import AgregarTarea from "../components/AgregarTarea";
import ListadoTareas from "../components/ListadoTareas";
import Layout from "../components/layout/Layout";

const firestore = getFirestore(firebaseApp);

const HomeP = ({ correoUsuario }) => {

  const [arrayTareas,setArrayTareas] = useState(null);

  const fakeData = [
    {id:1,fecha:"Lunes",inicio:"8:00am",final:"9:00am" ,subproceso:"ventas",proceso:"planeación",macroproceso:"gerencia",actividad:"reunión",tiempo:"1h"},{id:2,fecha:"Lunes",inicio:"9:00am",final:"10:00am" ,subproceso:"guias",proceso:"planeación",macroproceso:"educacion",actividad:"elabora guias",tiempo:"1h"},{id:3,fecha:"Lunes",inicio:"10:00am",final:"11:00am" ,subproceso:"inventario",proceso:"almacen",macroproceso:"ingenieria",actividad:"conteo",tiempo:"1h"},]

  async function buscarDocumentOrCrearDocumento(idDocumento){
    //crear referencia al documento
    const docuRef = doc(firestore,`usuarios/${idDocumento}`);
    //buscar documento
    const consulta = await getDoc(docuRef);
    //revisar si existe
    if (consulta.exists()){
      //si si existe
      const infoDocu = consulta.data();
      return infoDocu.tareas;
    }else{
      //si no existe
      await setDoc(docuRef,{tareas:[...fakeData]});
      const consulta = await getDoc(docuRef);
      const infoDocu = consulta.data();
      return infoDocu.tareas;
    }
  }

useEffect(()=>{
async function fetchTareas(){
  const tareasFetchadas= await buscarDocumentOrCrearDocumento(correoUsuario);
  setArrayTareas(tareasFetchadas);
}
fetchTareas();
},[]);

  return (
    <>
      <Layout correoUsuario={correoUsuario}>
        <AgregarTarea />
        {
          arrayTareas ?
          <ListadoTareas arrayTareas={arrayTareas} correoUsuario={correoUsuario} setArrayTareas={setArrayTareas}/>
          :null
          }
      </Layout>


    </>
  );
};

export default HomeP;

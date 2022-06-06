import React from "react";
import firebaseApp from "../credenciales";
import { getFirestore,updateDoc,doc } from "firebase/firestore";
const firestore = getFirestore(firebaseApp);
import {
  ContGen,
  ContProces,
  ContProcesT,
  ContTime,
  InicioTitle,
  Inputinicio,
  InputProces,
  InputTitle,
  SectProces,
  TextArea,
  TitleSub,
} from "./layout/FormTareas";

const AgregarTarea = ({correoUsuario,setArrayTareas,arrayTareas}) => {

  async function añadirTarea(e){
    e.preventDefault();
    const fecha = e.target.formFecha.value;
    const inicio = e.target.formInicio.value;
    const final = e.target.formFinal.value;
    const subproceso = e.target.formSubproceso.value;
    const proceso = e.target.formProceso.value;
    const macroproceso = e.target.formMacroproceso.value;
    const actividad = e.target.formActividad.value;
    //crear nuevo array de tareas
    const nuevoArrayTareas = 
    [...arrayTareas,
      {id:+ new Date(),
        fecha:fecha,
        inicio:inicio,
        final:final,
        subproceso:subproceso,
        proceso:proceso,
        macroproceso:macroproceso,
        actividad:actividad,
      }]
    //actualizar DB
    const docuRef = doc(firestore,`usuarios/${correoUsuario}`);
    updateDoc(docuRef,{tareas:[...nuevoArrayTareas]});
    //actualizar state
    setArrayTareas(nuevoArrayTareas);
    //Limpiar formulario
    e.target.formFecha.value="";
    e.target.formInicio.value="";
    e.target.formFinal.value="";
    e.target.formSubproceso.value="";
    e.target.formProceso.value="";
    e.target.formMacroproceso.value="";
    e.target.formActividad.value="";
  }

  return (
    <>
      <InicioTitle>Registrar Actividad</InicioTitle>
      <form onSubmit={añadirTarea}>
        <input type="date" id="formFecha"/>
        <input type="time" id="formInicio"/>
        <input type="time" id="formFinal"/>
        <input type="text"placeholder="subproceso" id="formSubproceso"/>
        <input type="text" placeholder="proceso" id="formProceso"/>
        <input type="text" placeholder="macroproceso" id="formMacroproceso"/>
        <textarea placeholder="actividad" id="formActividad"/>
        <input type="submit"/>
      </form>
  {/*     <ContGen>
        <ContTime>
          <InputTitle>Fecha</InputTitle>
          <Inputinicio type="date" />
        </ContTime>
        <ContTime>
          <InputTitle>Hora Inicio</InputTitle>
          <Inputinicio type="time" />
        </ContTime>
        <ContTime>
          <InputTitle>Hora Final</InputTitle>
          <Inputinicio type="time" />
        </ContTime>
      </ContGen>
      <SectProces>
        <ContProces>
          <TitleSub>Subproceso</TitleSub>
          <InputProces type="list" />
        </ContProces>
        <ContProces>
          <TitleSub>Proceso</TitleSub>
          <InputProces type="text" />
        </ContProces>
        <ContProces>
          <TitleSub>Macroproceso</TitleSub>
          <InputProces type="text" />
        </ContProces>
      </SectProces>
      <ContProcesT>
        <TitleSub>Actividad realizada</TitleSub>
        <TextArea cols="90" rows="5"></TextArea>
      </ContProcesT> */}
    </>
  );
};

export default AgregarTarea;

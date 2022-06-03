import React from "react";

import firebaseApp from "../credenciales";
import { getFirestore,updateDoc,doc } from "firebase/firestore";

const firestore = getFirestore(firebaseApp);

const ListadoTareas = ({arrayTareas,correoUsuario,setArrayTareas}) => {

  async function eliminarTarea(idTareaAEliminar){
    //crear nuevo array de tareas
    const nuevoArrayTareas = arrayTareas.filter((objetoTarea)=>objetoTarea.id !== idTareaAEliminar);
    //actualizar base de datos
    const docuRef = doc(firestore,`usuarios/${correoUsuario}`);
    updateDoc(docuRef,{tareas:[...nuevoArrayTareas]});
    //actualizar state
    setArrayTareas(nuevoArrayTareas);
  }

  return (
    <div>
      <h1>Actividades</h1>
      <table>
        <tr>
          <th>Dia</th>
          <th>Inicio</th>
          <th>Fin</th>
          <th>Asunto</th>
          <th>Actividad</th>
          <th>Duración</th>
          <th>Total</th>
        </tr>
        
        {arrayTareas.map((objetoTarea)=>{
          return(
            <tr>
            <td>{objetoTarea.fecha}</td>
            <td>{objetoTarea.inicio}</td>
            <td>{objetoTarea.final}</td>
            <td>{objetoTarea.subproceso}</td>
            <td>{objetoTarea.proceso}</td>
            <td>{objetoTarea.macroproceso}</td>
            <td>{objetoTarea.actividad}</td>
            <td>{objetoTarea.tiempo}</td>
            <td><button>Editar</button></td>
            <td><button onClick={()=>eliminarTarea(objetoTarea.id)}>Eliminar</button></td>
            
          </tr>
          
          )
        })}
        
      </table>
    </div>
  );
};

export default ListadoTareas;

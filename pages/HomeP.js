import React from 'react'
import firebaseApp from '../credenciales'
import { getAuth,signOut } from 'firebase/auth'
import AgregarTarea from '../components/AgregarTarea';
import ListadoTareas from '../components/ListadoTareas';

const auth = getAuth(firebaseApp);

const HomeP = ({correoUsuario}) => {
  return (
    <div>
        <h4>{`Hola ${correoUsuario} sesión iniciada`}</h4>
        <button onClick={()=>signOut(auth)}>
            Cerrar Sesión
        </button>
        <hr/>
        <AgregarTarea/>
        <ListadoTareas/>
    </div>
  )
}

export default HomeP
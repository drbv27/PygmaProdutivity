import { useEffect,useState } from "react"
import HomeP from "./HomeP";
import Login from "./Login";

import firebaseApp from "../credenciales";
import { getAuth,onAuthStateChanged } from "firebase/auth";

const auth = getAuth(firebaseApp);

export default function Home() {
  const [usuarioGlobal,setUsuarioGlobal] = useState(null);

  onAuthStateChanged(auth,(usuarioFirebase)=>{
    if(usuarioFirebase){
      setUsuarioGlobal(usuarioFirebase);
    }else{
      setUsuarioGlobal(null);
    }
  })

  return (
    <>
      {usuarioGlobal ? <HomeP correoUsuario={usuarioGlobal.email}/> : <Login/>}
    </>
  )
}

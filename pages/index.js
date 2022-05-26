import { useEffect,useState } from "react"
import HomeP from "./HomeP";
import Login from "./Login";

export default function Home() {
  const {usuarioGlobal,setUsuarioGlobal} = useState(null);
  return (
    <>
      {usuarioGlobal ? <HomeP/> : <Login/>}
    </>
  )
}

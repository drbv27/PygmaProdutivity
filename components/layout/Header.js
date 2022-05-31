import React from "react";
import firebaseApp from "../../credenciales";
import { getAuth, signOut } from "firebase/auth";
import styled from "@emotion/styled";

const auth = getAuth(firebaseApp);


const Cabecera = styled.div`
  margin-left: 15vw;
  height: 80px;
  background-color: #81b71f;
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  align-items: center;
`;

const Header = ({correoUsuario}) => {
  console.log(correoUsuario)
  return (
    <>
      <Cabecera>
        <h4>{`Hola: ${correoUsuario}`}</h4>
        <button onClick={() => signOut(auth)}>Cerrar Sesión</button>
      </Cabecera>
    </>
  );
};

export default Header;

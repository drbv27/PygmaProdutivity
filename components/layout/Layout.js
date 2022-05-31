import React from "react";
import Header from "./Header";
import Navbar from "./Navbar";
import styled from '@emotion/styled'

const PrincipalC = styled.div`
    margin-left:15vw;
`

const Layout = ({correoUsuario,...props}) => {
  console.log(props)
  return (
    <>
      <Navbar />
      <Header correoUsuario={correoUsuario}/>
      <PrincipalC>{props.children}</PrincipalC>

    </>
  );
};

export default Layout;

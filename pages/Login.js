import React from 'react'
import Image from 'next/image'
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import Robocabe from '../public/img/robotcabe.png'
import { LoginBox,LoginTitle } from '../components/layout/FormLogin';


const Login = () => {
  return (
    <>
        <LoginBox>
        <Image class="avatar" src={Robocabe} alt="eddieHead"/>
        <LoginTitle>Pygmalion</LoginTitle>
        <form>
            <label htmlFor="usuario">Usuario</label>
            <input type="text" placeholder="ingrese usuario"/>

            <label htmlFor="contraseña">Contraseña</label>
            <input type="password" placeholder="ingrese Contraseña"/>

            <input type="submit" value="Entrar"/>
            <a href="#">Olvido su contraseña</a>
        </form>
  </LoginBox>
    </>
  )
}

export default Login
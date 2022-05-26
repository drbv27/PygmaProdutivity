import React from 'react'
import Image from 'next/image'
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import Robocabe from '../public/img/robotcabe.png'
import { LoginBox,LoginTitle,LoginLabel,LoginInputTP,ImageWrap, LoginSubmit,LoginA } from '../components/layout/FormLogin';


const Login = () => {
  return (
    <>
        <LoginBox>
        <ImageWrap>
            <Image 
                src={Robocabe} 
                alt="eddieHead"
                layout="fill" 
                /* objectFit="cover" */
            />
        </ImageWrap>
        <LoginTitle>Pygmalion</LoginTitle>
        <form>
            <LoginLabel htmlFor="usuario">Usuario</LoginLabel>
            <LoginInputTP type="text" placeholder="ingrese usuario"/>

            <LoginLabel htmlFor="contraseña">Contraseña</LoginLabel>
            <LoginInputTP type="password" placeholder="ingrese Contraseña"/>

            <LoginSubmit type="submit" value="Entrar"/>
            <LoginA href="#">Olvido su contraseña</LoginA>
        </form>
  </LoginBox>
    </>
  )
}

export default Login
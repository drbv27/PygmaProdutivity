import React,{useState} from 'react'
import Image from 'next/image'
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import Robocabe from '../public/img/robotcabe.png'
import { LoginBox,LoginTitle,LoginLabel,LoginInputTP,ImageWrap, LoginSubmit,LoginA,LoginBody,LoginChange } from '../components/layout/FormLogin';
import ImgSrc from '../public/img/fondo.jpg'

const Login = () => {

    const [estaRegistrandose,setEstaRegistrandose]= useState(false);

  return (
      <>
        <LoginBody>
            <h1>{estaRegistrandose ? "Registrate" : "Inicia Sesión"}</h1>
            <Image
                alt="background"
                src={ImgSrc}
                layout="fill"
                objectFit='cover'
                quality={100}
                />
        </LoginBody>
        <LoginBox>
        <ImageWrap>
            <Image 
                src={Robocabe} 
                alt="eddieHead"
                layout="fill" 
            />
        </ImageWrap>
        <LoginTitle>Pygmalion</LoginTitle>
        <form>
            <LoginLabel htmlFor="usuario">Usuario</LoginLabel>
            <LoginInputTP type="text" placeholder="ingrese usuario"/>

            <LoginLabel htmlFor="contraseña">Contraseña</LoginLabel>
            <LoginInputTP type="password" placeholder="ingrese Contraseña"/>

            <LoginSubmit type="submit" >
            {estaRegistrandose ? "Sign In" : "Login"}
            </LoginSubmit>
            <LoginA href="#">Olvido su contraseña</LoginA>
        </form>
        <LoginChange onClick={()=>setEstaRegistrandose(!estaRegistrandose)}>
        {estaRegistrandose ? "Ya tienes cuenta? Inicia Sesión" : "No tienes cuenta? Registrate"}
        </LoginChange>
  </LoginBox>
  </>
  )
}

export default Login
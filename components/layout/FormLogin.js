import { css } from "@emotion/react";
import styled from "@emotion/styled";


export const LoginBody = styled.div`
    position:fixed;
    height:100vh;
    width:100vw;
    overflow:hidden;
    z-index:-1;
`

export const LoginBox = styled.div`
width: 320px;
height: 420px;
background: rgba(0, 0, 0, 0.712);
color: #fff;
top: 50%;
left: 50%;
position: absolute;
transform: translate(-50%, -50%);
box-sizing: border-box;
padding: 70px 30px;
-webkit-box-shadow: 3px 8px 20px 10px #1097d5;
box-shadow: 3px 8px 20px 10px #1097d5;
border-radius: 10px;
`;

export const LoginTitle = styled.h1`
    margin: 0;
    padding: 0 0 20px;
    text-align: center;
    font-size: 1.5rem;
`

export const LoginLabel = styled.label`
  margin: 0;
  padding: 0;
  font-weight: bold;
  display: block;
`

export const LoginInputTP = styled.input`
    width: 100%;
    margin-bottom: 20px;
    border: none;
    border-bottom: 1px solid #fff;
    background: transparent;
    outline: none;
    height: 40px;
    color: #fff;
    font-size: 16px;
`

export const ImageWrap = styled.div`
      width: 120px;
  height: 100px;

  position: absolute;
  top: -50px;
  left: calc(50% - 50px);
`

export const LoginSubmit = styled.button`
  width: 100%;
  margin-bottom: 20px;
      border: none;
  outline: none;
  height: 40px;
  background-color: rgb(75, 77, 83);
  color: #fff;
  font-size: 18px;
  border-radius: 20px;
  cursor: pointer;
  margin-bottom: 50px;
  &:hover{
    background-color: #1097d5;
  }
`
export const LoginChange = styled.button`
  width: 100%;
  margin-bottom: 20px;
  margin-top:2rem;
    border: none;
  outline: none;
  height: 40px;
  background-color: rgb(75, 77, 83);
  color: #fff;
  font-size: 14px;
  border-radius: 20px;
  cursor: pointer;
  margin-bottom: 50px;
  &:hover{
    background-color: #98bf11;
  }
`

export const LoginA = styled.a`
      text-decoration: none;
  font-size: 15px;
  line-height: 20px;
  color: darkgrey;
  &:hover{
    color: #fff;
  }
` 
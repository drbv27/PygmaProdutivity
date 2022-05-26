import { css } from "@emotion/react";
import styled from "@emotion/styled";

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
    color:red;
`

export const LoginLabel = styled.label`
  margin: 0;
  padding: 0;
  font-weight: bold;
  display: block;
`

export const LoginInput = styled.input`
      width: 100%;
  margin-bottom: 20px;
`
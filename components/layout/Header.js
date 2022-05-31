import React from "react";
import styled from "@emotion/styled";

const Cabecera = styled.div`
  margin-left: 15vw;
  height: 80px;
  background-color: #81b71f;
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  align-items: center;
`;

const Header = (props) => {
  return (
    <>
      <Cabecera>{props.children}</Cabecera>
    </>
  );
};

export default Header;

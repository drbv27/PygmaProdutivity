import React from "react";
import styled from "@emotion/styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartArea, faHouse } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

const Contenedor = styled.div`
  background-color: #1097d5;
  position: fixed;
  width: 15vw;
  height: 100%;
  color:white;
  font-weight:bold;
`;

const ListaN = styled.ul`
  margin:5rem 0 0 5px;
  
`;

const ItemNav = styled.li`
  margin:1rem 0 1rem 0;
  display:flex;
`;

const Enlace = styled.a`
  margin-left:15px;
  cursor:pointer;
`





const Navbar = () => {
  return (
    <>
      <Contenedor>
        <h2 className="titu">Barra Lateral</h2>
          <ListaN>
            <ItemNav>
              <FontAwesomeIcon icon={faHouse} />
              <Link href="/">
                <Enlace>Home</Enlace>
              </Link>
            </ItemNav>
            <ItemNav>
              <Link href="/dash">
              <FontAwesomeIcon icon={faChartArea} />
              </Link>
              <Link href="/dash">
                <Enlace>Dashboard</Enlace>
              </Link>
            </ItemNav>
            <ItemNav>1</ItemNav>
            <ItemNav>2</ItemNav>
            <ItemNav>3</ItemNav>
          </ListaN>
      </Contenedor>
    </>
  );
};

export default Navbar;

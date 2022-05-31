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
  margin-left:5px;
`;

const ItemNav = styled.li`
  display:flex;
`;





const Navbar = () => {
  return (
    <>
      <Contenedor>
        <h2 className="titu">Barra Lateral</h2>
          <ListaN>
            <ItemNav>
              <FontAwesomeIcon icon={faHouse} />
              <Link href="/">
                <a>Home</a>
              </Link>
            </ItemNav>
            <ItemNav>
              <FontAwesomeIcon icon={faChartArea} />
              <Link href="/dash">
                <a>Dashboard</a>
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

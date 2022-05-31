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
`;

const Navbar = () => {
  return (
    <>
      <Contenedor>
        <h2 className="titu">Barra ateral</h2>
        <div>
          <ul>
            <li>
              <FontAwesomeIcon icon={faHouse} />
              <Link href="/">
                <a>Home</a>
              </Link>
            </li>
            <li>
              <FontAwesomeIcon icon={faChartArea} />
              <Link href="/dash">
                <a>Dashboard</a>
              </Link>
            </li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
      </Contenedor>
    </>
  );
};

export default Navbar;

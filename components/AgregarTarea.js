import React from "react";
import {
  ContGen,
  ContProces,
  ContProcesT,
  ContTime,
  InicioTitle,
  Inputinicio,
  InputProces,
  InputTitle,
  SectProces,
  TextArea,
  TitleSub,
} from "./layout/FormTareas";

const AgregarTarea = () => {
  return (
    <div>
      <InicioTitle>Registrar Actividad</InicioTitle>
      <ContGen>
        <ContTime>
          <InputTitle>Fecha</InputTitle>
          <Inputinicio type="date" />
        </ContTime>
        <ContTime>
          <InputTitle>Hora Inicio</InputTitle>
          <Inputinicio type="time" />
        </ContTime>
        <ContTime>
          <InputTitle>Hora Final</InputTitle>
          <Inputinicio type="time" />
        </ContTime>
{/*         <ContTime>
          <InputTitle>Total horas</InputTitle>
          <Inputinicio type="time" />
        </ContTime> */}
      </ContGen>
      <SectProces>
        <ContProces>
          <TitleSub>Subproceso</TitleSub>
          <InputProces type="list" />
        </ContProces>
        <ContProces>
          <TitleSub>Proceso</TitleSub>
          <InputProces type="text" />
        </ContProces>
        <ContProces>
          <TitleSub>Macroproceso</TitleSub>
          <InputProces type="text" />
        </ContProces>
      </SectProces>
      <ContProcesT>
        <TitleSub>Actividad realizada</TitleSub>
        <TextArea cols="100" rows="5"></TextArea>
      </ContProcesT>
    </div>
  );
};

export default AgregarTarea;

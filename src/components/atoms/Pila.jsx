import styled from "styled-components";
import React from "react";
import { guardar, imprimir } from "../../data/pilas";

const ButtonStyled = styled.button`
    width: 80%;
    height: 50px;
    background-color: purple;
    border-radius: 10px;
    color: white;
    font-size: 18px;
    box-shadow: 10px 10px 5px0px rgba(0,0,0,0.75);

    &:hover{
        background-color: #e409e4;
    }
`;

const Pila = ({datos}) => {
    const handelGuardar = () => {
        guardar(datos);
        imprimir();
    };

    return (
        <ButtonStyled onClick={handelGuardar}>Guardar Datos</ButtonStyled>
    );
};

export default Pila;
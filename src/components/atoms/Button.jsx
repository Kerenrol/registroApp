import styled from "styled-components";

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

function Button(props){
    return(
        <ButtonStyled onClick={props.onClick}>Guardar Producto</ButtonStyled>
    )
}

export default Button;
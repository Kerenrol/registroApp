import styled from "styled-components";

const InputStyled = styled.input`
    width: 100%;
    height: 40px;
    border: 1pz gray salid;
    border-radius: 10px;
    font-size: 20px;
    color: black;
    padding: 0 10px;
`;

function Input({type, placeholder, value, onChange}) {
    return(
        <InputStyled
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
        />
    )
}

export default Input;
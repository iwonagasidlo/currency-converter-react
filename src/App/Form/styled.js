import styled from "styled-components";

export const Wrapper = styled.form`
    max-width: 800px;
`;

export const Fieldset = styled.fieldset`
    border: 1px solid ${({ theme }) => theme.color.chalice};
    border-radius: 10px;
    padding: 20px;
    margin: 10px;
`;

export const Legend = styled.h1`
    text-align: center;
    color: ${({ theme }) => theme.color.teal};
    margin-bottom: 40px;
`;

export const LabelText = styled.span`
    max-width: 200px;
    width: 100%;
    display: inline-block;
    padding: 20px;
`;

export const Input = styled.input`
    border: 1px solid ${({ theme }) => theme.color.chalice};
    border-radius: 10px;
    padding: 10px;
    max-width: 320px;
    width: 100%;
`;

export const Button = styled.button`
    width: 100%;
    background-color: ${({ theme }) => theme.color.teal};
    color: ${({ theme }) => theme.color.white};
    border: none;
    border-radius: 5px;
    padding: 10px;
    margin: 10px 0;
    transition: 1s;

    &:hover {
        filter: brightness(110%);
        transform: scale(1.03);
    }

    &:active {
        filter: brightness(120%);
    }
`;

export const Info = styled.p`
    font-size: 15px;
    color: ${({ theme }) => theme.color.chalice};
    text-align: center;
`;
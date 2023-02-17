import styled from "styled-components";

export const Wrapper = styled.p`
    font-size: 20px;
    margin-left: 5px;
    color: ${({theme}) => theme.color.teal};
    text-align: center;
    max-height: 10px;
`;
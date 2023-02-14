import styled from "styled-components";

export const Wrapper = styled.div`
    flex-basis: 700px;
    margin: 20px;
    padding: 40px;
    background: ${({theme}) => theme.color.white};
    border-radius: 20px;
    box-shadow: 0px 0px 30px 0px ${({theme}) => theme.color.black};
`;
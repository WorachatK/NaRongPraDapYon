import styled from "styled-components";

export const Container = styled.div`
    background-color: black;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
`
export const Wrapper = styled.div`
    margin: 20px 0;
    font-size: 14px;
    font-weight: 300;

    @media (max-width: 550px) {
        text-align: center;
    }
`
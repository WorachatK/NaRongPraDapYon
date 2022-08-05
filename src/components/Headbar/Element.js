import styled from "styled-components";

export const Container = styled.div`
    background-color: black;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const Wrapper = styled.div`
    width: 1200px;
    padding: 5px 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    @media (max-width: 800px) {
        justify-content: center;
    }
`
export const OpenContainer = styled.div`
    
`
export const PhoneContainer = styled.div`
    @media (max-width: 800px) {
        display: none;
    }
`
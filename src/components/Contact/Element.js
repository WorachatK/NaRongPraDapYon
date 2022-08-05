import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
`
export const Wrapper = styled.div`
    padding: 10vh 0;

    @media (max-width: 550px) {
        padding: 10vh 10px;
    }
`
export const ContactHead = styled.h1`
    font-size: 40px;

    @media (max-width: 550px) {
        text-align: center;
    }
`
export const ContactContainer = styled.div``
export const Contacts = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: start;
    margin: 30px 0;
    
    @media (max-width: 550px) {
        flex-direction: column;
    }
`
export const TextIcon = styled.div`
    display: flex;
`
export const Icon = styled.div`
    margin-right: 5px;

`
export const Text = styled.h3`
    width: 150px;
`
export const DescContainer = styled.div`
    
`
export const Description = styled.div`
    display: flex;
    margin-top: 3px;
`
export const Day = styled.div`
    width: 100px;
`
export const Link = styled.a`
    color: blue;
`

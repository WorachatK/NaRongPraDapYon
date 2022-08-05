import styled from "styled-components";
import {Link} from 'react-scroll'

export const Container = styled.div`
    height: 60vh;
    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: 550px) {
        height: auto;
    }
`
export const Wrapper = styled.div`
    width: 1200px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;

    @media (max-width: 800px) {
        width: 100vw;
        padding: 0 10px;
    }

    @media (max-width: 550px) {
        display: flex;
        justify-content: center;
        flex-direction: column;
        padding: 50px 10px;
    }
`   
export const TextContainer = styled.div`
    @media (max-width: 550px) {
            text-align: center;
        }
`
export const HeadText = styled.h1`
    font-size: 40px;
    margin-bottom: 20px;
`   
export const Description = styled.div`
    width: 500px;
    font-size: 25px;

    @media (max-width: 800px) {
        width: auto;
    }
    @media (max-width: 550px) {
        margin-bottom: 20px;
    }
`   
export const Button = styled(Link)`
    font-size: 20px;
    background-color: black;
    color: white;
    padding: 20px 40px;
    border-radius: 5px;
    cursor: pointer;
    transition: all 0.3s ease-in-out;

    &:hover{
        border: 2px solid;
        background-color: #fff;
        color: #000;
    }
`   

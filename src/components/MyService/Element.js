import styled from "styled-components";

export const Container = styled.div`
    background-color: rgba(240,240,240,0.8);
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 10vh;
    padding-bottom: 50px;
`
export const Wrapper = styled.div`
    width: 1200px;
    height: 100%;

    @media (max-width: 800px) {
        width: auto;
        padding: 0 10px;
    }
`
export const HeadContainer = styled.h1`
    text-align: center;
    font-size: 40px;
`
export const ServicesContainer = styled.div`
    width: 100%;
    margin-top: 50px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 100px;
    grid-row-gap: 50px;

    @media (max-width: 800px) {
        grid-column-gap: 20px;
        grid-row-gap: 20px;
    }
    @media (max-width: 500px) {
        grid-template-columns: repeat(1, 1fr);
    }
`
export const Service = styled.div`
    height: 400px;
    width: 100%;
    background-color: #fff;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    border-radius: 20px;
    transition: 0.3s;
    overflow: hidden;

    &:hover{
        box-shadow: 0 16px 32px 0 rgba(0,0,0,0.2);
    }
`
export const Image = styled.img`
    width: 100%;
    height: 60%;
    object-fit: cover;
`
export const TextContainer = styled.div`
`
export const HeadText = styled.h3`
    text-align: center;
    font-size: 30px;
    margin: 20px 0; 
`
export const Description = styled.div`
    text-align: center;
    font-size: 18px;
    color: #727272;
    word-wrap: break-word;
`
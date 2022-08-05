import styled from "styled-components";

export const Container = styled.div`
    height: 90vh;
    width: 100%;
    background-color: rgba(240,240,240,0.8);
`
export const Wrapper = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    overflow: hidden;
`
export const Arrow = styled.div`
    width: 50px;
    height: 50px;
    background-color: black;
    color: white;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 50%;
    left: ${props=>props.direction === "left" && "50px"};
    right: ${props=>props.direction === "right" && "50px"};
    margin: auto;
    cursor: pointer;
    opacity: 0.8;
    z-index: 2;

    @media (max-width: 550px) {
        left: ${props=>props.direction === "left" && "10px"};
        right: ${props=>props.direction === "right" && "10px"};
    }
`
export const ImageContainer = styled.div`
    height: 100%;
    display: flex;
    transform: translateX(${prop=>prop.slideIndex * -100}vw);
    transition: all 1s ease;
`
export const Image = styled.img`
    height: 100%;
    width: 100vw;
    object-fit: scale-down;
    object-position: center center;
`
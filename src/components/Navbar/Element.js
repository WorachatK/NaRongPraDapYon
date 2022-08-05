import styled from "styled-components";
import { Link } from "react-scroll";

export const Container = styled.div`
    height: 10vh;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: sticky;
    z-index: 10;
    background-color: #fff;
    top: 0;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
`
export const Wrapper = styled.div`
    height: 100%;
    width: 1200px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 800px) {
        width: 100vw;
        padding: 0 10px;
    }
`
export const LogoContainer = styled.div``

export const Logo = styled.h1`
    font-weight: bolder;
    cursor: pointer;
    @media (max-width: 800px) {
        font-size: 30px;
    }
    @media (max-width: 550px) {
        font-size: 28px;
    }
`
export const LinksContainer = styled.div`
    display: flex;
    align-items: center;
    height: 100%;
    gap: 40px;

    @media (max-width: 800px) {
        gap: 10px;
    }
    @media (max-width: 550px) {
        display: none;
    }
`
export const Links = styled(Link)`
    font-size: 20px;
    cursor: pointer;
    transition: all 0.2s ease;

    &:hover{
        border-bottom: 3px solid black;
    }
    &.active {
        border-bottom: 3px solid black;
    }
    @media (max-width: 800px) {
        font-size: 16px;
    }
`
export const LinkIcon = styled.div`
    display: none;
    font-size: 35px;
    cursor: pointer;

    @media (max-width: 550px) {
        display: block;
    }
`
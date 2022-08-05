import styled from "styled-components";
import { Link } from "react-scroll";

export const Container = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    background-color: rgba(255,255,255,0.9);;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: ${({ openMenu })=> (openMenu ? '100%' : '0')};
    top: ${({ openMenu })=> (openMenu ? '0' : '-100%')};
    transition: 0.3s ease-in-out;
    z-index: 999;
    color: black;
`
export const Wrapper = styled.div`
`

export const LinksContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
    gap: 40px;
`
export const Links = styled(Link)`
    font-size: 30px;
    cursor: pointer;
    transition: all 0.2s ease;

    &:hover{
        border-bottom: 3px solid black;
    }
`
export const Icon = styled.div`
    position: absolute;
    right: 0;
    top: 0;
    font-size: 40px;
    cursor: pointer;
`
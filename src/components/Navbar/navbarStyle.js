import styled from "styled-components"
import { Container } from '../../globalStyles'
import { Link } from "react-router-dom"

export const Nav = styled.div`
    background: #004a2f;
    box-shadow: 0px 2px 3px rgba(0,0,0,0.3);
    height: 14vh;
    display: flex;
    justify-content: center;
    align-items: center;
    position: sticky;
    top: 0;
    z-index: 999;
    font-size: 1.2rem;
`;

export const NavContainer = styled(Container)`
    display:flex;
    justify-content: space-between;
    height: 14vh;

    ${Container}
`;

export const NavLogo = styled(Link)`
    justify-self: flex-start;
    display: flex;
    align-items: center;
    max-width: 100px;
`;

export const NavIcon = styled.img`
    height: 65%;
    filter: brightness(0) invert(1);
    z-index: 9999;

    @media screen and (max-width: 960px){
        height: 60%;
    }
`;

export const MobileIcon = styled.div`
    display: none;

    @media screen and (max-width: 960px){
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 2rem;
        cursor: pointer;
        z-index: 1000;
    }
`;

export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;  
    justify-content: space-between;

    @media screen and (max-width: 960px){
        display: flex;
        justify-content:space-evenly;
        flex-direction: column;
        width: 100%;
        top:50px;
        height: 100vh;
        position: absolute;
        left: ${({ show }) => ( show ? 0 : "-100%" )};
        opacity: 1;
        transition: all 0.3s ease;
        background: #004a2f;
        z-index: 998;
    }
`;

export const NavItem = styled.li`
    height: 15vh;
    color: #fff;
    border-bottom: 3px solid transparent;

    &:hover{
        border-bottom: 3px solid #04D361;
    }
    
    @media screen and (max-width: 960px){
        font-weight: 700;
        letter-spacing: 1px;
        height: 10vh;

        &:hover{
        border-bottom: none;
        }
    }
`;

export const NavLink = styled(Link)`
    color: #fff;
    display: flex;
    align-items: center;
    text-decoration: none;
    letter-spacing: 1px;
    padding: 0.5rem 1rem;
    height: 100%;
    transition: 0.3s;
   
    &:hover{
        color: #04D361;        
    }

    @media screen and (max-width: 960px) {
        margin-top: 1rem;
        text-align: center;
        padding: 1rem 0rem 0rem 1rem;
        width: 70% auto;
        display: table;

        &:hover{
            color: #04D361;
            transition: all 0.3s ease;
        }
    }
`;

export const NavItemBtn = styled.li`

    @media screen and (max-width: 960px) {
        display: flex;
        justify-content: center;
        align-items:center;
        width: 100%;
        height: 120px;
    }
`;

export const NavBtnLink = styled(Link)`
    display: flex;
    justify-content: center;
    align-items:center;
    text-decoration: none;
    padding: 8px 16px;
    height: 120px;    
`;
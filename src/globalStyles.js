import styled, { createGlobalStyle } from "styled-components"

const GlobalStyles = createGlobalStyle`
    *{
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: "Poppins", sans-serif;
    }
`;

export const Container = styled.div`
    z-index: 1;
    width: 100%;
    margin-right: auto;
    padding-right: 50px;
    padding-left: 50px;

    @media screen and (max-width: 990px){
        padding-right: 25px;
        padding-left: 25px;
    }
`;

export const Button = styled.button`
    background: ${({primary}) => (primary ? "#04BF58" : "#04D361")};
    padding: ${({big}) => (big ? "12px 60px" : "8px 15px")};
    font-size: ${({fontBig}) => (fontBig ? "20px" : "18px")};
    outline: none;
    border: none;
    cursor: pointer;
    border-radius: 5px;
    white-space: nowrap;
    color: #fff;
    font-weight:bold;
    letter-spacing: 1px;

    &:hover{
        transition: all 0.3s ease-in-out;
        background: #fff;
        background: ${({primary}) => (primary ? "#04D361" : "#04BF58")};
    }
    @media screen and (max-width: 960px){
       width: 70%;
    }
    
`;

export default GlobalStyles;
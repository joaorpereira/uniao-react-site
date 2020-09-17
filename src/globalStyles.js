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

    @media screen and (max-width: 500px){
        padding-right: 30px;
        padding-left: 30px;
        margin: 0 auto;
    }
    @media screen and (max-width: 800px){
        padding-right: 50px;
        padding-left: 50px;
        margin: 0 auto;
    }


`;

export const Button = styled.button`
    background: ${({primary}) => (primary ? "#04D361" : "#04BF58")};
    padding: ${({big}) => (big ? "12px 80px" : "8px 15px")};
    font-size: ${({fontBig}) => (fontBig ? "20px" : "18px")};
    outline: none;
    border: none;
    cursor: pointer;
    border-radius: 5px;
    white-space: nowrap;
    color: #fff;
    font-weight:bold;
    text-align: center;
    letter-spacing: 1px;
    margin: ${({marginTrue}) => (marginTrue ? "15px 20px" : "0px 0px 0px 0px")};
    transition: all 0.3s ease-in-out;

    &:hover{        
        background: ${({primary}) => (primary ? "#04BF58" : "#04D361")};
    }
    @media screen and (max-width: 960px){
       width: 100%;
       margin: ${({marginTrue}) => (marginTrue ? "10px 0px" : "0px")};
    }
    
`;

export default GlobalStyles;
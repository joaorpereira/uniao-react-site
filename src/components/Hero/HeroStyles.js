import styled from "styled-components"

export const HeroSection = styled.div`    
    background: radial-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.8)), url("/images/background.jpg") center center/cover no-repeat;
    padding: 100px 70px;
    height: 100vh;    
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 600px){
        padding: 50px 25px;
        margin-top:-5px;
    }

    @media screen and (max-width: 800px){
        padding: 80px 25px 50px 25px;
    }
`;

export const HeroRow = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    flex-direction: ${({imgStart}) => (imgStart ? "row-reverse" : "row")};

    @media screen and (max-width: 600px){
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

export const HeroColumn = styled.div`
    margin-bottom: 15px;
    padding-right: 15px;
    padding-left: 15px;
    flex: 1;
    max-width: 50%;

    @media screen and (max-width: 600px){
        padding-right: 30px;
        padding-left: 30px;
        margin: 0 auto;        
    }
    @media screen and (max-width: 800px){
        padding-right: 50px;
        padding-left: 50px;
        display: flex;
        justify-content: center;
    }

`;

export const TextWrapper = styled.div`
    max-width: 540px;
    padding-top: 0;
    padding-bottom: 60px;

    @media screen and (max-width: 800px){
        padding-bottom: 65px;
    }
`;

export const TopLine = styled.div`
    color: ${({lightTopLine}) => (lightTopLine ? "#04D361" : "#f7f8fa")};
    font-size: 40px;
    line-height: 16px;
    letter-spacing: 1.4px;
    margin-bottom: 2rem;
    transition: all 0.3s ease-in-out;
    text-shadow: 3px 3px 5px rgba(0,0,0,0.6);

    &:hover{
        color: #C0C0C0;
    }

    @media screen and (max-width: 800px){
        font-size: 30px;
        margin-bottom: 1.5rem;
    }
`;

export const HeadTitle = styled.h1`
    margin-bottom: 30px;
    font-size: 4.5rem;
    line-height: 1.1;
    letter-spacing: 1px;
    color: ${({lightText}) => (lightText ? "#f7f8fa" : "#f7f8fa")};
    margin-bottom: 3rem;
    text-shadow: 5px 5px 5px rgba(0,0,0,0.6);
    @media screen and (max-width: 800px){
        font-size: 3.3rem;
        margin-bottom: 1.5rem;
    }
`;


export const BtnContainer = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
    flex-direction: row;

    @media screen and (max-width: 960px){
        flex-direction: column;
        justify-content: center;        
    }
`;

export const BtnItem = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    text-align: center;
`;

export const ImgWrapper = styled.div`
    max-width: 555px;
    display: flex;
    justify-content: ${({start}) => (start ? "flex-start" : "flex-end")};
`;

export const Img = styled.img`

    margin: 0 auto;
    max-width: 100%;
    vertical-align: middle;
    display: inline-block;
    max-height: 400px; 
    filter: brightness(0) invert(1);
    opacity: 0.90;
    @media screen and (max-width: 1500px) {
        max-height: 340px; 
        transform: translate(0%, -10%);
    }

    @media screen and (max-width: 800px){
        display: none;
    }
`;


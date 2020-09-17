import styled from "styled-components";

export const InfoSection = styled.div`
    color: #fff;
    padding: 140px 0px;
    background: ${({lightBG}) => (lightBG ? "#fff" : "#004a2f")};
`;

export const Row = styled.div`
    display: flex;
    align-items:center;
    margin: 0 -15px -15px -15px;
    flex-wrap: wrap;
    flex-direction: ${({imgStart}) => (imgStart ? "row-reverse" : "row")};
`;

export const Column = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 15px;
    padding: 0px 15px 0px 15px;
    flex: 1;
    max-width: 50%;
    flex-basis: 50%;

    @media screen and (max-width: 768px) {
        max-width: 100%;
        flex-basis: 100%;
        display: flex;
        justify-content: center;
    }
`;

export const TextWrapper = styled.div`
    max-width: 540px;
    padding-top: 0;
    padding-bottom: 60px;

    @media screen and (max-width: 768px){
        padding-bottom: 50px;
    }
`;


export const HeadTitle = styled.h1`
    margin-bottom: 35px;
    font-size: 48px;
    line-height: 1.1;
    color: ${({lightText}) => (lightText ? "#fff" : "#004a2f")};
    @media screen and (max-width: 800px){
        text-align: center;
        letter-spacing: 2px;
        margin-bottom: 40px;
    }
`;

export const Paragraph = styled.h1`
    max-width: 500px;
    font-size: 18px;
    line-height: 27px;
    margin-bottom: 35px;  
    text-align: justify;  
    font-weight: 400;
    color: ${({ligthTextParag}) => (ligthTextParag ? "#fff" : "#004a2f")};
`;

export const ImgWrapper = styled.div`
    max-width: 555px;
    display: flex;
    justify-content: ${(start) => (start ? "flex-start" : "flex-end")};
`;

export const Img = styled.img`
    padding-right: 0;
    border: 0;
    max-width: 100%;
    vertical-align: middle;
    display: inline-block;
    max-height: 500px;
`;
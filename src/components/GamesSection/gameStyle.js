import styled from "styled-components";

export const InfoSection = styled.div`
    color: #fff;
    padding: ${({paddingPage}) => (paddingPage ? "90px 0px;" : "120px 0px;")};
    background: #fff;
    @media screen and (max-width: 800px){
        padding: 60px 0px ;
    }
`;

export const Row = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-wrap: wrap;
    max-width: 900px;
    margin: 0 auto;
`;

export const Column = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-bottom: 15px;
    flex: 1;

    @media screen and (max-width: 768px) {
        max-width: 100%;
        flex-basis: 100%;
        display: flex;
        justify-content: center;
    }
`;

export const Wrapper = styled.div`
    padding-top: 0;  
    display: flex;
    flex-direction: column;
`;

export const Item = styled.div`
    padding-top: 0;
    display: flex;
`;

export const HeadTitle = styled.h1`
    text-align:center;
    margin-bottom: 4rem;
    margin-top: -1rem;
    font-size: 48px;
    line-height: 1.1;
    color: #1b1919;

    @media screen and (max-width: 800px){
        text-align: center;
        letter-spacing: 2px;
        margin-bottom: 40px;
        font-size: 40px;
        margin-bottom: 2rem;
        margin-top: 0rem;
    }
`;

export const SubTitle = styled.p`
    margin: 25px 0px;
    font-weight: 600;
    font-size: 22px;
    letter-spacing: 2px;
    line-height: 1.1;
    color: #1b1919;

    @media screen and (max-width: 800px){
        text-align: center;
        letter-spacing: 2px;
        margin-bottom: 20px;
        font-size: 20px;
    }
`;

export const Paragraph = styled.h1`
    margin-right: 10px;
    margin-left: 10px;
    font-size: 18px;
    line-height: 27px;
    margin-bottom: 5px;  
    text-align: center;  
    font-weight: 500;
    color: #004a2f;
`;
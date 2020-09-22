import styled from "styled-components"

export const StorySection = styled.div`
    color: #1b1919;
    padding: 75px 0px ;
    background: #04D361;
    height: 100%;
    width: 100%;   
    margin: 0px auto;

    @media screen and (max-width: 800px){
        padding: 50px 0px ;
    }
`;

export const StoryContainer = styled.div`
    z-index: 1;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-wrap: wrap;

`;

export const HeadTitle = styled.h1`
    text-align: center;
    margin-bottom: 5rem;
    font-size: 48px;
    line-height: 1.1;
    color: #1b1919;
    letter-spacing: 2px;
    
    @media screen and (max-width: 800px){
        text-align: center;
        margin-bottom: 4.5rem;
        font-size: 35px;
    }
`;

export const Post = styled.div`
    background-color: #fff;
    width: 300px;    
    height: 450px;
    display: flex;
    align-items: center;
    padding: 2rem 5rem;
    margin: 0;
    border: 1px solid #E6E6F0; 
    border-radius: 0.8rem;

    @media screen and (max-width: 800px){
        margin-bottom: 4rem;
        height: 400px;
        width: 280px;       
        justify-items: flex-start;
    }
`;

export const PostWrapper = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;  
`;

export const ImageWrapper = styled.div`
    min-width: 15rem;
    max-width: 15rem;
    height: 13rem;
    transform: translate(-50%, 0%);
    position: relative;    

    @media screen and (max-width: 800px){
        margin-bottom: -2.5rem;
        transform: translate(-25%, -30%);
    } 
`;

export const Img = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    border-radius: .8rem;
`;

export const InfoWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    transform: translate(-20%, 0%);
`;

export const InfoItem = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
`;

export const Title = styled.h1`
    text-transform: uppercase;
    font-size: 1.4rem;
    font-weight: 600;
    margin: 1rem 0rem;
    color: #1b1919;

    @media screen and (max-width: 800px){
        margin: 0;
    }
`;

export const Paragraph = styled.p`
    text-align: justify;
    color: #9C98A6; 
    font-size: 0.9rem;
    @media screen and (max-width: 800px){
        width: 90%;       
    }
`;



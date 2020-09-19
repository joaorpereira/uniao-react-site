import styled from "styled-components"

export const DepoimentSection = styled.div`
    color: #1b1919;
    padding: 25px 0px;
    background: #fff;
    height: 100%;
    width: 100%;   
    margin: 0px auto 50px;
    
    hr {
        border: 0;
        border-top: 1px solid #1b1919;
        opacity:0.4;
        margin-bottom: 100px;
        width: 20%;
        margin: 0 auto;
        margin-bottom: 40px;
    }

    @media screen and (max-width: 800px){
        hr {
            display: none
        }        
    }
`;


export const HeadTitle = styled.h1`
    text-align: center;
    margin-bottom: 15px;
    font-size: 48px;
    line-height: 1.1;
    color: ${({lightText}) => (lightText ? "#fff" : "#1b1919")};
    
    @media screen and (max-width: 800px){
        text-align: center;
        margin-bottom: 4rem;
        font-size: 40px;
    }
`;

export const Post = styled.div`
    max-width: 1000px;    
    height: 16rem;
    display: flex;
    align-items: center;
    padding: 2rem 5rem;
    margin: 0 auto;
    border-radius: 0.8rem;
    box-shadow: 0 1.4rem 8rem rgba(0,0,0,0.2); 

    @media screen and (max-width: 800px){
        flex-direction: column;
        height: 100%;
    }
`;

export const PostWrapper = styled.div`
    max-width: 900px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;

    @media screen and (max-width: 800px){
        flex-direction: column;
    }
`;

export const ImageWrapper = styled.div`
    min-width: 18rem;
    max-width: 18rem;
    height: 13rem;
    transform: translateX(-8rem);
    position: relative;

    @media screen and (max-width: 800px){
        transform: translate(0, -3rem);
        min-width: 14rem;
        max-width: 14rem;
        height: 12rem;
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
`;

export const InfoItem = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
`;

export const Title = styled.h1`
    text-transform: uppercase;
    font-size: 1.5rem;
    font-weight: 600;
    margin: 1.5rem 0 0rem;
    color: #4facfe;

    @media screen and (max-width: 800px){
        margin: 0;
    }
`;

export const SubTitle = styled.h2`
    display: block;
    color: rgba(0,0,0,0.5);
    font-size: 1.2rem;
    font-weight: 600;
    margin: 0.5rem 0;
`;

export const Paragraph = styled.p`
    text-align: justify;
    color: rgba(0,0,0,.7);
    margin-bottom: 1rem;
`;
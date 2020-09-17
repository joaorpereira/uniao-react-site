import styled from "styled-components"

export const FooterContainer = styled.div`
    background-color: #1b1919;
    padding: 4rem 0 2rem 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const FooterSubscription = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin-bottom: 24px;
    padding: 24px;
    color: #fff;    
`;

export const FooterSubHeading = styled.p`
    font-family: "Poppins", sans-serif;
    margin-bottom: 24px;
    font-size: 24px;
`;

export const Form = styled.form`
    display:flex;
    justify-content: center;
    align-items:center;
    @media screen and (max-width: 820px){
        flex-direction: column;
        width: 80%;
    }
`;

export const FormInput = styled.input`
    padding: 10px 20px;
    border-radius: 2px;
    margin-right: 10px;
    outline: none;
    border: none;
    font-size: 16px;
    border: 1px solid #fff;
    &::placeholder{
        color: #242424;
    }
    @media screen and (max-width: 820px){
        width:100%;
        margin: 0 0 16px 0;
    }
`;

export const SocialMedia = styled.section`
    max-width: 1000px;
    width: 100%;
`;

export const SocialMediaWrap = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 90%;
    max-width: 1000px;
    margin: 40px auto 0 auto;
    @media screen and ( max-width: 820px){
        flex-direction: column;
    }
`;

export const SocialLogo = styled.div`
    color: #fff;
    justify-self: center;
    cursor: pointer;
    text-decoration: none;
    display: flex;
    align-items: center;
    margin-bottom: 16px;
    max-width: 300px;
`;

export const WebsiteRights = styled.small`
    color: #fff;
    margin-bottom: 16px;
    justify-self: center;
    max-width: 300px;

    @media screen and (max-width: 960px){
        top:50px;
        position: relative;
    }
`;

export const SocialIcons = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 240px;
`;

export const SocialIconLink = styled.a`
    color: #fff;
    font-size: 24px;
    transition: all 0.3s;
    
    &:hover{
        color: #04D361;
    }

    @media screen and (max-width: 960px){
        top:-40px;
        position: relative;
    }
    
`;

export const NavIcon = styled.img`
    height: 50px;
    filter: brightness(0) invert(1);
    margin-right: 5rem;

    @media screen and (max-width: 960px){
        display: none;
    }
`;
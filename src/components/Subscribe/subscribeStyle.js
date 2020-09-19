import styled from "styled-components"

export const FooterContainer = styled.div`
    background-color: #1b1919;
    padding: 1rem 0 0 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    @media screen and (max-width: 800px){
        padding: 2rem 0 2rem 0;
        margin-bottom: -5px;
    }
`;

export const FooterSubscription = styled.section`
    display: ${({showSubscription}) => (showSubscription ? "none" : "flex")};
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 24px;
    color: #fff;    
`;

export const FooterSubHeading = styled.p`
    font-family: "Poppins", sans-serif;
    margin-bottom: 30px;
    font-size: 24px;
    @media screen and (max-width: 800px){
        font-size: 22px;
    }
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
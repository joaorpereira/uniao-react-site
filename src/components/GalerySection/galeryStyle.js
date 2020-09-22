import styled from "styled-components"

export const GalerySection = styled.div`
    color: #1b1919;
    padding: 75px 0px ;
    background: #fff;
    height: 100%;
    width: 100%;   
    margin: 0px auto;
    display: flex;
    align-items: center;
    flex-direction: column;

    @media screen and (max-width: 800px){
        padding: 50px 0px ;
    }
`;

export const HeadTitle = styled.h1`
    text-align: center;
    margin-bottom: 2.5rem;
    font-size: 48px;
    line-height: 1.1;
    color: #1b1919;
    letter-spacing: 2px;
    
    @media screen and (max-width: 800px){
        text-align: center;
        margin-bottom: 2.5rem;
        font-size: 35px;
    }
`;

export const GaleryContainer = styled.div`
    z-index: 1;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-wrap: wrap;
`;

export const Form = styled.form`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 900px;
    margin-bottom: 2rem;
`;

export const Label = styled.label`
    text-align: left;
    width: 100px;
    padding: 12px 20px;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
    background: #04D361;
    color: #1b1919;
    font-weight: bold;
    font-size: 20px;
    border: 1px solid #04D361;
`;

export const Input = styled.input`
    text-align: left;
    width: 400px;
    font-size: 20px;
    padding: 12px 12px 12px 25px;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    background: #fff;
    color: #1b1919;
    padding-left: 10px;
    outline: none;
    border: 1px solid #ccc;
    border-left: none;

    ::placeholder {
        color: #ccc;
        font-size: 1rem;
    }
`;

export const Select = styled.select`
    text-align: left;
    width: 150px;
    font-size: 20px;
    padding: 12px 12px 12px 12px;
    border-radius: 4px;
    background: #fff;
    color: #1b1919;
    padding-left: 10px;
    outline: none;
    border: 1px solid #ccc;

    ::placeholder {
        color: #ccc;
        font-size: 1rem;
    }

    option {
        color: #1b1919;
        padding: 20px;
        font-weight: small;
        outline: none;
        border: 1px solid #ccc;
        color: #ccc;
    }
`;

export const FormWrapper = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
`;

export const GaleryCard = styled.div`
    background-color: #fff;
    width: 350px;    
    height: 350px;
    display: flex;
    align-items: center;
    margin: 2rem 1rem;
    padding: 0;
    border: 1px solid #E6E6F0; 
    border-radius: 4px;
`;

export const GaleryWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;  
    height: 100%;
    width: 100%;
`;

export const ImageWrapper = styled.div`
    min-width: 350px;
    max-width: 350px;
    position: relative;   
`;

export const Img = styled.img`
    width: 100%;
    object-fit: cover;
`;


export const GaleryItem = styled.div`
    display: flex;
    justify-content: flex;
    align-items: flex-start;
    padding: 10px 20px;
    flex-direction: column;
    width: 100%;
`;

export const Title = styled.h1`
    text-transform: uppercase;
    font-size: 1.4rem;
    font-weight: 600;
    color: #1b1919;

    @media screen and (max-width: 800px){
        margin: 0;
    }
`;

export const Category = styled.h2`
    display: block;
    color: #4facfe;
    font-size: 1rem;
    font-weight: 600;
`;

export const Date = styled.p`
    text-align: justify;
    color: #9C98A6; 
    font-size: 0.9rem;
    @media screen and (max-width: 800px){
        width: 90%;       
    }
`;


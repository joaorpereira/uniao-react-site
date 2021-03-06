import styled from "styled-components"

export const FormSection = styled.div`
    color: #1b1919;
    padding: 40px 0px;
    background: #fff;
    height: 90vh;
    width:100%;

    @media screen and (max-width: 800px) {
        padding: 30px 0px;
    }
`;

export const FormWrapper = styled.div`
    max-width: 1000px;
    display: flex;
    align-content: center;
    justify-content: space-between;
    flex-wrap: wrap;
    margin: 0 auto;
`;

export const Title = styled.h1`
    margin-bottom: 0rem;
    font-size: 25px;
    line-height: 1;
    text-align: right;
    margin-right: 20%;

    @media screen and (max-width: 800px) {
        font-size: 25px;
        line-height: 1;
        margin-bottom: 0rem;
        text-align: center;
        margin-right: 0;
    }
`;

export const Img = styled.img`
    max-width: 500px;

    @media screen and (max-width: 800px) {
        display: none;
    }
`;

export const Form = styled.form`
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;
    max-width: 400px;
    margin-top: 2.5rem;
`;

export const FormInput = styled.div`
    margin-bottom: 0.5rem;
    display: flex;
    align-items: center;
    width: 100%;

    p {
        font-size: 0.8rem;
        margin-top: 0.5rem;
        color: #f00e0e;
    }

    &:nth-child(4){
        display: flex;
        align-items: flex-start;
        flex-direction: column;

        Label {
            border-top-right-radius: 5px;
            border-bottom-right-radius: 0px;
            border-bottom-left-radius: 0px;
            margin-bottom: 0;
            width: 100%;
        }
    }

    @media screen and (max-width: 800px) {
        margin-bottom: 0.5rem;
    }
`;

export const Label = styled.label`
    text-align: left;
    width: 140px;
    margin-bottom: 1.25rem;
    padding: 10px 20px;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
    background: #04D361;
    color: #1b1919;
    font-weight: 600;

    &:nth-child(4){
        border-top-right-radius: 5px;
        border-bottom-right-radius: 5px;
    }

    @media screen and (max-width: 800px) {
        width: 135px;
        font-weight: 500;
        padding: 10px 0px 10px 10px;
    }
`;

export const Input = styled.input`
    text-align: left;
    width: 150px;
    font-size: 1rem;
    margin-bottom: 1.25rem;
    padding: 10px 10px 10px 20px;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    background: #1b1919;
    color: #fff;
    padding-left: 10px;
    outline: none;
    width: 100%;
    border: none;

    ::placeholder {
        color: #ccc;
        font-size: 1rem;
    }
`;

export const TextArea = styled.textarea`
    display: flex;
    font-size: 1rem;
    margin-bottom: 1rem;
    padding: 10px 20px;
    border-bottom-right-radius: 5px;
    border-bottom-left-radius: 5px;
    background: #1b1919;
    color: #fff;
    outline: none;
    width: 100%;
    height: 100px;
    border: none;

    ::placeholder {
        color: #ccc;
        font-size: 1rem;
    }

    @media screen and (max-width: 800px) {
        padding: 10px 0px 10px 10px;
    }
`;

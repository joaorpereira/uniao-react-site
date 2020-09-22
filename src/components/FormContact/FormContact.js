import React from 'react'
import useForm from "../../hooks/useForm"
import { FormSection, FormWrapper, Title, Img, Form, FormInput, Input, Label, TextArea} from "./formStyle"
import { Container, Button } from "../../globalStyles"

const FormContact = () => {

    const { values, resetState, handleChange} = useForm({
        username: "",
        phone: "",
        email: "",
        message: "",
    })

    const handleInput = (event) => {
        const { name, value } = event.target;    
        handleChange(name, value);
    };
    

    const handleSubmit = (event) => {
        event.preventDefault()
        resetState()
    }

    return (
        <>
            <FormSection>
                <Container>
                    <Title>Entre em contato conosco!</Title>
                    <FormWrapper>                        
                        <Form onSubmit={handleSubmit}>
                            <FormInput>
                                <Label htmlFor="username">Nome:</Label>
                                <Input required 
                                    id="username" 
                                    name="username" 
                                    type="text" 
                                    value={values.username} 
                                    onChange={handleInput} 
                                    placeholder="Digite seu nome"/>
                                   
                            </FormInput>
                            <FormInput>
                                <Label htmlFor="phone">Telefone:</Label>
                                <Input required 
                                    id="phone" 
                                    name="phone" 
                                    type="tel" 
                                    value={values.phone} 
                                    onChange={handleInput} 
                                    placeholder="Digite seu telefone"/>
                                   
                            </FormInput>
                            <FormInput>
                                <Label htmlFor="email">Email:</Label>
                                <Input required 
                                    id="email" 
                                    name="email" 
                                    type="email" 
                                    value={values.email} 
                                    onChange={handleInput} 
                                    placeholder="Digite seu email"/>
                                   
                            </FormInput>
                            <FormInput>
                                <Label htmlFor="message">Mensagem:</Label>
                                <TextArea required 
                                    id="message" 
                                    name="message" 
                                    type="text" 
                                    value={values.message} 
                                    onChange={handleInput} 
                                    placeholder="Digite sua mensagem"/>
                                   
                            </FormInput>     
                            <Button big primary>Enviar</Button>                        
                        </Form>
                        <Img src="/images/form-image.svg" alt="Contact"/>
                    </FormWrapper>
                </Container>
            </FormSection>            
        </>
    )
}

export default FormContact

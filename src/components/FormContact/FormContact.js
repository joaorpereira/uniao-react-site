import React from 'react'
import useForm from "../../hooks/useForm"
import { FormSection, FormWrapper, Title, Img, Form, FormInput, Input, Label, TextArea} from "./formStyle"
import { Container } from "../../globalStyles"

const FormContact = () => {
    const { inputValues, handleInput, handleSubmit } = useForm()
    return (
        <>
            <FormSection>
                <Container>
                    <Title>Entre em contato conosco!</Title>
                    <FormWrapper>                        
                        <Form onSubmit={handleSubmit}>
                            <FormInput>
                                <Label forHtml="name">Nome:</Label>
                                <Input required id="username" name="name" type="text" value={inputValues.username} onChange={handleInput} placeholder="Digite seu nome"/>
                            </FormInput>
                            <FormInput>
                                <Label forHtml="phone">Telefone:</Label>
                                <Input required id="phone" name="phone" type="tel" value={inputValues.phone} onChange={handleInput} placeholder="Digite seu telefone"/>
                            </FormInput>
                            <FormInput>
                                <Label forHtml="email">Email:</Label>
                                <Input required id="email" name="email" type="email" value={inputValues.email} onChange={handleInput} placeholder="Digite seu email"/>
                            </FormInput>
                            <FormInput>
                                <Label forHtml="message">Mensagem:</Label>
                                <TextArea required id="message" name="message" type="text" value={inputValues.message} onChange={handleInput} placeholder="Digite sua mensagem"/>
                            </FormInput>                             
                        </Form>
                        <Img src="/images/form-image.svg" alt="Contact"/>
                    </FormWrapper>
                </Container>
            </FormSection>            
        </>
    )
}

export default FormContact

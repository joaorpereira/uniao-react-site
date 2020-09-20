import React from 'react'
import { GalerySection, GaleryContainer, Form, Label, FormWrapper, Input, Select, ImageWrapper, GaleryCard, Img, GaleryWrapper, GaleryItem, Title, Category, Date, HeadTitle } from "./galeryStyle"
import { galeryObj } from "../../pages/Galery/Data"
import useForm from '../../hooks/useForm'
import { Button } from '../../globalStyles'

const Galery = () => {
    const pictures = galeryObj

    const {values, resetState, handleChange} = useForm({
        category: "",
        date: "",
        place: "",
    })

    const handleInput = (event) => {
        const {name, value} = event.target
        handleChange(name, value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        resetState()
    }
   
    return (
        <>
            <GalerySection>
                <HeadTitle>Galeria</HeadTitle>
                <Form onSubmit={handleSubmit}>
                    <FormWrapper>
                        <Label htmlFor="place">Local:</Label>
                        <Input name="place" id="place" type="text" value={values.local} onChange={handleInput} placeholder="Digite a localidade"/>
                    </FormWrapper>
                    <Select name="category" id="category" onChange={handleInput} >
                        <option value="" hidden></option>
                        <option value={values.category}>Stadium</option>
                        <option value={values.category}>Private Party</option>
                        <option value={values.category}>Championship</option>
                        <option value={values.category}>Festival</option>
                    </Select>
                    <Button big fontBig>Enviar</Button>                       
                </Form>              
                <GaleryContainer>   
                    {pictures.map(picture => (
                        <GaleryCard key={picture.id}>   
                            <GaleryWrapper>
                                <ImageWrapper>
                                    <Img src={picture.image} alt={picture.alt}/>
                                </ImageWrapper>
                                <GaleryWrapper>
                                    <GaleryItem>
                                        <Title>{picture.place}</Title>
                                        <Date>{picture.date}</Date>
                                        <Category>{picture.category}</Category>
                                    </GaleryItem>
                                </GaleryWrapper>
                            </GaleryWrapper>       
                        </GaleryCard>                          
                    ))}               
                </GaleryContainer>
            </GalerySection>            
        </>
    )
}

export default Galery 
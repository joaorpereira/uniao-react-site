import React from 'react'
import { GalerySection, GaleryContainer, Form, Label, FormWrapper, Input, Select, ImageWrapper, GaleryCard, Img, GaleryWrapper, GaleryItem, Title, Date, HeadTitle } from "./galeryStyle"
import { galeryObj } from "../../pages/Galery/galeryData"
import useForm from '../../hooks/useForm'
import { Button } from '../../globalStyles'

const Galery = () => {
    const data = galeryObj

    const {values, resetState, handleChange} = useForm({
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
       
    console.log(values.place)

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
                    {data
                        .filter(item => {
                            return item.place.toLowerCase().indexOf(values.place) >= 0
                        })
                        .map(item => (
                        <GaleryCard key={item.id}>   
                            <GaleryWrapper>
                                <ImageWrapper>
                                    <Img src={item.image} alt={item.alt}/>
                                </ImageWrapper>
                                <GaleryWrapper>
                                    <GaleryItem>
                                        <Title>{item.place}</Title>
                                        <Date>{item.date}</Date>
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
import React from 'react'
import { GalerySection, GaleryContainer, Form, Input, Select, ImageWrapper, GaleryCard, Img, GaleryWrapper, GaleryItem, Title, Category, Date, HeadTitle } from "./galeryStyle"
import { galeryObj } from "../../pages/Galery/Data"

const Galery = () => {
    const pictures = galeryObj
   
    return (
        <>
            <GalerySection>
                <HeadTitle>Galeria</HeadTitle>
                <GaleryContainer>   
                    <Form>
                        <Input />
                        <Select/>
                    </Form>              
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
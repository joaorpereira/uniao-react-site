import React from 'react'
import { Link } from "react-router-dom"
import { Button, Container } from "../../globalStyles"
import {HeroSection, HeroRow, HeroColumn, TextWrapper, TopLine, HeadTitle, ImgWrapper, Img, BtnContainer, BtnItem} from "./heroStyle"

function Hero( { lightBg, imgStart, topLine, lightText, headline, lightTopLine, buttonLabelOne, buttonLabelTwo, start, img, alt } ) {
    return (
        <>  
            <HeroSection lightBg={lightBg}>
                <Container>
                    <HeroRow imgStart={imgStart}>
                        <HeroColumn>
                            <TextWrapper>
                                <TopLine lightTopLine={lightTopLine}>{topLine}</TopLine>
                                <HeadTitle lightText={lightText}>{headline}</HeadTitle>
                                <BtnContainer>
                                    <BtnItem>
                                        <Link to="/contact">
                                            <Button marginTrue big fontBig >{buttonLabelOne}</Button>
                                        </Link>
                                    </BtnItem>
                                    <BtnItem>
                                        <Link to="/contact">
                                            <Button marginTrue big fontBig>{buttonLabelTwo}</Button>
                                        </Link>
                                    </BtnItem>
                                </BtnContainer>
                            </TextWrapper>
                        </HeroColumn>
                        <HeroColumn>
                            <ImgWrapper start={start}>
                                <Img src={img} alt={alt}/>
                            </ImgWrapper>
                        </HeroColumn>
                    </HeroRow>
                </Container>
            </HeroSection>            
        </>
    )
}

export default Hero;

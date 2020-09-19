import React from 'react'
import { DepoimentSection, Post, ImageWrapper, Img, PostWrapper, InfoWrapper, InfoItem, Title, SubTitle, Paragraph, HeadTitle } from "./depoStyle"
import { Container } from "../../globalStyles"

const Testimony = () => {
    return (
        <>
             <DepoimentSection>
                <HeadTitle>Depoimentos</HeadTitle>
                <hr/>
                <Container>
                    <Post>
                        <PostWrapper>
                            <ImageWrapper>
                                <Img src="/images/people.jpeg" alt="people"/>
                            </ImageWrapper>
                            <InfoWrapper>
                                <InfoItem>
                                    <Title>Nome da Pessoa</Title>
                                    <SubTitle>Historia</SubTitle>
                                    <Paragraph>
                                            The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero are also.
                                    </Paragraph>
                                    {/* <Button>Saiba Mais</Button> */}
                                </InfoItem>
                            </InfoWrapper>
                        </PostWrapper>
                    </Post>                   
                </Container>
            </DepoimentSection>            
        </>
    )
}

export default Testimony 
import React from 'react'
import { DepoimentSection, Post, ImageWrapper, Img, PostWrapper, InfoWrapper, InfoItem, Title, SubTitle, Paragraph, HeadTitle } from "./aboutStyle"
import { Container } from "../../globalStyles"
import { testimonyObj } from "../../pages/About/aboutData"

const Testimony = () => {
    const posts = testimonyObj
    console.log(posts)
    
    return (
        <>
             <DepoimentSection>
                <HeadTitle>Depoimentos</HeadTitle>
                <hr/>
                <Container>                 
                    {posts.map(post => (
                        <Post key={post.id}>   
                            <PostWrapper>
                                <ImageWrapper>
                                    <Img src={post.image} alt={post.alt}/>
                                </ImageWrapper>
                                <InfoWrapper>
                                    <InfoItem>
                                        <Title>{post.name}</Title>
                                        <SubTitle>Historia</SubTitle>
                                        <Paragraph>
                                                {post.text}
                                        </Paragraph>
                                    </InfoItem>
                                </InfoWrapper>
                            </PostWrapper>       
                        </Post>                          
                    ))}                                      
                </Container>
            </DepoimentSection>            
        </>
    )
}

export default Testimony 
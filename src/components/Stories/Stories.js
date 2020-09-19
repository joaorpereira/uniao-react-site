import React from 'react'
import { StorySection, StoryContainer, Post, ImageWrapper, Img, PostWrapper, InfoWrapper, InfoItem, Title, SubTitle, Paragraph, HeadTitle } from "./storyStyle"
import { storyObj } from "../../pages/Home/Data"

const Stories = () => {
    const posts = storyObj
   
    return (
        <>
            <StorySection>
                <HeadTitle>Depoimentos</HeadTitle>
                <StoryContainer>                 
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
                                        <Paragraph>{post.text}</Paragraph>
                                    </InfoItem>
                                </InfoWrapper>
                            </PostWrapper>       
                        </Post>                          
                    ))}                                      
                </StoryContainer>
            </StorySection>            
        </>
    )
}

export default Stories 
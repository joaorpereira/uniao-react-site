import React from 'react'
import { Link } from "react-router-dom"
import { Container, Button } from "../../globalStyles"
import { InfoSection, Row, Column, TextWrapper, HeadTitle, Paragraph, ImgWrapper, Img} from "./sectionStyle";


function Section({paddingPage, lightBG, lightText, imgStart, title, ligthTextParag, paragraph, buttonLabel, start, img, alt, primary}) {
    return (
        <InfoSection paddingPage={paddingPage} lightBG={lightBG}>
            <Container>
                <Row imgStart={imgStart}>
                    <Column>
                        <TextWrapper>
                            <HeadTitle lightText={lightText}>{title}</HeadTitle>
                            <Paragraph ligthTextParag={ligthTextParag}>{paragraph}</Paragraph>                            
                                    <Link to="/about">
                                        <Button primay={primary} big>{buttonLabel}</Button>
                                    </Link>
                        </TextWrapper>
                    </Column>
                    <Column>
                        <ImgWrapper start={start}>
                            <Img src={img} alt={alt}/>
                        </ImgWrapper>
                    </Column>
                </Row>
            </Container>
        </InfoSection>
    )
}

export default Section

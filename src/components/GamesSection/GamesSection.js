import React from 'react'
import { Container } from "../../globalStyles"
import { InfoSection, Row, Column, Wrapper, HeadTitle, SubTitle, Item, Paragraph} from "./gameStyle";

function GamesSection({lightBG, lightText}) {
    return (
        <InfoSection lightBG={lightBG}>
            <Container>
                <HeadTitle>Calendário de Jogos</HeadTitle>
                <Row>
                    <Column>
                            <SubTitle lightText={lightText}>Próximas Partidas</SubTitle>
                            <Wrapper>
                                <Item>
                                    <Paragraph>22/22/2012</Paragraph>
                                    <Paragraph>União</Paragraph>
                                    <Paragraph>x</Paragraph>
                                    <Paragraph>Esperança</Paragraph> 
                                </Item>
                            </Wrapper>               
                    </Column>
                    <Column>
                            <SubTitle lightText={lightText}>Resultados</SubTitle>
                            <Wrapper>
                                <Item>
                                    <Paragraph>União</Paragraph>
                                    <Paragraph>2</Paragraph>
                                    <Paragraph>x</Paragraph>
                                    <Paragraph>0</Paragraph>
                                    <Paragraph>Esperança</Paragraph>
                                </Item>
                                <Item>
                                    <Paragraph>União</Paragraph>
                                    <Paragraph>2</Paragraph>
                                    <Paragraph>x</Paragraph>
                                    <Paragraph>0</Paragraph>
                                    <Paragraph>Esperança</Paragraph>
                                </Item>
                            </Wrapper>
                    </Column>
                </Row>
            </Container>
        </InfoSection>
    )
}

export default GamesSection
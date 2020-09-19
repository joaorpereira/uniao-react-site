import React from "react"
import { FaFacebook, FaInstagram, FaYoutube, FaLinkedin } from "react-icons/fa"
import { FooterContainer, FooterSubscription, FooterSubHeading, Form, FormInput, SocialSection, SocialLogo, SocialMediaWrap, SocialIcons, WebsiteRights, SocialIconLink, NavIcon} from './footerStyle'
import { Button } from "../../globalStyles"
import Logo from "../../assets/logo.png"

const Footer = () => {
    return (
        <FooterContainer>
            <SocialSection>
                <FooterSubscription >
                    <FooterSubHeading>
                        Entre em contato conosco!
                    </FooterSubHeading>
                    <Form>
                        <FormInput name="email" type="email" placeholder="Email" />
                        <Button fontBig>Enviar</Button>
                    </Form>
                </FooterSubscription>
            </SocialSection>
            <SocialSection>
                <SocialMediaWrap>
                    <SocialLogo>                            
                        <NavIcon src={Logo}/>
                    </SocialLogo>
                    <WebsiteRights>
                        Created by Joao Paulo Pereira © 2020
                    </WebsiteRights>
                    <SocialIcons>
                        <SocialIconLink href="/" target="_blank" aria-label="Facebook">
                            <FaFacebook />
                        </SocialIconLink>
                        <SocialIconLink href="/" target="_blank" aria-label="Instagram">
                            <FaInstagram />
                        </SocialIconLink>
                        <SocialIconLink href="/" target="_blank" aria-label="Youtube">
                            <FaYoutube />
                        </SocialIconLink>
                        <SocialIconLink href="/" target="_blank" aria-label="Linkedin">
                            <FaLinkedin />
                        </SocialIconLink>
                    </SocialIcons>
                </SocialMediaWrap>
            </SocialSection>
        </FooterContainer>
    )
}

export default Footer;


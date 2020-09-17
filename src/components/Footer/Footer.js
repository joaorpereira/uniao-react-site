import React from "react"
import { FaFacebook, FaInstagram, FaYoutube, FaLinkedin } from "react-icons/fa"
import { FooterContainer, FooterSubscription, FooterSubHeading, Form, FormInput, SocialMedia, SocialLogo, SocialMediaWrap, SocialIcons, WebsiteRights, SocialIconLink, NavIcon} from './FooterStyles'
import { Button } from "../../globalStyles"
import Logo from "../../assets/logo.png"

const Footer = () => {
    return (
        <FooterContainer>
            <SocialMedia>
                <FooterSubscription>
                    <FooterSubHeading>
                        Entre em contato conosco!
                    </FooterSubHeading>
                    <Form>
                        <FormInput name="email" type="email" placeholder="Email" />
                        <Button fontBig>Enviar</Button>
                    </Form>
                </FooterSubscription>
            </SocialMedia>
            <SocialMedia>
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
            </SocialMedia>

        </FooterContainer>
    )
}

export default Footer;


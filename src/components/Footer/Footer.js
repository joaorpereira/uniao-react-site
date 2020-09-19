import React from "react"
import { FaFacebook, FaInstagram, FaYoutube, FaLinkedin } from "react-icons/fa"
import { FooterContainer, SocialLogo, FooterWrapper, SocialIcons, WebsiteRights, SocialIconLink, NavIcon} from './footerStyle'
import Logo from "../../assets/logo.png"

const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrapper>
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
            </FooterWrapper>
        </FooterContainer>
    )
}

export default Footer;


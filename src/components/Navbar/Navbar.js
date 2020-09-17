import React, {useState, useEffect} from 'react'
import Logo from "../../assets/logo.png"
import { FaTimes, FaBars } from 'react-icons/fa'
import { IconContext } from "react-icons/lib"
import { Button } from "../../globalStyles" 
import { Nav, NavContainer, NavLogo, MobileIcon, NavIcon, NavMenu, NavItem, NavLink, NavItemBtn, NavBtnLink} from "./NavbarStyles"


function Navbar() {
    const [show, setShow] = useState(false)
    const [button, setButton] = useState(true)

    const showMenu = () => {
        setShow(!show)
    }
    
    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false)
        } else {
            setButton(true)
        }
    }

    const closeMobileMenu = () => {
        setShow(false)
    }

    useEffect(() => {
        showButton()
    }, [])


    window.addEventListener("resize", showButton)

    return (
        <>
            <IconContext.Provider value={{color: "#fff"}}>
                <Nav>
                    <NavContainer>
                        <NavLogo to="/" onClick={closeMobileMenu}>                            
                            <NavIcon src={Logo}/>
                        </NavLogo>
                        <MobileIcon onClick = {showMenu}>
                            {show ? <FaTimes /> : <FaBars />}
                        </MobileIcon>
                        <NavMenu onClick={showMenu} show={show}>
                            <NavItem>
                                <NavLink to="/">Home</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink to="about">História</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink to="galery">Galeria</NavLink>
                            </NavItem>
                            <NavItemBtn>
                                {button ? (
                                    <NavBtnLink to="/contact">
                                        <Button primary>Contato</Button>
                                    </NavBtnLink>) : (
                                    <NavBtnLink to="/contact">
                                        <Button fontBig primary>Contato</Button>
                                    </NavBtnLink>                                   
                                )}                                
                            </NavItemBtn>
                        </NavMenu>       
                    </NavContainer>
                </Nav>
            </IconContext.Provider>
        </>
    )
}

export default Navbar






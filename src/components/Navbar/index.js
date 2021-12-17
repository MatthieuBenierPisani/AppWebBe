import React from 'react'
import { Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink } from './NavbarElements'
import Logo from './logo.png';

const Navbar = ({ toggle }) => {
    return (
        <>
            <Nav>
                <NavLink to='/accueil'>
                    <img src={Logo} alt="better-earth logo" style={{width: "260px"}}></img>
                </NavLink>
                <Bars onClick={toggle}/>
                <NavMenu>
                    <NavLink to='/accueil' activeStyle>
                        Accueil
                    </NavLink>
                    <NavLink to='/faq' activeStyle>
                        FAQ
                    </NavLink>
                    <NavLink to='/contact' activeStyle>
                        Nous contacter
                    </NavLink>
                    <NavLink to='/mon-compte' activeStyle>
                        Mon compte
                    </NavLink>
                    <NavBtnLink to='/login'>Se connecter</NavBtnLink>
                </NavMenu>
            </Nav>
        </>
    )
}

export default Navbar

import React, {useState, useContext} from 'react';
import { Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink } from './NavbarElements'
import Logo from './logo.png';
import { userContext } from '../../pages/userContext';
import { utils } from '../../pages/utils';

const Navbar = ({ toggle }) => {

    const {user, setUser} = useContext(userContext)

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


                    {user ? (
                    <NavLink to='/mon-compte' activeStyle>
                    <pre>{JSON.stringify(user, null, 2)}</pre>
                    </NavLink>
                    ) : ( <p></p>
                    )}
                    {user ? (
                    <NavBtnLink onClick={() => {setUser()}} to='/accueil'>Se déconnecter</NavBtnLink>
                    ) : ( <NavBtnLink to='/login'>Se connecter</NavBtnLink>
                    )}
                    
                </NavMenu>
            </Nav>
        </>
    )
}

export default Navbar

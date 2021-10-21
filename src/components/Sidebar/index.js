import React from 'react'
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink, SideBtnWrap, SidebarRoute } from './SidebarElements';
import { NavLink } from '../Navbar/NavbarElements';

const Sidebar = ({ isOpen, toggle }) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="accueil" onClick={toggle}>
                        Accueil
                    </SidebarLink>
                    <SidebarLink to="faq" onClick={toggle}>
                        FAQ
                    </SidebarLink>
                    <SidebarLink to="contact" onClick={toggle}>
                        Nous contacter
                    </SidebarLink>
                    <SidebarLink to="mon-compte" onClick={toggle}>
                        Mon compte
                    </SidebarLink>
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRoute to="/se-connecter" onClick={toggle}>Se connecter</SidebarRoute>
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar

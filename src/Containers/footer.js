import React from 'react'
import Footer from '../components/Footer'
import Logo from './logo.png';

export function FooterContainer() {
    return(
        <Footer>
            <Footer.Wrapper>
                <Footer.Row>
                    <Footer.Column>
                        <Footer.Title><a href="accueil" style={{color: "black", textDecoration: "none"}}>Accueil</a></Footer.Title>
                    </Footer.Column>
                    <Footer.Column>
                        <Footer.Title><a href="faq" style={{color: "black", textDecoration: "none"}}>Faq</a></Footer.Title>
                    </Footer.Column>
                    <Footer.Column>
                        <Footer.Title><a href="contact" style={{color: "black", textDecoration: "none"}}>Nous contacter</a></Footer.Title>
                    </Footer.Column>
                    <Footer.Column>
                        <Footer.Title><a href="mon-compte" style={{color: "black", textDecoration: "none"}}>Mon compte</a></Footer.Title>
                    </Footer.Column>
                </Footer.Row>
                <Footer.LogoRow>
                    <Footer.Column>
                        <img src={Logo}/>
                    </Footer.Column>
                </Footer.LogoRow>
            </Footer.Wrapper>
        </Footer>
    )
}
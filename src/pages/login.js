import React, { useState, useRef } from 'react'
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Tab from 'react-bootstrap/Tab';
import 'bootstrap/dist/css/bootstrap.min.css';
import emailjs from 'emailjs-com';

import '../styles/login.css'

const Login = () => {
    
    const [currentTab, setCurrentTab] = useState("first");

    const handleSelect = (eventKey) => {
        setCurrentTab("second");
    };

    const handleSelectSecond = (eventKey) => {
        setCurrentTab("first");
    };

    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

  const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_p5dsmje', 'template_t3w587m', form.current, 'user_r7901vaye4rwk8o05Yz3C')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      };

  return (
      <>
      <Sidebar isOpen={isOpen} toggle={toggle}/>
      <Navbar toggle={toggle}/>

    <Container className="mt-5 mb-5 my-auto" align="center">
        <Row>
          <Tab.Container defaultActiveKey="first" activeKey={currentTab} onSelect={(key) => setCurrentTab(key)}>
            <Col md={3} style={{border: "1px solid #084A83", background: "white", height: "150px"}}>
              <Nav variant="pills" className="flex-column" align="left">
                <Nav.Item>
                  <Nav.Link eventKey="first">Se connecter</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Se créer un compte</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">Plus d'informations</Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
            <Col className="account-col" md={{ span: 7, offset: 1 }} style={{border: "1px solid #084A83", background: "white"}}>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <p className="display-6" style={{fontFamily: "'Roboto' sans-serif;", color: "#084A83", fontWeight: "700", textAlign: "center", paddingBottom: "20px", paddingTop: "20px", fontSize: "22px"}}>Se connecter</p>
                  <p className="display-6" style={{fontFamily: "'Roboto' sans-serif;", color: "#084A83", fontWeight: "500", textAlign: "center", marginTop: "-40px", fontSize: "18px"}}>à la plateforme BetterEarth</p>
                  <Form style={{textAlign: "center"}}>
                    <Form.Group className="mb-3" controlId="formBasicIdentifiant">
                      <Form.Control style={{color: "#212529", borderBottom: "1px solid #084A83", borderRadius: ".025rem", backgroundColor: "#EBF5FF"}} type="name" placeholder="Identifiant"/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicName">
                      <Form.Control style={{color: "#212529", borderBottom: "1px solid #084A83", borderRadius: ".025rem", backgroundColor: "#EBF5FF"}} type="password" placeholder="Mot de passe" />
                    </Form.Group>
                    <Button variant="primary" type="submit" style={{background: "#084A83", borderRadius: "0px", marginTop: "10px", marginBottom: "10px", textAlign: "center"}}>
                      Se connecter
                    </Button>
                    <Form.Group className="mb-3" controlId="formBasicName">
                        <a href="#" style={{textDecoration: "none", color: "black"}}>Mot de passe oublié ?</a>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicName">
                        <a onClick={handleSelect} className="btn btn-primary" style={{background: "transparent", border: "1px solid #084A83", borderRadius: "0px", marginTop: "10px", marginBottom: "10px", textAlign: "center", color: "black"}}>Se créer un compte</a>
                    </Form.Group>
                  </Form>

                </Tab.Pane>
                <Tab.Pane eventKey="second">
                    <p className="display-6" style={{fontFamily: "'Roboto' sans-serif;", color: "#084A83", fontWeight: "700", textAlign: "center", paddingBottom: "20px", paddingTop: "20px", fontSize: "22px"}}>Se créer un compte</p>
                    <p className="display-6" style={{fontFamily: "'Roboto' sans-serif;", color: "#084A83", fontWeight: "500", textAlign: "center", marginTop: "-40px", fontSize: "18px"}}>sur la plateforme BetterEarth</p>
                    <Form style={{textAlign: "center"}}>
                        <Form.Group className="mb-3" controlId="formBasicIdentifiant">
                            <Form.Control style={{color: "#212529", borderBottom: "1px solid #084A83", borderRadius: ".025rem", backgroundColor: "#EBF5FF"}} type="name" placeholder="Identifiant"/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicIdentifiant">
                            <Form.Control style={{color: "#212529", borderBottom: "1px solid #084A83", borderRadius: ".025rem", backgroundColor: "#EBF5FF"}} type="email" placeholder="Email"/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicName">
                            <Form.Control style={{color: "#212529", borderBottom: "1px solid #084A83", borderRadius: ".025rem", backgroundColor: "#EBF5FF"}} type="password" placeholder="Mot de passe" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicName">
                            <Form.Control style={{color: "#212529", borderBottom: "1px solid #084A83", borderRadius: ".025rem", backgroundColor: "#EBF5FF"}} type="password" placeholder="Confirmer le mot de passe" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicName">
                            <Form.Select style={{color: "#212529", borderBottom: "1px solid #084A83", borderRadius: ".025rem", backgroundColor: "#EBF5FF"}} aria-label="Default select example">
                                <option>Êtes-vous professionnel ou bien particulier ?</option>
                                <option value="1">Professionnel</option>
                                <option value="2">Particulier</option>
                            </Form.Select>
                        </Form.Group>
                        <Button variant="primary" type="submit" style={{background: "#084A83", borderRadius: "0px", marginTop: "10px", marginBottom: "10px", textAlign: "center"}}>
                            Se créer un compte
                        </Button>
                        <Form.Group className="mb-3" controlId="formBasicName">
                            <a href="#" style={{textDecoration: "none", color: "black"}}>Vous avez déjà un compte ?</a>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicName">
                            <a onClick={handleSelectSecond} className="btn btn-primary" style={{background: "transparent", border: "1px solid #084A83", borderRadius: "0px", marginTop: "10px", marginBottom: "10px", textAlign: "center", color: "black"}}>Se connecter à un compte existant</a>
                        </Form.Group>
                    </Form>
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                  <p className="display-6" style={{fontFamily: "'Roboto' sans-serif;", color: "black", fontWeight: "700", textAlign: "left", paddingBottom: "20px", paddingTop: "20px", fontSize: "22px"}}>Plus d'informations</p>
                  <p style={{textAlign: "left"}}>Veuillez confirmer dans le champ d’écriture que vous souhaitez supprimer votre compte ainsi que toutes les données liées à ce dernier en écrivant “Je confirme la suppresion de mon compte BetterEarth”. Attention cette action est irréversible.</p>
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Tab.Container>
        </Row>
      </Container>
      </>
  )
};

export default Login;
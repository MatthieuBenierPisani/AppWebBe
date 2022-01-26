import React, { useState, useRef, useEffect, useContext } from 'react'
import { useHistory } from 'react-router-dom'
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
import { userContext } from './userContext';
import Axios from 'axios';

import '../styles/login.css'

const Login = () => {
    
    const [currentTab, setCurrentTab] = useState("first");
    const history = useHistory();

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

    const {user, setUser} = useContext(userContext)

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmationPassword, setConfirmationPassword] = useState("");
    const [isProfessional, setIsProfessional] = useState("");
    const [professionalName, setProfessionalName] = useState("");
    const [userPhone, setUserPhone] = useState("");

    async function login() {
      let item = {email, password}
      Axios.post('http://91.121.71.10:3000/auth/login', {
        email: email,
        password: password
      })
      .then((response) => {
        const userEmail = response.data.user.email;
        const userToken = response.data.token;
        setUser(userEmail);
        localStorage.setItem('jwtToken', response.data.token);
        history.push("/accueil");
      }, (error) => {
        console.log(error);
      });
        /*
      let result = await fetch("http://91.121.71.10:3000/auth/login", {
        method:'POST',
        headers: {
          "Content-Type": "application/json",
          "Accept": 'application/json'
        },
        body: JSON.stringify(item)
      });
      result = await result.json();
      localStorage.setItem("user-info", JSON.stringify(result));
      setUser(JSON.stringify(result[1]));
      history.push("/accueil");
      */
    }

    async function loginPro() {
      let item = {email, password, confirmationPassword, isProfessional, professionalName, userPhone}
      let result = await fetch("http://91.121.71.10:3000/auth/register", {
        method:'POST',
        body: JSON.stringify(item),
        headers: {
          "Content-Type": "application/json",
          "Accept": 'application/json'
        }
      });
      result = await result.json();
      localStorage.setItem("user-info", JSON.stringify(result));
      localStorage.setItem('userPhone', userPhone);
      console.log("all response is " + JSON.stringify(result));
    }


    let mail = "matthieua@gmail.com"

  return (
      <>
      <Sidebar isOpen={isOpen} toggle={toggle}/>
      <Navbar toggle={toggle}/>

    <Container className="mt-5 mb-5 my-auto" align="center">
        <Row>
          <Tab.Container defaultActiveKey="first" activeKey={currentTab} onSelect={(key) => setCurrentTab(key)}>
            <Col md={3} style={{border: "1px solid #084A83", background: "white", height: "180px"}}>
              <Nav variant="pills" className="flex-column" align="left">
                <Nav.Item>
                  <Nav.Link eventKey="first">Se connecter</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Se créer un compte (PRO)</Nav.Link>
                  
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">Se créer un compte</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="fourth">Plus d'informations</Nav.Link>
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
                      <Form.Control style={{color: "#212529", borderBottom: "1px solid #084A83", borderRadius: ".025rem", backgroundColor: "#EBF5FF"}} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Email"/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicName">
                      <Form.Control style={{color: "#212529", borderBottom: "1px solid #084A83", borderRadius: ".025rem", backgroundColor: "#EBF5FF"}} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Mot de passe" />
                    </Form.Group>
                    <Button onClick={login}  style={{background: "#084A83", borderRadius: "0px", marginTop: "10px", marginBottom: "10px", textAlign: "center"}}>
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
                    <p className="display-6" style={{fontFamily: "'Roboto' sans-serif;", color: "#084A83", fontWeight: "700", textAlign: "center", paddingBottom: "20px", paddingTop: "20px", fontSize: "22px"}}>Se créer un compte Professionnel</p>
                    <p className="display-6" style={{fontFamily: "'Roboto' sans-serif;", color: "#084A83", fontWeight: "500", textAlign: "center", marginTop: "-40px", fontSize: "18px"}}>sur la plateforme BetterEarth</p>
                    <Form style={{textAlign: "center"}}>
                        <Form.Group className="mb-3" controlId="formBasicIdentifiantSignUp">
                            <Form.Control style={{color: "#212529", borderBottom: "1px solid #084A83", borderRadius: ".025rem", backgroundColor: "#EBF5FF"}} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Email"/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicNameSignUp">
                            <Form.Control style={{color: "#212529", borderBottom: "1px solid #084A83", borderRadius: ".025rem", backgroundColor: "#EBF5FF"}} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Mot de passe" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicNameSignUp">
                            <Form.Control style={{color: "#212529", borderBottom: "1px solid #084A83", borderRadius: ".025rem", backgroundColor: "#EBF5FF"}} onChange={(e) => setConfirmationPassword(e.target.value)} type="password" placeholder="Confirmer le mot de passe" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicIdentifiantPro">
                          <Form.Control style={{color: "#212529", borderBottom: "1px solid #084A83", borderRadius: ".025rem", backgroundColor: "#EBF5FF"}} onChange={(e) => setIsProfessional(e.target.value)} type="text" placeholder="Professionnel ?" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicIdentifiantName">
                            <Form.Control style={{color: "#212529", borderBottom: "1px solid #084A83", borderRadius: ".025rem", backgroundColor: "#EBF5FF"}} onChange={(e) => setProfessionalName(e.target.value)} type="name" placeholder="Nom professionnel"/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicIdentifiantUsername">
                            <Form.Control style={{color: "#212529", borderBottom: "1px solid #084A83", borderRadius: ".025rem", backgroundColor: "#EBF5FF"}} onChange={(e) => setUserPhone(e.target.value)} type="text" placeholder="Numéro de téléphone"/>
                        </Form.Group>
                        <Button onClick={loginPro} style={{background: "#084A83", borderRadius: "0px", marginTop: "10px", marginBottom: "10px", textAlign: "center"}}>
                            Se créer un compte
                        </Button>
                        <Form.Group className="mb-3" controlId="formBasicNameCompte">
                            <a href="#" style={{textDecoration: "none", color: "black"}}>Vous avez déjà un compte ?</a>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicNameLogin">
                            <a onClick={handleSelectSecond} className="btn btn-primary" style={{background: "transparent", border: "1px solid #084A83", borderRadius: "0px", marginTop: "10px", marginBottom: "10px", textAlign: "center", color: "black"}}>Se connecter à un compte existant</a>
                        </Form.Group>
                    </Form>
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                    <p className="display-6" style={{fontFamily: "'Roboto' sans-serif;", color: "#084A83", fontWeight: "700", textAlign: "center", paddingBottom: "20px", paddingTop: "20px", fontSize: "22px"}}>Se créer un compte particulier</p>
                    <p className="display-6" style={{fontFamily: "'Roboto' sans-serif;", color: "#084A83", fontWeight: "500", textAlign: "center", marginTop: "-40px", fontSize: "18px"}}>sur la plateforme BetterEarth</p>
                    <Form style={{textAlign: "center"}}>
                        <Form.Group className="mb-3" controlId="formBasicIdentifiantSignUpParticulier">
                            <Form.Control style={{color: "#212529", borderBottom: "1px solid #084A83", borderRadius: ".025rem", backgroundColor: "#EBF5FF"}} type="name" placeholder="Identifiant"/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicIdentifiantEmailParticulier">
                            <Form.Control style={{color: "#212529", borderBottom: "1px solid #084A83", borderRadius: ".025rem", backgroundColor: "#EBF5FF"}} type="email" placeholder="Email"/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPasswordParticulier">
                            <Form.Control style={{color: "#212529", borderBottom: "1px solid #084A83", borderRadius: ".025rem", backgroundColor: "#EBF5FF"}} type="password" placeholder="Mot de passe" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
                            <Form.Control style={{color: "#212529", borderBottom: "1px solid #084A83", borderRadius: ".025rem", backgroundColor: "#EBF5FF"}} type="password" placeholder="Confirmer le mot de passe" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicNameSelector">
                            <Form.Select style={{color: "#212529", borderBottom: "1px solid #084A83", borderRadius: ".025rem", backgroundColor: "#EBF5FF"}} aria-label="Default select example">
                                <option>Êtes-vous professionnel ou bien particulier ?</option>
                            </Form.Select>
                        </Form.Group>
                        <Button variant="primary" type="submit" style={{background: "#084A83", borderRadius: "0px", marginTop: "10px", marginBottom: "10px", textAlign: "center"}}>
                            Se créer un compte
                        </Button>
                        <Form.Group className="mb-3" controlId="formBasicNameAccountCreated">
                            <a href="#" style={{textDecoration: "none", color: "black"}}>Vous avez déjà un compte ?</a>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicNameLoginAccountCreated">
                            <a onClick={handleSelectSecond} className="btn btn-primary" style={{background: "transparent", border: "1px solid #084A83", borderRadius: "0px", marginTop: "10px", marginBottom: "10px", textAlign: "center", color: "black"}}>Se connecter à un compte existant</a>
                        </Form.Group>
                    </Form>
                </Tab.Pane>
                <Tab.Pane eventKey="fourth">
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
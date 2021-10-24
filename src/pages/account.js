import React, {useState} from 'react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Tab from 'react-bootstrap/Tab';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

import '../styles/account.css'

const Account = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
      setIsOpen(!isOpen)
  }

  return (
      <>
      <Sidebar isOpen={isOpen} toggle={toggle}/>
      <Navbar toggle={toggle}/>
      
      <Container className="mt-5 mb-5 my-auto" align="center">
        <Row>
          <Tab.Container defaultActiveKey="first">
            <Col md={3} style={{border: "1px solid #084A83", background: "white", height: "150px"}}>
              <Nav variant="pills" className="flex-column" align="left">
                <Nav.Item>
                  <Nav.Link eventKey="first">Informations personnelles</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Changer le mot de passe</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">Supprimer le compte</Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
            <Col className="account-col" md={{ span: 7, offset: 1 }} style={{border: "1px solid #084A83", background: "white"}}>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <p className="display-6" style={{fontFamily: "'Roboto' sans-serif;", color: "black", fontWeight: "700", textAlign: "left", paddingBottom: "20px", paddingTop: "20px", fontSize: "22px"}}>Informations personnelles</p>
                  <Form style={{textAlign: "left"}}>
                    <Form.Group className="mb-3" controlId="formBasicIdentifiant">
                      <Form.Label>Identifiant</Form.Label>
                      <Form.Control style={{color: "#212529", borderBottom: "1px solid #084A83", borderRadius: ".025rem", backgroundColor: "#EBF5FF"}} type="name" placeholder="Utilisateur 1234"/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicName">
                      <Form.Label>Prénom</Form.Label>
                      <Form.Control style={{color: "#212529", borderBottom: "1px solid #084A83", borderRadius: ".025rem", backgroundColor: "#EBF5FF"}} type="name" placeholder="Jean" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicName">
                      <Form.Label>Nom</Form.Label>
                      <Form.Control style={{color: "#212529", borderBottom: "1px solid #084A83", borderRadius: ".025rem", backgroundColor: "#EBF5FF"}} type="name" placeholder="Pierre" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label>Email</Form.Label>
                      <Form.Control style={{color: "#212529", borderBottom: "1px solid #084A83", borderRadius: ".025rem", backgroundColor: "#EBF5FF"}} type="email" placeholder="jeanpierre@gmail.com" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicName">
                      <Form.Label>Numéro de téléphone</Form.Label>
                      <Form.Control style={{color: "#212529", borderBottom: "1px solid #084A83", borderRadius: ".025rem", backgroundColor: "#EBF5FF"}} type="name" placeholder="01 02 03 04 05" />
                    </Form.Group>
                    <Form.Group controlId="formFile" className="mb-3">
                      <Form.Label>Photo de profil</Form.Label>
                      <Form.Control style={{color: "#212529", borderBottom: "1px solid #084A83", borderRadius: ".025rem", backgroundColor: "#EBF5FF"}} type="file" />
                    </Form.Group>
                    <Button variant="primary" type="submit" style={{background: "#084A83", borderRadius: "0px", marginTop: "10px", marginBottom: "10px"}}>
                      Enregistrer les modifications
                    </Button>
                  </Form>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <p className="display-6" style={{fontFamily: "'Roboto' sans-serif;", color: "black", fontWeight: "700", textAlign: "left", paddingBottom: "20px", paddingTop: "20px", fontSize: "22px"}}>Changer le mot de passe</p>
                  <p style={{textAlign: "left"}}>Nous vous recommandons de choisir un mot de passe fort en respectant ces critères :</p>
                  <ul style={{textAlign: "left"}}>
                    <li>Utilisez au moins 6 caractères</li>
                    <li>Utilisez un mix de majuscules et de minuscules</li>
                    <li>Utilisez au moins un chiffre</li>
                    <li>Utilisez au moins un caractère spécial comme  “.”, “&”, ou “*”</li>
                    <li>N’utilisez pas de mots de passes basiques comme “password”, “azerty”, ou “123456”</li>
                  </ul>
                  <Form style={{textAlign: "left"}}>
                      <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Mot de passe actuel</Form.Label>
                        <Form.Control style={{color: "#212529", borderBottom: "1px solid #084A83", borderRadius: ".025rem", backgroundColor: "#EBF5FF"}} type="password" placeholder="password" />
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="formBasicNewPassword">
                        <Form.Label>Nouveau mot de passe</Form.Label>
                        <Form.Control style={{color: "#212529", borderBottom: "1px solid #084A83", borderRadius: ".025rem", backgroundColor: "#EBF5FF"}} type="password" placeholder="NewPassword" />
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="formBasicConfirmNewPassword">
                        <Form.Label>Confirmer le nouveau mot de passe</Form.Label>
                        <Form.Control style={{color: "#212529", borderBottom: "1px solid #084A83", borderRadius: ".025rem", backgroundColor: "#EBF5FF"}} type="password" placeholder="NewPassword" />
                      </Form.Group>
                      <Button variant="primary" type="submit" style={{background: "#084A83", borderRadius: "0px", marginTop: "10px", marginBottom: "10px"}}>
                        Enregistrer les modifications
                      </Button>
                    </Form>
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                  <p className="display-6" style={{fontFamily: "'Roboto' sans-serif;", color: "black", fontWeight: "700", textAlign: "left", paddingBottom: "20px", paddingTop: "20px", fontSize: "22px"}}>Supprimer le compte</p>
                  <p style={{textAlign: "left"}}>Veuillez confirmer dans le champ d’écriture que vous souhaitez supprimer votre compte ainsi que toutes les données liées à ce dernier en écrivant “Je confirme la suppresion de mon compte BetterEarth”. Attention cette action est irréversible.</p>
                  <Form style={{textAlign: "left"}}>
                      <Form.Group className="mb-3" controlId="formBasicDelete">
                        <Form.Label>Confirmer la suppression</Form.Label>
                        <Form.Control style={{color: "#212529", borderBottom: "1px solid #084A83", borderRadius: ".025rem", backgroundColor: "#EBF5FF"}} type="text" placeholder="écrire la phrase" />
                      </Form.Group>
                      <Button variant="primary" type="submit" style={{background: "#084A83", borderRadius: "0px", marginTop: "10px", marginBottom: "10px"}}>
                        Supprimer le compte
                      </Button>
                    </Form>
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Tab.Container>
        </Row>
      </Container>
      </>
  )
};

export default Account;
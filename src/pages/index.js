import React, { useState, useRef } from 'react'
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import 'bootstrap/dist/css/bootstrap.min.css';
import Computer_home from '../Images/computer_home.png';
import emailjs from 'emailjs-com';

import '../styles/home.css'

const Home = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_p5dsmje', 'template_ni5006g', form.current, 'user_r7901vaye4rwk8o05Yz3C')
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

        <Container className="mt-5 mb-5">
            <Row style={{border: "1px solid #084A83", background: "white", paddingTop: "10px", paddingBottom: "10px"}}>
                <Col xs={6}>
                    <Image style={{height: "100%"}} src={Computer_home} fluid/>
                </Col>
                <Col xs={6} align="center" className="my-auto">
                    <h1 className="display-6" style={{fontFamily: "'Roboto' sans-serif;", color: "#084A83", fontWeight: "700"}}>Crééz votre point relais de dépôt de déchets pour particuliers.</h1>
                </Col>
            </Row>
        </Container>

        <Container className="mt-5 mb-5">
        <Row>
            <Col></Col>
            <Col xs={6} style={{border: "1px solid #084A83", background: "white"}} align="center" className="my-auto">
                <h2 className="display-6" style={{fontFamily: "'Roboto' sans-serif;", color: "#084A83", fontWeight: "700", paddingBottom: "20px", paddingTop: "20px"}}>Découvrez notre plateforme Click&Collect</h2>
            </Col>
            <Col></Col>
        </Row>
        <Row style={{border: "1px solid #084A83", background: "white", paddingBottom: "20px", paddingTop: "20px"}} align="center" className="my-auto">
            <Col>
                <h3 className="display-6" style={{fontFamily: "'Roboto' sans-serif;", color: "#084A83", fontWeight: "700", paddingBottom: "20px", paddingTop: "20px"}}>1</h3>
                <p className="text-md-center" style={{fontFamily: "'Roboto' sans-serif;", color: "black", fontWeight: "700", paddingBottom: "20px", paddingTop: "20px"}}>Je choisis le type de déchet que je souhaite récolter.</p>
            </Col>
            <Col>
                <h3 className="display-6" style={{fontFamily: "'Roboto' sans-serif;", color: "#084A83", fontWeight: "700", paddingBottom: "20px", paddingTop: "20px"}}>2</h3>
                <p className="text-md-center" style={{fontFamily: "'Roboto' sans-serif;", color: "black", fontWeight: "700", paddingBottom: "20px", paddingTop: "20px"}}>Je précise un lieu de dépôt pour ces déchets.</p>
            </Col>
            <Col>
                <h3 className="display-6" style={{fontFamily: "'Roboto' sans-serif;", color: "#084A83", fontWeight: "700", paddingBottom: "20px", paddingTop: "20px"}}>3</h3>
                <p className="text-md-center" style={{fontFamily: "'Roboto' sans-serif;", color: "black", fontWeight: "700", paddingBottom: "20px", paddingTop: "20px"}}>Je remplis les champs liés aux informations de mon compte.</p>
            </Col>
            <Col>
                <h3 className="display-6" style={{fontFamily: "'Roboto' sans-serif;", color: "#084A83", fontWeight: "700", paddingBottom: "20px", paddingTop: "20px"}}>4</h3>
                <p className="text-md-center" style={{fontFamily: "'Roboto' sans-serif;", color: "black", fontWeight: "700", paddingBottom: "20px", paddingTop: "20px"}}>J’attends les dépôts des particuliers.</p>
            </Col>
        </Row>
        </Container>

        <Container className="mt-5 mb-5">
            <h3 className="display-6" style={{fontFamily: "'Roboto' sans-serif;", color: "#084A83", fontWeight: "700", paddingBottom: "20px", paddingTop: "20px", textAlign: "justify"}}  align="center">.01 Quel(s) genre(s) de déchet(s) souhaitez-vous récolter ?</h3>
            <Row>
                <Col className="col-sm">
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                        <label class="form-check-label" for="flexCheckDefault">
                            Plastique
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                        <label class="form-check-label" for="flexCheckDefault">
                            Métal, alluminium
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                        <label class="form-check-label" for="flexCheckDefault">
                            Verre
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                        <label class="form-check-label" for="flexCheckDefault">
                            PVC
                        </label>
                    </div>
                </Col>
                <Col className="col-sm">
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                        <label class="form-check-label" for="flexCheckDefault">
                            Papier
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                        <label class="form-check-label" for="flexCheckDefault">
                            Liège
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                        <label class="form-check-label" for="flexCheckDefault">
                            Petits chimiques
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                        <label class="form-check-label" for="flexCheckDefault">
                            Déchets verts
                        </label>
                    </div>
                </Col>
                <Col className="col-sm">
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                        <label class="form-check-label" for="flexCheckDefault">
                            Fer
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                        <label class="form-check-label" for="flexCheckDefault">
                            Conserves
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                        <label class="form-check-label" for="flexCheckDefault">
                            Peaux d'aliments
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                        <label class="form-check-label" for="flexCheckDefault">
                            Carton
                        </label>
                    </div>
                </Col>
                <Col className="col-sm">
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                        <label class="form-check-label" for="flexCheckDefault">
                            Emballages
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                        <label class="form-check-label" for="flexCheckDefault">
                            Batteries, piles
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                        <label class="form-check-label" for="flexCheckDefault">
                            Béton, gravats
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                        <label class="form-check-label" for="flexCheckDefault">
                            Terre
                        </label>
                    </div>
                </Col>
                <Col className="col-sm">
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                        <label class="form-check-label" for="flexCheckDefault">
                            Briques
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                        <label class="form-check-label" for="flexCheckDefault">
                            Tuiles
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                        <label class="form-check-label" for="flexCheckDefault">
                            Goudron
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                        <label class="form-check-label" for="flexCheckDefault">
                            Peintures, solvants
                        </label>
                    </div>
                </Col>
            </Row>
        </Container>

        <Container className="mt-5 mb-5">
            <h3 className="display-6" style={{fontFamily: "'Roboto' sans-serif;", color: "#084A83", fontWeight: "700", paddingBottom: "20px", paddingTop: "20px", textAlign: "justify"}}  align="center">.02 Quelle est l'adresse de votre point relais ?</h3>
            <Form>
                <Form.Group className="mb-3" controlId="formGridAddress1">
                    <Form.Label >Adresse</Form.Label>
                    <Form.Control style={{border: "1px solid #084A83", borderRadius: "0px"}}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGridAddress2">
                    <Form.Label>Complément d'adresse</Form.Label>
                    <Form.Control style={{border: "1px solid #084A83", borderRadius: "0px"}}/>
                </Form.Group>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridCity">
                    <Form.Label>Ville</Form.Label>
                    <Form.Control style={{border: "1px solid #084A83", borderRadius: "0px"}}/>
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridState">
                    <Form.Label>Région</Form.Label>
                    <Form.Select defaultValue="Choisir..." style={{border: "1px solid #084A83", borderRadius: "0px"}}>
                        <option>PACA</option>
                        <option>...</option>
                    </Form.Select>
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridZip">
                    <Form.Label>Code postal</Form.Label>
                    <Form.Control style={{border: "1px solid #084A83", borderRadius: "0px"}} />
                    </Form.Group>
                </Row>
                </Form>
        </Container>

        <Container className="mt-5 mb-5">
            <h3 className="display-6" style={{fontFamily: "'Roboto' sans-serif;", color: "#084A83", fontWeight: "700", paddingBottom: "20px", paddingTop: "20px", textAlign: "justify"}}  align="center">.03 Informations complémentaires</h3>
            <Form>
                <Form.Group className="mb-3" controlId="entrepriseName">
                    <Form.Label>Nom de l'entreprise</Form.Label>
                    <Form.Control style={{border: "1px solid #084A83", borderRadius: "0px"}}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="proEmail">
                    <Form.Label>Email pro</Form.Label>
                    <Form.Control style={{border: "1px solid #084A83", borderRadius: "0px"}}/>
                </Form.Group> 
                <Form.Group className="mb-3" controlId="activitySector">
                    <Form.Label>Votre secteur d'activité</Form.Label>
                    <Form.Control style={{border: "1px solid #084A83", borderRadius: "0px"}}/>
                </Form.Group>
                <Button variant="primary" type="submit" className="mb-3" style={{background: "#084A83", borderRadius: "0px"}}>
                    Valider la création de mon point relais
                </Button>
                </Form>
        </Container>

        <Container className="mt-5 mb-5">
            <h3 className="display-6" style={{fontFamily: "'Roboto' sans-serif;", color: "#084A83", fontWeight: "700", paddingBottom: "20px", paddingTop: "20px", textAlign: "justify"}}  align="center">.04 Pour patienter...</h3>
            <p className="text-md-center" style={{fontFamily: "'Roboto' sans-serif;", color: "black", fontWeight: "700", paddingBottom: "20px", paddingTop: "20px"}}>Inscrivez-vous à notre newsletter afin de ne pas manquer <br/> nos offres partenaires ainsi que nos dernières mises-à-jour !</p>
            <Form ref={form} onSubmit={sendEmail} align="center">
                <Form.Group className="mb-3">
                    <input placeholder="Email" type="email" name="email" style={{border: "1px solid #084A83", borderRadius: "0px"}}/>
                </Form.Group>
                <Button variant="primary" type="submit" value="Send" className="mb-3" style={{background: "#084A83", borderRadius: "0px"}}>
                    Valider la création de mon point relais
                </Button>
            </Form>
        </Container>

        <div style={{paddingBottom: "100px"}}></div>
        </>
    )
}

export default Home

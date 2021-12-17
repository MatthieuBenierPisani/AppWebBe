import React, { useState, useRef } from 'react'
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import Email from '../Images/email.png';
import Adresse from '../Images/adresse.png';
import Tel from '../Images/telephone.png';
import Map from '../Images/map.png';
import emailjs from 'emailjs-com';

import '../styles/creationPointRelais.css'

const CreationPointRelais = () => {
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
        <h3 className="display-6" style={{fontFamily: "'Roboto' sans-serif;", color: "#084A83", fontWeight: "700"}}>Création d'un point relais</h3>
        <p className="text-md-center" style={{fontFamily: "'Roboto' sans-serif;", color: "black", fontWeight: "700", paddingBottom: "20px", paddingTop: "20px"}}>Vous êtes professionnel et vous souhaitez créer un point relais ?<br/>Remplissez le formulaire ci-dessous !</p>
        <Form ref={form} onSubmit={sendEmail}>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Control type="name" placeholder="Nom du point relais" name="name"/>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Control type="email" placeholder="Email" name="email"/>
            </Form.Group>
          </Row>

          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Control as="textarea" rows={3} placeholder="Votre message" name="message"/>
          </Form.Group>

          <Button Button variant="primary" type="submit" value="Send" className="mb-3" style={{background: "#084A83", borderRadius: "0px"}}>
            Envoyer
          </Button>
        </Form>
      </Container>

      <div style={{paddingBottom: "100px"}}></div>
      </>
  )
};

export default CreationPointRelais;
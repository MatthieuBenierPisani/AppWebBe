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
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import 'bootstrap/dist/css/bootstrap.min.css';
import Email from '../Images/email.png';
import Adresse from '../Images/adresse.png';
import Tel from '../Images/telephone.png';
import Map from '../Images/map.png';
import emailjs from 'emailjs-com';

import '../styles/contact.css'

const Contact = () => {
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
      
      <Image style={{height: "100%"}} src={Map} fluid/>
      <Container className="mt-5 mb-5 my-auto" align="center">
      </Container>

      <div class="container px-4">
        <div class="row gx-5">
          <div class="col">
            <div class="p-3" style={{border: "1px solid #084A83", background: "white"}}>
              <img src={Email} class="img-responsive center-block d-block mx-auto" alt="Email" style={{paddingBottom: "14px", height: "62px"}}/>  
              <h4 style={{fontFamily: "'Roboto' sans-serif;", color: "black", fontWeight: "700", textAlign: "center", paddingBottom: "4px"}}>Email</h4>
              <p style={{fontFamily: "'Roboto' sans-serif;", color: "black", fontWeight: "500", textAlign: "center"}}>contact@betterearth.com      </p>
            </div>
          </div>
          <div class="col">
            <div class="p-3" style={{border: "1px solid #084A83", background: "white"}}>
              <img src={Adresse} class="img-responsive center-block d-block mx-auto" alt="Adresse" style={{paddingBottom: "14px", height: "62px"}}/>  
              <h4 style={{fontFamily: "'Roboto' sans-serif;", color: "black", fontWeight: "700", textAlign: "center", paddingBottom: "4px"}}>Adresse</h4>
              <p style={{fontFamily: "'Roboto' sans-serif;", color: "black", fontWeight: "500", textAlign: "center"}}>13 Rue Saint François de Paule</p>
            </div>
          </div>
          <div class="col">
            <div class="p-3" style={{border: "1px solid #084A83", background: "white"}}>
              <img src={Tel} class="img-responsive center-block d-block mx-auto" alt="Téléphone" style={{paddingBottom: "14px", height: "62px"}}/>  
              <h4 style={{fontFamily: "'Roboto' sans-serif;", color: "black", fontWeight: "700", textAlign: "center", paddingBottom: "4px"}}>Téléphone</h4>
              <p style={{fontFamily: "'Roboto' sans-serif;", color: "black", fontWeight: "500", textAlign: "center"}}>04 93 37 63 54</p>
            </div>
          </div>
        </div>
      </div>

      <div style={{paddingBottom: "100px"}}></div>
      </>
  )
};

export default Contact;
import React, {useState} from 'react'
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';
import 'bootstrap/dist/css/bootstrap.min.css';
import Computer_home from '../Images/computer_home.png';

const Home = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

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

        <div style={{paddingBottom: "300px"}}></div>
        </>
    )
}

export default Home

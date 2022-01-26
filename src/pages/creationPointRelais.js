import React, { useState, useRef } from 'react'
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import { connect } from "react-redux";
import { useHistory } from "react-router";
import { toast } from "react-toastify";
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';


import '../styles/creationPointRelais.css'

const CreationPointRelais = ({ contacts, addContact }) => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const [type, setType] = useState("");
  const [status, setStatus] = useState("");
  const [address, setAddress] = useState("");
  const [coordinates, setCoordinates] = useState("");
  const [rubbishType, setRubbishType] = useState("");

  const history = useHistory();

  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
      setIsOpen(!isOpen)
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !phone || !type || !status || !address || !coordinates || !rubbishType) {
      return toast.warning("Tous les champs sont obligatoires");
    }

    const data = {
      id: contacts.length > 0 ? contacts[contacts.length - 1].id + 1 : 0,
      name,
      phone,
      type,
      status,
      address,
      coordinates,
      rubbishType
    };

    addContact(data);
    //toast.success("Contact added successfully!!");
    history.push("/tous-les-points-relais");
  };

  return (
      <>
      <Sidebar isOpen={isOpen} toggle={toggle}/>
      <Navbar toggle={toggle}/>
      
      <Container className="mt-5 mb-5 my-auto" align="center">
      <div className="container-fluid">
      <h1 className="text-center text-dark py-3 display-2">Ajouter un point relais</h1>
      <div className="row">
        <div className="col-md-6 p-5 mx-auto shadow">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                className="form-control"
                type="text"
                placeholder="Nom du point relais"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="form-group">
              <input
                className="form-control"
                type="number"
                placeholder="Téléhone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            <div className="form-group">
              <input
                className="form-control"
                type="text"
                placeholder="Type de point relais"
                value={type}
                onChange={(e) => setType(e.target.value)}
              />
            </div>
            <div className="form-group">
              <input
                className="form-control"
                type="text"
                placeholder="Status"
                value={status}
                onChange={(e) => setStatus(e.target.value)}
              />
            </div>
            <div className="form-group">
              <input
                className="form-control"
                type="text"
                placeholder="Adresse"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>
            <div className="form-group">
              <input
                className="form-control"
                type="number"
                placeholder="Coordonnées"
                value={coordinates}
                onChange={(e) => setCoordinates(e.target.value)}
              />
            </div>
            <div className="form-group">
              <input
                className="form-control"
                type="text"
                placeholder="Type de déchets"
                value={rubbishType}
                onChange={(e) => setRubbishType(e.target.value)}
              />
            </div>
            <div className="form-group">
              <input
                className="btn btn-block btn-dark"
                type="submit"
                value="Ajouter le point relais"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
      </Container>

      <div style={{paddingBottom: "100px"}}></div>
      </>
  )
};

const mapStateToProps = (state) => ({
  contacts: state,
});
const mapDispatchToProps = (dispatch) => ({
  addContact: (data) => {
    dispatch({ type: "ADD_CONTACT", payload: data });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(CreationPointRelais);

import React, { useEffect, useState } from 'react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import Container from 'react-bootstrap/Container';
import { connect } from "react-redux";
import { useHistory, useParams } from "react-router";
import { toast } from "react-toastify";
import 'bootstrap/dist/css/bootstrap.min.css';

import '../styles/editPointRelais.css'

const EditPointRelais = ({ contacts, updateContact }) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
      setIsOpen(!isOpen)
  }

  const { id } = useParams();
  const history = useHistory();
  const currentContact = contacts.find(
    (contact) => contact.id === parseInt(id)
  );

  useEffect(() => {
    setName(currentContact.name);
    setEmail(currentContact.email);
    setPhone(currentContact.phone);
    setType(currentContact.type);
    setStatus(currentContact.status);
    setAddress(currentContact.address);
    setCoordinates(currentContact.coordinates);
    setRubbishType(currentContact.rubbishType);
  }, [currentContact]);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [type, setType] = useState("");
  const [status, setStatus] = useState("");
  const [address, setAddress] = useState("");
  const [coordinates, setCoordinates] = useState("");
  const [rubbishType, setRubbishType] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      id: currentContact.id,
      name,
      phone,
      type,
      status,
      address,
      coordinates,
      rubbishType
    };

    updateContact(data);
    //toast.success("Contact updated successfully!!");
    history.push("/tous-les-points-relais");
  };

  return (
      <>
      <Sidebar isOpen={isOpen} toggle={toggle}/>
      <Navbar toggle={toggle}/>
      
      <Container className="mt-5 mb-5 my-auto" align="center">
      <div className="container">
      <div className="row d-flex flex-column">
        <button
          className="btn btn-dark ml-auto my-5"
          onClick={() => history.push("/tous-les-points-relais")}
        >
          Retour
        </button>
        <div className="col-md-6 mx-auto shadow p-5">
          {currentContact ? (
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  className="form-control"
                  value={name}
                  placeholder={"Name"}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="form-group">
                <input
                  className="form-control"
                  value={phone}
                  placeholder={"Phone"}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
              <div className="form-group">
              <input
                className="form-control"
                type="text"
                placeholder={"type"}
                value={type}
                onChange={(e) => setType(e.target.value)}
              />
            </div>
            <div className="form-group">
              <input
                className="form-control"
                type="text"
                placeholder={"status"}
                value={status}
                onChange={(e) => setStatus(e.target.value)}
              />
            </div>
            <div className="form-group">
              <input
                className="form-control"
                type="text"
                placeholder={"address"}
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>
            <div className="form-group">
              <input
                className="form-control"
                type="number"
                placeholder={"coordinates"}
                value={coordinates}
                onChange={(e) => setCoordinates(e.target.value)}
              />
            </div>
            <div className="form-group">
              <input
                className="form-control"
                type="text"
                placeholder={"Type de déchets"}
                value={rubbishType}
                onChange={(e) => setRubbishType(e.target.value)}
              />
            </div>
              <div className="form-group d-flex align-items-center justify-content-between my-2">
                <button type="submit" className="btn btn-primary">
                  Update Contact
                </button>
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={() => history.push("/tous-les-points-relais")}
                >
                  cancel
                </button>
              </div>
            </form>
          ) : (
            <h1 className="text-center">No Contact Found</h1>
          )}
        </div>
      </div>
    </div>
      </Container>
      </>
  )
};

const mapStateToProps = (state) => ({
  contacts: state,
});
const mapDispatchToProps = (dispatch) => ({
  updateContact: (data) => {
    dispatch({ type: "UPDATE_CONTACT", payload: data });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(EditPointRelais);
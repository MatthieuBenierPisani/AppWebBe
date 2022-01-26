import React, { useState, useRef } from 'react'
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';

const AllPointRelais = ({ contacts, deleteContact }) => {

    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

  return (
    <>
    <Sidebar isOpen={isOpen} toggle={toggle}/>
    <Navbar toggle={toggle}/>

    <div className="container">
      <div className="row d-flex flex-column">
        <Link to="/creation-point-relais" className="btn btn-outline-dark my-5 ml-auto ">
          Ajouter un point relais
        </Link>
        <div className="col-md-10 mx-auto my-4">
          <table className="table table-hover">
            <thead className="table-header bg-dark text-white">
              <tr>
                <th scope="col">Id</th>
                <th scope="col">Nom</th>
                <th scope="col">Tel</th>
                <th scope="col">Type</th>
                <th scope="col">Status</th>
                <th scope="col">Type de déchets</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              {contacts.length > 0 ? (
                contacts.map((contact, id) => (
                  <tr key={id}>
                    <td>{id + 1}</td>
                    <td>{contact.name}</td>
                    <td>{contact.phone}</td>
                    <td>{contact.type}</td>
                    <td>{contact.status}</td>
                    <td>{contact.rubbishType}</td>
                    <td>
                      <Link
                        to={`/edition-point-relais/${contact.id}`}
                        className="btn btn-sm btn-primary mr-1"
                      >
                        Éditer le point relais
                      </Link>
                      <button
                        type="button"
                        onClick={() => deleteContact(contact.id)}
                        className="btn btn-sm btn-danger"
                      >
                        Supprimer le point relais
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <th>Aucun point relais</th>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  contacts: state,
});

const mapDispatchToProps = (dispatch) => ({
  deleteContact: (id) => {
    dispatch({ type: "DELETE_CONTACT", payload: id });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(AllPointRelais);

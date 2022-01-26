import React, { useState, useMemo } from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { ToastContainer } from "react-toastify";
import Home from './pages';
import FAQ from './pages/FAQ';
import Contact from './pages/contact';
import Account from './pages/account';
import Mentions from './pages/mentions';
import Login from './pages/login';
import CreationPointRelais from './pages/creationPointRelais';
import EditPointRelais from './pages/editPointRelais';
import AllPointRelais from './pages/allPointRelais';
import { FooterContainer } from './Containers/footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import { userContext } from './pages/userContext';

function App() {

  const [user, setUser] = useState()
  const [token, setToken] = useState()
  
  const value = useMemo(() => ({user, setUser}), [user, setUser])
  const tokenValue = useMemo(() => ({token, setToken}), [token, setToken])


  return (
    <Router>
      <ToastContainer />
      <Switch>
        <userContext.Provider value={value}>
          <Route path="/accueil" exact component={Home} />
          <Route path="/faq" exact component={FAQ} />
          <Route path="/contact" exact component={Contact} />
          <Route path="/mon-compte" exact component={Account} />
          <Route path="/mentions-legales" exact component={Mentions} />
          <Route path="/login" exact component={Login} />
          <Route path="/creation-point-relais" exact component={CreationPointRelais}/>
          <Route path="/edition-point-relais/:id" exact component={EditPointRelais}/>
          <Route path="/tous-les-points-relais" exact component={AllPointRelais}/>
        </userContext.Provider>
      </Switch>
      <FooterContainer />
    </Router>
  );
}

export default App;
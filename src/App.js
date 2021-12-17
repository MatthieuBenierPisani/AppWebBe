import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './pages';
import FAQ from './pages/FAQ';
import Contact from './pages/contact';
import Account from './pages/account';
import Mentions from './pages/mentions';
import Login from './pages/login';
import CreationPointRelais from './pages/creationPointRelais';
import Sidebar from './components/Sidebar';
import { FooterContainer } from './Containers/footer';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/accueil" exact component={Home} />
        <Route path="/faq" exact component={FAQ} />
        <Route path="/contact" exact component={Contact} />
        <Route path="/mon-compte" exact component={Account} />
        <Route path="/mentions-legales" exact component={Mentions} />
        <Route path="/login" exact component={Login} />
        <Route path="/creation-point-relais" exact component={CreationPointRelais}/>
      </Switch>
      <FooterContainer />
    </Router>
  );
}

export default App;

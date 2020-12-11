import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './style/style.css';
import MobileError from './components/MobileError';
import Header from './components/Header';
import Nav from './components/Nav';
import Home from './components/Home';
import Login from './components/modals/Login';
import Contact from './components/modals/Contact';
import Calculator from './components/webapps/Calculator/App';
import CurrencyConverter from './components/webapps/CurrencyConverter/App';
import Sudoku from './components/webapps/Sudoku/App';

function App() {
  const [loginModal, setLoginModal] = useState(false);
  const [contactModal, setContactModal] = useState(false);

  const toggleLoginModal = () => {
    setLoginModal(!loginModal);
  };

  const toggleContactModal = () => {
    setContactModal(!contactModal);
  };

  return (
    <>
      <MobileError />
      <div className='Reactivated'>
        <Router>
          <Header toggleLoginModal={toggleLoginModal} toggleContactModal={toggleContactModal} />
          <Nav />
          <main>
            <Switch>
              <Route exact path='/' component={() => <Home toggleLoginModal={toggleLoginModal} modalTriggers={[loginModal, contactModal]} />} />
              <Route exact path='/calculator' component={() => <Calculator />} />
              <Route exact path='/currency-converter' component={() => <CurrencyConverter />} />
              <Route exact path='/sudoku' component={() => <Sudoku />} />
            </Switch>
          </main>
          {loginModal && <Login toggleLoginModal={toggleLoginModal} />}
          {contactModal && <Contact toggleContactModal={toggleContactModal} />}
        </Router>
      </div>
    </>
  );
}

export default App;

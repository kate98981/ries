import React, { Component, Fragment } from 'react';
import { Route } from 'react-router';
import { Home } from './components/Home';
import Objects from './components/Objects';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Orders from './components/Orders';
import Client from './components/Client';
import ListHouse from './components/ListHouse';
import Footer from './components/Footer';
import Potrebnost from './components/Potrebnost';
import Doc from './components/Doc';
import { BrowserRouter, Router } from "react-router-dom";
import './components/style.css';

//<Route exact path='/' component={Home} /> 
export default class App extends Component {
  displayName = App.name

  render() {
      return (
          <BrowserRouter>
              <Fragment>
                  <Header />
                  <Navbar />
                  <br></br>
                  <Route path="/orders" component={Orders} />
                  <Route path="/objects" component={Objects} />
                  <Route path="/client" component={Sidebar} />
                  <Route path="/client/dann" component={Client} />
                  <Route path="/client/potrebnost" component={Potrebnost} />
                  <Route path="/client/doc" component={Doc} />
                  
                  <Footer />
              </Fragment>
          </BrowserRouter>
    );
  }
}

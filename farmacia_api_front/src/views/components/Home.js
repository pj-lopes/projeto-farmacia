import React, { Component } from 'react';
import Body from './Body';
import Header from '../shared/Header';
import { withRouter } from 'react-router-dom';
import Footer from '../shared/Footer';

class Home extends Component {
  render() {
    return (
          <div>
          <Header></Header>
          <Body></Body>
          <Footer></Footer>
        </div>
       )
    }
  }
 export default withRouter(Home);

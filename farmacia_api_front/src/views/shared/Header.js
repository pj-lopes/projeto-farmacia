import React, { Component, useState } from 'react';
import logo from './img/logo192.png'
import { NavLink, withRouter } from 'react-router-dom';
import { authConfig } from '../../auth/config';
import axios from 'axios';



class Header extends Component {


//  geraToken(){
//    authConfig.auth().onAuthStateChanged(function(user){
//      if(user!=null){
//        user.getIdToken().then((idToken) => {
//          idToken = user.getIdToken();
//          axios.defaults.headers.Authorization = `Bearer ${idToken}`
//          
//        }).catch(function (error){
//          console.log(error);
//        })
//      }
//    });
//    }
//
  render() {
    return (<header className="p-3 bg-light text-white border-bottom" onLoad={this.geraToken}>
              <div className="container">
                <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                  <a href="/Home" className="d-flex align-items-center mb-2 mb-lg-0 text-dark text-decoration-none">
                  <img src={logo} alt="Logo" width="50" height="50"></img>
                  </a>
                  <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                    <li><NavLink className="nav-link px-2 link-dark" activeClassName="active" exact to="/Home">Home</NavLink></li>
                    <li><NavLink className="nav-link px-2 link-dark" activeClassName="active" exact to="/medicamentos">Medicamentos</NavLink></li>
                    <li><NavLink className="nav-link px-2 link-dark" activeClassName="active" exact to="/categorias">Categorias</NavLink></li>
                    <li><NavLink className="nav-link px-2 link-dark" activeClassName="active" exact to="/usuarios">Usuarios</NavLink></li>
                  </ul>
                  <div className="text-end">
                    <button type="button" className="btn btn-danger me-2" onClick={()=> authConfig.auth().signOut()}>Sair</button>
                  </div>
                </div>
              </div>
            </header>)
    }
  }

  export default withRouter(Header);

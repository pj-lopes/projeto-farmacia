import Header from '../shared/Header';
import Footer from '../shared/Footer';
import React, { Component } from 'react';
import axios from "axios";
import { withRouter } from 'react-router-dom';


class Usuarios extends Component {
  state = {
    usuarios: []
  }
  componentDidMount(){
    axios.get('https://localhost:44300/Usuarios').then(response => {
      const usuarios = response.data
      this.setState({ usuarios });
    })
  }
  render(){
      return (
        <div>
          <Header></Header>
            <main className="bd-masthead mb-3">
              <div className="px-4 py-5 mt-1 mb-5 text-center">
                  <h1 className="display-5 fw-bold">Lista de Usuarios Cadastrados</h1>
                  <div className="col-lg-6 mx-auto">
                    <hr/>
                  <div className="container justify-content-center ">
                    <table className="table table-striped table-hover table-bordered">
                    <caption>Lista de Usuarios</caption>
                      <thead className="table-light">
                        <tr>
                          <th>Id</th>
                          <th>Usuarios</th>
                          <th>Permissão</th>
                          <th>Email</th>
                          <th></th>
                        </tr>
                      </thead>
                      <tbody>
                        {
                          this.state.usuarios.map( usuario => (
                            <tr key={usuario.id}>
                              <td>{usuario.id}</td>
                              <td>{usuario.nome}</td>
                              <td>{usuario.permissao}</td>
                              <td>{usuario.email}</td>
                            </tr>
                          ))
                        }
                      </tbody>
                    </table>
                  </div>
                  </div>
              </div>
              <div className="px-5 py-5 mt-2 mb-5 text-center"></div>
            </main>
          <Footer></Footer>
        </div>
      );
  }
}

export default withRouter(Usuarios);

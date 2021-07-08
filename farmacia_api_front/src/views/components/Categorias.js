import Header from '../shared/Header';
import Footer from '../shared/Footer';
import React, { Component } from 'react';
import axios from "axios";
import { withRouter, Link } from 'react-router-dom';
import { authConfig } from '../../auth/config';


class Categorias extends Component {
  state = {
    categorias: []
  }

  componentDidMount(){
    this.listar();
  }

  listar = () => {
    axios.get('https://localhost:44300/Categorias').then(response => {
      const categorias = response.data
      this.setState({ categorias });
    })
  }

  excluir = (categoria) =>{
    if(window.confirm("Deseja excluir a categoria?")){
      axios.delete(`https://localhost:44300/Categorias/${categoria.id}`).then(response => {
        this.listar();
      })
    }
  }

  render(){
      return (
        <div bd-masthead mb-3>
          <Header></Header>
            <main className="bd-masthead">
              <div className="px-4 py-5 mt-1 mb-5 text-center">
                  <h1 className="display-5 fw-bold">Lista de Categorias</h1>
                  <div className="col-lg-6 mx-auto">
                    <hr/>
                    <div className="container justify-content-center ">
                      <table className="table table-striped table-hover table-bordered">
                      <caption>Lista de categorias</caption>
                        <thead className="table-light">
                          <tr>
                            <th>Id</th>
                            <th>Categoria</th>
                            <th colSpan="2">Ações</th>
                          </tr>
                        </thead>
                        <tbody>
                          {
                            this.state.categorias.map( categoria => (
                              <tr key={categoria.id}>
                                <td>{categoria.id}</td>
                                <td>{categoria.nome}</td>
                                <td>
                                  <Link className="btn btn-primary" to={`/categorias/${categoria.id}`}>Editar</Link>
                                </td>
                                <td>
                                  <button className="btn btn-danger" onClick={() => {this.excluir(categoria)}}>Remover</button>
                                </td>
                              </tr>
                            ))
                          }
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div className="col-lg-3 mx-auto">
                    <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                      <Link className="btn btn-success btn-lg px-4 gap-3" to={`/categorias/cadastro`}>Cadastrar</Link>
                    </div>
                  </div>
              </div>
              <div className="px-5 py-5 mt-1 mb-5 text-center"></div>
            </main>
          <Footer></Footer>
        </div>
      );
  }
}

export default withRouter(Categorias);

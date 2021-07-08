import Header from '../shared/Header';
import Footer from '../shared/Footer';
import React, { Component } from 'react';
import axios from "axios";
import { withRouter, Link } from 'react-router-dom';

class Medicamentos extends Component {
  constructor(){
    super();
    this.state = {
      medicamentos: [],
    }
  }

  componentDidMount(){
    this.listar();
  }

  listar = () => {
    axios.get('https://localhost:44300/Medicamentos').then(response => {
      const medicamentos = response.data
      this.setState({ medicamentos });
    })
  }

  excluir = (medicamento) =>{
    if(window.confirm("Deseja excluir o Medicamento?")){
      axios.delete(`https://localhost:44300/Categorias/${medicamento.id}`).then(response => {
        this.listar();
      })
    }
  }
  
  render(){
      return (
        <div>
          <Header></Header>
            <main className="bd-masthead">
              <div className="px-4 py-5 mt-1 mb-5 text-center">
                  <h1 className="display-5 fw-bold">Lista de Medicamentos</h1>
                  <div className="col-lg-6 mx-auto">
                    <hr/>
                  <div className="container justify-content-center ">
                      <table className="table table-striped table-hover  table-bordered">
                      <caption>Lista de Medicamentos</caption>
                        <thead className="table-light">
                          <tr>
                            <th>Nome</th>
                            <th>Qtd</th>
                            <th>Categoria</th>
                            <th>Preço Unitário</th>
                            <th>Preço Total</th>
                            <th colSpan="2">Ações</th>
                          </tr>
                        </thead>
                        <tbody>
                          {
                            this.state.medicamentos.map( medicamento =>(
                              <tr key={medicamento.id}>
                                <td>{medicamento.nome}</td>
                                <td>{medicamento.qtd}</td>
                                <td>{medicamento.categoria}</td>
                                <td>{medicamento.preco}</td>
                                <td>{medicamento.total}</td>
                                <td><Link className="btn btn-primary btn-sm" to={`/medicamentos/${medicamento.id}`}>Editar</Link></td>
                                <td><button className="btn btn-danger btn-sm" onClick={() => {this.excluir(medicamento)}}>Remover</button></td>
                              </tr>
                            ))
                          }

                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div className="col-lg-3 mx-auto">
                    <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                      <Link className="btn btn-success btn-lg px-4 gap-3" to={`/medicamentos/cadastro`}>Cadastrar</Link>
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

export default withRouter(Medicamentos);

import Header from '../shared/Header';
import Footer from '../shared/Footer';
import React, { Component } from 'react';
import axios from "axios";
import { withRouter } from 'react-router-dom';


class FormCategorias extends Component {
  state = {
    categoria: {
      id: 0,
      nome: "",
    }
  }

  onChange = (e) => {
    let categoria = this.state.categoria
    categoria[e.target.name] = e.target.value
    this.setState({ categoria: categoria })
  }
  
  salvar = () => {
    if (this.state.categoria.id > 0) {
      axios.put(`https://localhost:44300/Categorias/${this.state.categoria.id}`, this.state.categoria).then(response => {
        this.props.history.push("/categorias")
      })
    }
    else{
      axios.post(`https://localhost:44300/Categorias/`, this.state.categoria).then(response => {
        this.props.history.push("/categorias")
        })
    }
  }

  componentDidMount(){
    let id = this.props.match.params.id
    if(id){
      axios.get(`https://localhost:44300/Categorias/${id}`).then(response => {
        const categoria = response.data
        this.setState({categoria});
      })
    }
  }

  render(){
      return (
        <div>
          <Header></Header>
            <main className="bd-masthead mb-3">
              <div className="px-2 py-2 mt-1 mb-5 text-center">
                  <h1 className="display-5 fw-bold">Categorias</h1>
                  <hr/>
              </div>
              <div className="container justify-content-center ">
                <h5 className="fw-lighter">Cadastre as Categorias dos medicamentos!</h5>
                <form className="row ms-5 gx-3 gy-2 align-items-center text-center mx-auto p-0">
                      <div className="form-floating col-sm-8 ">
                        <input type="text" className="form-control" id="nome" name="nome" value={this.state.categoria.nome} onChange={this.onChange} placeholder="Digite o nome da Categoria"/>
                        <label htmlFor="nome">Digite o nome da Categoria</label>
                      </div>
                      <div className="col-auto">
                        <button type="button" className="btn btn-success" onClick={this.salvar}>Salvar</button>
                      </div>
                    </form>
              </div>
              <div className="px-5 py-5 mt-1 mb-5 text-center"></div>
            </main>
          <Footer></Footer>
        </div>
      );
  }
}

export default withRouter(FormCategorias);

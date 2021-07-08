import Header from '../shared/Header';
import Footer from '../shared/Footer';
import React, { Component } from 'react';
import axios from "axios";
import { withRouter } from 'react-router-dom';


class FormMedicamentos extends Component {
  constructor(){
    super();
    this.state = {
      medicamento: {
        id: 0,
        nome: "",
        qtd: 0,
        preco: 0,
        categoria: "",
        total: 0,
      },
      categorias: [],
    }
  }
  
  onChange = (e) => {
    let medicamento = this.state.medicamento
    medicamento[e.target.name] = e.target.value
    this.setState({ medicamento: medicamento })
  }
  
  salvar = () => {
    debugger
    if (this.state.medicamento.id > 0) {
      axios.put(`https://localhost:44300/Medicamentos/${this.state.medicamento.id}`, this.state.medicamento).then(response => {
        this.props.history.push("/medicamentos")
      })
    }
    else{
      axios.post("https://localhost:44300/Medicamentos", this.state.medicamento ).then(response => {
        this.props.history.push("/medicamentos")
        })
    }
  }

  componentDidMount() {
    axios.get('https://localhost:44300/Categorias').then(response => {
      const categorias = response.data
      this.setState({ categorias });
    })

    let id = this.props.match.params.id
    if (id) {
      axios.get(`https://localhost:44300/Medicamentos/${id}`).then(response => {
        const medicamento = response.data
        this.setState({ medicamento });
      })
    }
  }


  render() {
    return (
      <div>
        <Header></Header>
        <main className="bd-masthead mb-3">
          <div className="px-2 py-2 mt-1 mb-5 text-center">
            <h1 className="display-5 fw-bold">Medicamentos</h1>
            <hr />
          </div>
          <div className="container justify-content-center ">
            <h5 className="fw-lighter">Cadastre os medicamentos!</h5>
            <form className="row ms-5 gx-3 gy-2 align-items-center text-center mx-auto p-0 was-validated">
              
              <div className="form-group form-floating col-sm-3">
                <input type="text" className="form-control" id="nome" name="nome" value={this.state.medicamento.nome} onChange={this.onChange} placeholder="Nome do Medicamento" required />
                <div className="invalid-feedback">O nome não pode ter menos que 5 caracteres</div>
                <label htmlFor="nome">Nome</label>
              </div>

              <div className="form-group form-floating col-sm-2 ">

                <select className="form-select" id="categoria" name="categoria" value={this.state.medicamento.categoria} onChange={this.onChange} required>
                  <option defaultValue disabled value="">Escolha...</option>
                  {
                    this.state.categorias.map( categorias => (
                    <option key={categorias.id} >{categorias.nome}</option>
                  ))
                  }
                  </select>
                  <label htmlFor="categorias">Categoria</label>
                  <div className="invalid-feedback">Selecione uma Categoria</div>
              </div>

              <div className="form-group form-floating col-sm-2">
              <input type="number" className="form-control" id="qtd" name="qtd" value={this.state.medicamento.qtd} onChange={this.onChange} step="1" min="1" required/>
                <label htmlFor="qtd">Quantidade</label>
                <div className="invalid-feedback">Quantidade não pode ser 0</div>
              </div>
              <div className="form-group form-floating col-sm-2">
                <input type="number" className="form-control" id="preco" name="preco" value={this.state.medicamento.preco} onChange={this.onChange} step="0.01" min="0.01" required/>
                <label htmlFor="preco">Preço R$</label>
                <div className="invalid-feedback">Preço não pode ser 0</div>
              </div>
              <div className="form-group form-floating col-sm-1">
                <input type="number" className="form-control" id="total" name="total" value={this.state.medicamento.total = parseFloat(this.state.medicamento.qtd*this.state.medicamento.preco)} disabled />
                <label htmlFor="preco">Total R$</label>
              </div>
              <div className="col-auto">
                <button type="button" className="btn btn-primary" onClick={this.salvar}>Salvar</button>
              </div>
            </form>
          </div>
          <div className="px-5 py-5 mt-1 mb-5 text-center"></div>
        </main>
        <Footer></Footer>
      </div>
    )
  }
}

export default withRouter(FormMedicamentos);

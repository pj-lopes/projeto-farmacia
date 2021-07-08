import React, { useState, useEffect, isValidElement } from 'react';
import axios from "axios";
import { withRouter } from 'react-router-dom';
import { authConfig } from '../../auth/config';
import InpustMask from 'react-input-mask'


const initialUser = {
    id: 0,
    nome: "",
    cpf: "",
    dataNacimento: "",
    email: "",
    senha: "",
    permissao: ""
}


const FormUsuario = () => {
  
  const [user, setUser] = useState(initialUser) 

  const [permissoes, setPermissoes]=useState([]) 

  useEffect(() => {
    axios
        .get('https://localhost:44300/Permissoes')
        .then(resp => {
          console.log(resp.data)
          setPermissoes(resp.data)
        }).catch(error => {
          console.error();
        })
  }, [])

  function onChange (ev) {
    const {name, value} = ev.target
    setUser({...user, [name]: value});
  }
  
  function salvar(){
    
    if (user.id > 0) {
      axios.put(`https://localhost:44300/Usuarios/${user.id}`, user).then(() => {
        window.alert("Usuário Editado com sucesso")
        this.props.history.push("/usuarios")
      })
    }
    else{
      axios.post("https://localhost:44300/Usuarios", user ).then().catch(()=> {
        if(user.nome && user.cpf && user.dataNacimento && user.email && user.senha && user.permissao != null){
          window.alert("Usuário Cadastrado com sucesso")
          }else window.alert("Erro ao cadastrar, revise os dados")
          })
      }
  }

  function signUp () {
    var email = user.email;
    var senha = user.senha;
    
      authConfig.auth().createUserWithEmailAndPassword(email, senha).then().catch(window.alert("Erro durante o cadastro no firebase, revise os dados informados/Usuario ja Existe!!"));
  }

  function handleClick(){
    salvar();
    signUp();
  }
  

      return (
          <main className="container col-xl-10 col-xxl-8 px-4 py-5">
              <div className="row align-items-center g-lg-5 py-5">
                <div className="col-lg-7 text-center text-lg-start">
                  <h1 className="display-4 fw-bold lh-1 mb-3">Seja Bem-Vindo</h1>
                  <p className="col-lg-10 fs-4">Cadastre-se para usar o sistema da farmacia ou logue-se :)</p>
                </div>
                <div className="col-md-10 mx-auto col-lg-5">
                  <form className="p-4 p-md-5 border rounded-3 bg-light was-validated">
                    
                    <div className="form-floating mb-3">
                      <input 
                            type="text" 
                            className="form-control has-validation" 
                            id="nome" 
                            name="nome" 
                            value={user.nome} 
                            onChange={onChange} 
                            placeholder="Digite seu nome completo....." 
                            required/>
                       <div className="invalid-feedback">Campo requerido</div>
                      <label htmlFor="floatingInput">Digite seu nome: </label>
                    </div> 

                    <div className="form-floating mb-3">
                      <InpustMask unmask="true" mask="999.999.999-99" type="text" className="form-control" id="cpf" name="cpf" value={user.cpf} onChange={onChange} required />
                      <label htmlFor="floatingInput">Digite seu CPF</label>
                      <div className="invalid-feedback">Campo requerido</div>
                    </div>

                    <div className="form-floating mb-3">
                      <input type="date" className="form-control" id="dataNacimento" name="dataNacimento" value={user.dataNacimento} onChange={onChange} required />
                      <label htmlFor="floatingInput">Digite sua Data de Nascimento: </label>
                      <div className="invalid-feedback">Campo requerido</div>
                    </div>

                    <div className="form-floating mb-3">
                      <input type="email" className="form-control" id="email" name="email" value={user.email} onChange={onChange} placeholder="email@example.com" required />
                      <label htmlFor="floatingInput">Digite seu e-mail</label>
                      <div className="invalid-feedback">Campo requerido</div>
                    </div>

                    <div className="form-floating mb-3">
                      <input type="password" className="form-control" id="senha" name="senha" value={user.senha} onChange={onChange} placeholder="Password" required/>
                      <label htmlFor="floatingPassword">Digite uma senha</label>
                      <div className="invalid-feedback">Campo requerido</div>
                    </div>

                    <div className="form-group form-floating mb-3 ">
                      <select className="form-select" id="permissao" name="permissao" value={user.permissao} onChange={onChange} required>
                        <option disabled>Escolha...</option>
                        {
                          permissoes.map(permissoes =>
                            <option key={permissoes.id} >{permissoes.nome}</option>
                          )
                        }
                      </select>
                    <label htmlFor="categorias">Permissao Usuario</label>
                    <div className="invalid-feedback">Selecione uma Permissão</div>

                  </div>
                    <button className="w-100 btn btn-lg btn-primary" onClick={handleClick} type="button">Cadastrar</button>
                    <hr className="my-4" />
                    <small className="text-muted">Ou <a href="/Login">Clique Aqui</a> para logar</small>
                  </form>
                </div>
              </div>
            </main>
      );
  }

export default withRouter(FormUsuario);

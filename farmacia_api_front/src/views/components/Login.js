import React, { Component, useCallback, useContext } from 'react';
import '../shared/css/Singin.css'
import logo from '../shared/img/logo192.png'
import { authConfig } from '../../auth/config';
import { withRouter, Link, Redirect } from 'react-router-dom';
import { AuthContext } from '../../auth/AuthContext';

export const  Login = withRouter (({history})=> {
  
  const signIn = useCallback (
    async (ev) => {
      ev.preventDefault();

      var email = document.getElementById("email");
      var senha = document.getElementById("senha");
      try {
        await authConfig.auth().signInWithEmailAndPassword(email.value, senha.value);
        history.push("/home")
      }  catch(error){
        console.error("error");
      }
    }  
  )
  
  try {
  const {usuario} = useContext(AuthContext);
    if(usuario!=null){
   <Redirect to="/home"/>;
  }}catch(error){console.error(error);}

  return (
          <div className="px-5 py-5 bg-light">
          <link href="https://getbootstrap.com/docs/5.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossOrigin="anonymous"></link>
          <link href="/docs/5.0/assets/css/docs.css" rel="stylesheet"></link>
          <main className="form-signin">
            <form onSubmit={signIn}>
                <img src={logo} alt="Logo" width="72" height="57"></img>
                  <h1 className="h3 mb-3 fw-normal">Logue-se no Sistema</h1>
                  <div className="form-floating">
                    <input type="email" className="form-control" name="email" id="email" placeholder="Digite seu E-mail"></input>
                      <label htmlFor="floatingInput">Endereço de E-mail</label>
                  </div>
                    <div className="form-floating">
                      <input type="password" className="form-control" name="senha" id="senha" placeholder="Digite sua senha"></input>
                        <label htmlFor="floatingPassword">Senha</label>
                    </div>
                        <button className="w-100 btn btn-lg btn-primary" type="submit">Entrar</button>
                        <span> Não possui uma senha? <a href="/">Cadastre-se!</a></span>
                        <p className="mt-5 mb-3 text-muted">© 2021</p>
                        
            </form>
          </main>
        </div>
  )
});

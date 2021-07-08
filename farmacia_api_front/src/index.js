import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/docs.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Medicamentos from './views/components/Medicamentos';
import Usuarios from './views/components/Usuarios';
import Categorias from './views/components/Categorias';
import FormMedicamentos from './views/components/FormMedicamentos';
import FormCategorias from './views/components/FormCategorias';
import Home from './views/components/Home';
import FormUsuario from './views/components/FormUsuario';
import './views/components/Login';
import { AuthProvider }  from './auth/AuthContext'
import { PrivateRouter } from './auth/PrivateRouter'
import { Login } from './views/components/Login';



ReactDOM.render(
  <AuthProvider>
    <BrowserRouter>
      <Switch>
        <Route path="/" exact={true} component={FormUsuario}/>
        <Route path="/login" component={Login}/>
        <PrivateRouter exact path="/Home" component={Home}/>
        <PrivateRouter exact path="/medicamentos" component={Medicamentos}/>
        <PrivateRouter exact path="/medicamentos/cadastro" component={FormMedicamentos}/>
        <PrivateRouter exact path="/medicamentos/:id" component={FormMedicamentos}/>
        <PrivateRouter exact path="/categorias"  component={Categorias}/>
        <PrivateRouter exact path="/categorias/cadastro" component={FormCategorias}/>
        <PrivateRouter exact path="/categorias/:id" component={FormCategorias}/>
        <PrivateRouter exact path="/usuarios"  component={Usuarios}/>
        <PrivateRouter exact path="/usuarios/:id" component={Usuarios}/>
      </Switch>
    </BrowserRouter>
  </AuthProvider>,

  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

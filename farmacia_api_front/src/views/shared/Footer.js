import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';


class Footer extends Component {
  render() {
    return <footer className="text-muted py-5 bg-light">
              <div className="container">
                <p className="float-end mb-1">
                  <a href="#">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-up" viewBox="0 0 16 16">
                       <path fillRule="evenodd" d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"/>
                    </svg>
                  </a>
                </p>
                <p className="mb-1">Desenvolvido por Paulo Lopes © Todos os direitos reservados</p>
                <p className="mb-0">Novo Aqui? <a href="https://www.linkedin.com/in/paulo-lopes-642517169/" target="blank">Visite meu Linkedin!</a> ou meu repositório no <a href="https://github.com/pj-lopes" target="blank">GitHub</a>.</p>
              </div>
            </footer>
    }
  }

  export default withRouter(Footer);

import React from 'react';
import { Link } from 'react-router-dom'

function BarraNavegacao (props) {
  return (
    <header>
      <nav className="navbar navbar-expand-sm navbar-dark corebiz-barra-navegacao">
        <div className="container">
          
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup"       aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Alterna navegação">
            <span className="navbar-toggler-icon"></span>
          </button>
            
          <span className="navbar-brand mb-0 h1"><i className="fas fa-bolt mr-2"></i>corebiz store</span>

          <div className="collapse navbar-collapse d-none" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <Link to="/" className="nav-item nav-link active" onClick={handleClick}>Home</Link>
              <Link to="/" className="nav-item nav-link" onClick={handleClick}>Sobre</Link>
              <Link to="/" className="nav-item nav-link" onClick={handleClick}>Contato</Link>
            </div>
          </div>
              
          <form className="form-inline" onSubmit = {handleSubmit} >
            <button className="btn btn-success my-2 my-sm-0" type="submit">
              <i className="fas fa-shopping-cart mr-2" />
                R$ 0,00
            </button>
          </form>
          <div className="d-xs-none d-sm-none d-md-none d-lg-none d-xl-none">
            <div className="collapse navbar-collapse " id="navbarNavAltMarkup">
              <div className="navbar-nav">
                <Link to="/" className="nav-item nav-link active" onClick={handleClick}>Home</Link>
                <Link to="/" className="nav-item nav-link" onClick={handleClick}>Sobre</Link>
                <Link to="/" className="nav-item nav-link" onClick={handleClick}>Contato</Link>
              </div>
            </div>
          </div>  
        </div>  
      </nav>
    </header>
    )
  }

  function handleClick (event){
      let elemento = document.getElementsByClassName("nav-item")
        for(let i= 0; i < elemento.length; i++){
          if(elemento[i] === event.target){
            elemento[i].classList.add("active")
          }else{
            elemento[i].classList.remove("active")
          }
        }
  }

  function handleSubmit(event) {
      event.preventDefault();
  }

  export default BarraNavegacao;
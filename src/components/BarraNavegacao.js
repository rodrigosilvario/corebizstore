import React from 'react';
import { Link } from 'react-router-dom'

function BarraNavegacao (props) {
  return (
    <header>
      <nav className="navbar navbar-expand-sm navbar-dark corebiz-barra-navegacao py-4">
        <div className="container"> 

          <button className="navbar-toggler mx-auto" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Alterna navegação">
          <span className="navbar-toggler-icon"></span>
          </button>

          <span className="navbar-brand mx-auto">
            <img className="img-fluid mr-2" width="20px" src=".\img\bolt.svg" alt="logo"/>
              Shock Store
          </span>
              
          <div className="collapse navbar-collapse order-2 order-sm-1 ml-sm-5" id="navbarNavAltMarkup">
            <div className="navbar-nav ">
              <Link to="/" className="nav-item nav-link active" onClick={handleClick}>PERFUMARIA</Link>
              <Link to="/" className="nav-item nav-link" onClick={handleClick}>MAQUIAGEM</Link>
              <Link to="/" className="nav-item nav-link" onClick={handleClick}>CABELOS</Link>
              <Link to="/" className="nav-item nav-link" onClick={handleClick}>INFANTIL</Link>
            </div>
          </div>

          <form className="form-inline mx-auto order-1 order-sm-2" onSubmit = {handleSubmit} >
            <button className="btn btn-success my-2" type="submit">
              <img className="img-fluid mr-2" width="20px" src=".\img\shopping-cart-solid.svg" alt="logo"/>
                R$ 0,00
            </button>
          </form>
            
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
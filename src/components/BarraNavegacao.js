import React from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';



function BarraNavegacao (props) {
  return (
    <header>
      <nav className="navbar navbar-expand-sm navbar-dark corebiz-barra-navegacao py-4">
        <div className="container"> 

          <button className="navbar-toggler mx-auto" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Alterna navegação">
          <span className="navbar-toggler-icon"></span>
          </button>
          <Link to="/">
            <span className="navbar-brand mx-auto">
              <img className="img-fluid mr-2" width="20px" src=".\img\bolt.svg" alt="logo"/>
                Shock Store
            </span>
          </Link>
              
          <div className="collapse navbar-collapse order-2 order-sm-1 ml-sm-5" id="navbarNavAltMarkup">
            <div className="navbar-nav ">
              <Link to="/" className="nav-item nav-link">PERFUMARIA</Link>
              <Link to="/" className="nav-item nav-link">MAQUIAGEM</Link>
              <Link to="/" className="nav-item nav-link">CABELOS</Link>
              <Link to="/" className="nav-item nav-link">INFANTIL</Link>
            </div>
          </div>

          <form className="form-inline mx-auto order-1 order-sm-2" onSubmit = {handleSubmit} >
            <Link to="/carrinho">
              <button className="btn btn-success my-2" type="submit">
                <img className="img-fluid mr-2" width="20px" src=".\img\shopping-cart-solid.svg" alt="logo"/>
                  {props.valorTotal.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}
              </button>
            </Link>
          </form>
            
        </div>
      </nav>
    </header>
    )
  }

  
  function handleSubmit(event) {
      event.preventDefault();
  }

  const mapStateToProps = store => ({
    valorTotal: store.CarrinhoReducer.valorTotal
  })
  
  export default connect(mapStateToProps) (BarraNavegacao);
import React, { Component } from 'react'
import { connect } from 'react-redux';
import { removerProduto } from '../redux/modules/carrinho/actions/CarrinhoActions';
import TituloPagina from "../components/TituloPagina"
import ProdutoLista from "../components/ProdutoLista"

class CarrinhoContainer extends Component {

    render() {
      return (
          <div className="container">
            <div className="row">
              <div className="col-12 py-4">
                <TituloPagina titulo={"Carrinho de Compras"}/>
              </div>
            </div>
            <ProdutoLista listaProdutos={this.props.produtos} callback={this.props.removerProduto}/>
          </div>
      )
    }
  }
  
  

  const mapStateToProps = store => ({
    produtos: store.CarrinhoReducer.produtos
  })
  
  export default connect(mapStateToProps, {removerProduto}) (CarrinhoContainer);
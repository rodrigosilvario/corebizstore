import React, { Component } from 'react'
import { connect } from 'react-redux';
import { adicionarProduto } from '../redux/modules/carrinho/actions/CarrinhoActions';
import { ProdutoService } from "../services/produto/ProdutoService";
import TituloPagina from "../components/TituloPagina"
import ProdutoLista from "../components/ProdutoLista"


class ProdutoContainer extends Component {

  state = {
    produtos: []
  };
  
  async UNSAFE_componentWillMount() {
    this.setState({ 
      produtos: await ProdutoService.getProdutos()
    });
  }

    render() {
      return (
          <div className="container">
            <div className="row">
              <div className="col-12 py-4">
                <TituloPagina titulo={"Vitrine de Produtos"}/>
              </div>
            </div>
            <ProdutoLista listaProdutos={this.state.produtos} callback={this.props.adicionarProduto}/>
          </div>
      )
    }
  }
  
 export default connect(undefined, {adicionarProduto}) (ProdutoContainer);
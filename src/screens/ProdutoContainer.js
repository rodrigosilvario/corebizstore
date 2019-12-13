import React, { Component } from 'react'
import { ProdutoService } from "../services/produto/ProdutoService";
import TituloPagina from "../components/TituloPagina"
import ProdutoLista from "../components/ProdutoLista"

class ProdutoContainer extends Component {

  state = {
    produtos: []
  };
  
  async componentWillMount() {
    this.setState({ 
      produtos: await ProdutoService.getProdutos()
    });
  }

    render() {
      return (
          <div className="container">
            <div className="row">
              <div className="col-12 py-4">
                <TituloPagina />
              </div>
            </div>
            <ProdutoLista listaProdutos={this.state.produtos} />
          </div>
      )
    }
  }
  
  export default ProdutoContainer
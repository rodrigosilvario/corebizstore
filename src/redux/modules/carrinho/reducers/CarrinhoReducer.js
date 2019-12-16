import {ADICIONAR_PRODUTO,REMOVER_PRODUTO} from "../actions/CarrinhoActions";

const estadoInicial = {
  produtos: [],
  valorTotal: 0.00
}

export const CarrinhoReducer = (state = estadoInicial, action) => {
  switch (action.type) {
    case ADICIONAR_PRODUTO:
      return {
        ...state,
        produtos: state.produtos.concat(action.produto),
        valorTotal: state.valorTotal + action.produto.Value
  
      }

      case REMOVER_PRODUTO:
      return {
        ...state,
        produtos: state.produtos.filter((p,index) => index !==  action.chave),
        valorTotal: ((state.valorTotal - action.produto.Value < 0.01) ? 0.00 : state.valorTotal - action.produto.Value )
      }
    default:
      return state;
  }
}
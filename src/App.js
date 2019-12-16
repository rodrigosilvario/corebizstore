import React from 'react';
import {Route, Switch} from 'react-router-dom';
import BarraNavegacao from './components/BarraNavegacao'
import ProdutoContainer from './screens/ProdutoContainer'
import CarrinhoContainer from "./screens/CarrinhoContainer"

function App() {
  return (
    <div>
      <BarraNavegacao></BarraNavegacao>
      <Switch>
        <Route exact path="/"component={ProdutoContainer} />
        <Route path="/carrinho"component={CarrinhoContainer} />
      </Switch>
    </div>
  );
}

export default App;

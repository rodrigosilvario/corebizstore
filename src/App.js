import React from 'react';
import {Route, Switch} from 'react-router-dom';
import BarraNavegacao from './components/BarraNavegacao'
import ProdutoContainer from './screens/ProdutoContainer'

function App() {
  return (
    <div>
      <BarraNavegacao></BarraNavegacao>
      <Switch>
        <Route exact path="/"component={ProdutoContainer} />
      </Switch>
    </div>
  );
}

export default App;

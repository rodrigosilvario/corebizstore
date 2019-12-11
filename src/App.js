import React from 'react';
import {Route, Switch} from 'react-router-dom';
import BarraNavegacao from './components/BarraNavegacao'
import Vitrine from './screens/Vitrine'

function App() {
  return (
    <div>
      <BarraNavegacao></BarraNavegacao>
      <Switch>
        <Route exact path="/"component={Vitrine} />
      </Switch>
    </div>
  );
}

export default App;

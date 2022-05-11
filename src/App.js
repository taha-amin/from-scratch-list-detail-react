import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PokemonPage from './PokemonPage';
import PokemonDetail from './PokemonDetail';

export default function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <PokemonPage />
          </Route>
          <Route exact path="/pokemons/:id">
            <PokemonDetail />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

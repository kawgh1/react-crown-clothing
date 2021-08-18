import React from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import { Switch, Route } from 'react-router-dom'



const HatsPage = () => (
  <div>
    <h1>HATS PAGE</h1>
  </div>
)

const MensPage = () => (
  <div>
    <h1>MENS PAGE</h1>
  </div>
)

const WomensPage = () => (
  <div>
    <h1>WOMENS PAGE</h1>
  </div>
)

const JacketsPage = () => (
  <div>
    <h1>JACKETS PAGE</h1>
  </div>
)

const ShoesPage = () => (
  <div>
    <h1>SHOES PAGE</h1>
  </div>
)

function App() {
  return (
    <div >
      {/* <HomePage /> */}

      <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/shop/hats' component={HatsPage} />
          <Route exact path='/shop/mens' component={MensPage} />
          <Route exact path='/shop/womens' component={WomensPage} />
          <Route exact path='/shop/jackets' component={JacketsPage} />
          <Route exact path='/shop/shoes' component={ShoesPage} />
      </Switch>
      

    </div>
  );
}

export default App;

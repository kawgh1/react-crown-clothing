import React from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import { Switch, Route } from 'react-router-dom'



// PAGES
import ShopPage from './pages/shop/shop.component'
import SigninSignupPage from './pages/signin-signup/signin-signup.component';

// HEADER
import Header from './components/header/header.component'

function App() {
  return (
    <div className='container'>
      {/* <HomePage /> */}

      <Header />
      <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/shop' component={ShopPage} />
          <Route exact path='/signin' component={SigninSignupPage} />
          
      </Switch>
      

    </div>
  );
}

export default App;

import React from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import { Switch, Route } from 'react-router-dom'



// PAGES
import ShopPage from './pages/shop/shop.component'
import SigninSignupPage from './pages/signin-signup/signin-signup.component';

// HEADER
import Header from './components/header/header.component'

// FIREBASE
import { auth, createUserProfileDocument } from './firebase/firebase.utils'
// when a user signs in, we want to store that in **STATE** so that our app can know that across all pages and components
// because we want to access our current 'user-object' throughout our app

class App extends React.Component {

  constructor() {
    super();

    this.state = {
      currentUser: null
    };
  }

  unsubscribeFromAuth = null

  componentDidMount() {
    // this.unsubscribeFromAuth = auth.onAuthStateChanged(async user => {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      // this.setState({ currentUser: user});
      // createUserProfileDocument(user);
      // if userAuth exist in firestore database
      if (userAuth) {
          const userRef = await createUserProfileDocument(userAuth);

          // get snapshot of user
          userRef.onSnapshot(snapShot => {

            // console.log(snapShot.data());
              // set this App's current user using userRef's properties from firestore
              this.setState({
                
                  currentUser: {
                      id: snapShot.id,
                      ...snapShot.data()
                  }
                  // since setState() is an asynchronous call, 
                  // have to pass console.log as a second function as a parameter in setState
                  // running console.log immediately after an async call 
                  // will return null because the async call is not finished yet
              }
              //, () => {
                // console.log(this.state);
              // }
              );


          });
      }

      // if user signs out, it will reset userAuth to null, thus our App's current user will be bull
      this.setState({ currentUser: userAuth });
      // console.log(user);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {

    return (
      <div className='container'>
        {/* <HomePage /> */}
  
        
  
        <Header currentUser={this.state.currentUser} />
        <Switch>
            <Route exact path='/' component={HomePage} />
            <Route exact path='/shop' component={ShopPage} />
            <Route exact path='/signin' component={SigninSignupPage} />
            
        </Switch>
        
  
      </div>
    );
  }
  
}

export default App;

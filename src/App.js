import React from 'react';
import './App.css';

import {Route,Switch} from 'react-router-dom';

import {Homepage} from './pages/HomePage/homepage.component.jsx';
import ShopPage from './pages/ShopPage/ShopPage.component.jsx'
import Header from './components/Header/header.component.jsx'
import SigninAndSignupPage from './pages/sign-in_and_sign-out/sign-in_sign-out.component.jsx'
import {auth} from './firebase/firebase.utils'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentUser : null
    }
  }
  
  unsubscribeFromAuth = null;

  componentDidMount(){
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({
        currentUser:user
      })
      console.log(user)
    })
  }
  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }
  render(){
    return (
      <div>
        <Header currentUser={this.state.currentUser}/>
        <Switch>
          <Route exact path='/' component ={Homepage}/>
          <Route path='/shop' component ={ShopPage} />
          <Route path='/signin' component={SigninAndSignupPage} />
        </Switch>
      </div>
    );
  }
}

export default App;

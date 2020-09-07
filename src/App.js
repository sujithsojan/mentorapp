import React, {Component} from 'react';
import {Router, Route, browserHistory, Redirect} from "react-router";
import './App.css';
import Login from './Components/Login';
import Home from './Components/Home';
import Share from   './Components/Share';
import Publicshare from   './Components/PublicShare';

class App extends Component{
  render(){
    return(
      <Router history={browserHistory}>   
            <Redirect from="/" to="/Login" />
            <Route> 
        <Route exact path="/" component={Login}/>
        <Route exact path="/Login" component={Login} />
        <Route exact path={"/Home/:email/:name"} component={Home} />
        <Route exact path={"/Share/:shareId"} component={Share} />
        <Route exact path={"/Tarento/Mentor-Wish/:shareId"} component={Publicshare} />
        </Route>
      </Router>
    
    
    );
  }
}

export default App;

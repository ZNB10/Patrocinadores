import React, {Component} from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './componentes/Pages/Public/Home/Home';
import Login from './componentes/Pages/Public/Login/Login';
import Functions from './componentes/Pages/Public/Functions/Functions';
import Price from './componentes/Pages/Public/Price/Price';
import Testimonies from './componentes/Pages/Public/Testimonies/Testimonies';
import Blog from './componentes/Pages/Public/Blog/Blog';

class App extends Component {
  constructor(){
    super();
    this.state = {
      user:{},
      isLogged:false,
      loadingBackend:false
    };

    this.login = this.login.bind(this);
  }
  login(e, user){
    const { email, id , roles} = user;
    this.setState({
        ...this.state,
        isLogged:true,
        loadingBackend:false,
        user:user
      });
    alert(JSON.stringify(this.state));
  }
  render(){
    return (
      <Router>
        <div className="App">
          <Route component={Home} path="/" exact />
          <Route component={Functions} path="/functions" exact/>
          <Route component={Price} path="/price" exact/>
          <Route component={Testimonies} path="/testimonies" exact/>
          <Route component={Blog} path="/blog" exact/>
          <Route component={Login} path="/login" exact/>
        </div>
      </Router>
    );
  }
}

export default App;

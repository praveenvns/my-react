import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Nav from './Nav';
import About from './About';
import Shop from './Shop';
import ItemDetails from './ItemDetails';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';




function App() {
  return (
<Router>    
<div className="App">
<Nav/>
<Switch>
<Route path="/" exact component={Home} />
<Route path="/about" component={About} />
<Route path="/shop" exact component={Shop} />
<Route path="/shop/:id" component={ItemDetails} />
</Switch>
</div>
</Router>
  );
}

const Home = () =>(
<div>
  <h3>Home Page</h3>
</div>
);

export default App;

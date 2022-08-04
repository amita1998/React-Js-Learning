import React from "react";
import { Route,Link,Switch} from "react-router-dom";
import About from './About';
import Contact from './Contact';
import Error from './Error';
import Menu from '/.Menu';
import User from './User';
import Search from './Search';
import Services from './Services';
import './index.css';


const App = () => {

return(
  <>
    <Menu/>
    <Switch>
      <Route exact path="/" component={About}/>
      <Route exact path="/contact" component={Contact} />
      <Route exact path="/service" component={Services} />
      <Route exact path="/user" component={User} />
      <Route exact path="/user/:name" component={User} />
      <Route exact path="/search" component={Search} />
      <Route component={Error} />
    </Switch>


  </>
);
};
import React, {useState} from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";

import Header from "./components/Header";
import Home from "./components/Home";
import Form from "./components/Form";

const App = () => {
  const {pizzaOrder, setPizzaOrder} = useState({
    name: "",
    size: "",
    toppings: [],
    specialInstructions: "",
  })
  return (
    <>
     <Header/>
     <Router>
       <Route exact path="/" component={Home}/>
       <Route path="/pizza" component={Form}/>
     </Router>
    </>
  );
};
export default App;

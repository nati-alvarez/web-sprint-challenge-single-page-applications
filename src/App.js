import React, {useState} from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";

import Header from "./components/Header";
import Home from "./components/Home";
import Form from "./components/Form";

const App = () => {
  const [pizzaOrder, setPizzaOrder] = useState({
    name: "",
    size: "",
    pepperoni: false,
    ham: false,
    olives: false,
    onion: false,
    specialInstructions: "",
  })
  const onInputChange = e =>{
    let value = e.target.value;
    if(e.target.type === "checkbox") value = e.target.checked;
    setPizzaOrder({
      ...pizzaOrder,
      [e.target.name]: value
    })
  }
  console.log(pizzaOrder)
  return (
    <>
      <Header/>
      <Router>
        <Route exact path="/" component={Home}/>
        <Route path="/pizza">
          <Form pizzaOrder={pizzaOrder} onInputChange={onInputChange}/>
        </Route>
     </Router>
    </>
  );
};
export default App;

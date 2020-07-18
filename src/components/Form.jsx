import React from "react";
import * as Yup from "yup"

import "../styles/form.css";



export default function Form(props){
    return (
        <div className="build-pizza">
            <form onSubmit={props.submit}>
                <img width="100%" src="https://images7.alphacoders.com/690/690886.jpg"/>
                <h1>Build Your Pizza</h1>
                <section>
                    <div className="form-heading">
                        <h2>Enter Your Name</h2>
                        <small>required</small>
                    </div>
                    <label htmlFor="name">Name: </label>
                    <input value={props.pizzaOrder.name} onChange={props.onInputChange} id="name" name="name" type="text"/>
                </section>
                <section>
                    <div className="form-heading">
                        <h2>Select a Size</h2>
                        <small>required</small>
                    </div>
                    <label htmlFor="size">Size: </label>
                    <select onChange={props.onInputChange} id="size" name="size">
                        <option defaultValue value="small">Small</option>
                        <option value="medium">Medium</option>
                        <option value="large">Large</option>
                    </select>
                </section>
                <section>
                    <div className="form-heading">
                        <h2>Toppings</h2>
                        <small>choose up to 4</small>
                    </div>
                    <label htmlFor="pepperoni">
                       Pepperoni <input checked={props.pizzaOrder.pepperoni} onChange={props.onInputChange} name="pepperoni" id="pepperoni" type="checkbox"/>
                    </label>
                    <label htmlFor="olives">
                       Olives <input checked={props.pizzaOrder.olives} onChange={props.onInputChange} name="olives"  id="olives" type="checkbox"/>
                    </label>
                    <label htmlFor="ham">
                       Ham <input checked={props.pizzaOrder.ham} onChange={props.onInputChange}name="ham"  id="ham" type="checkbox"/>
                    </label>
                    <label htmlFor="onion">
                       Onion <input checked={props.pizzaOrder.onion} onChange={props.onInputChange} name="onion"  id="onion" type="checkbox"/>
                    </label>
                </section>
                <section>
                    <div className="form-heading">
                        <h2>Anything Else?</h2>
                    </div>
                    <label htmlFor="specialInstructions">Special instructions: </label>
                    <input value={props.pizzaOrder.specialInstructions} onChange={props.onInputChange} name="specialInstructions" id="specialInstructions" type="text"/>
                </section>
                <div className="errors">
                    {props.errors.name}
                </div>
                <button>Add to Order</button>
            </form>
        </div>
    )
}
import React, { useState } from "react";
import "./styles.css";
import Home from "./components/Home";
// Import Data
import data from "./data"
// Import React Router dom (Route, Link, Switch)
import {Link, Route, Switch } from "react-router-dom"

// Import components like Item, ItemsList for the Nav
import ItemsList from "./components/Itemslist"
import Item from "./components/Item"

export default function App() {
 
// Create state for products and set it to data
 
const [products, setProducts] = useState(data)
  
  return (
    <div className="App">
      <nav>
        <h1 className="store-header">Gabi Products</h1>
        <div className="nav-links">
          {/* Here goes the Link to shop and home*/}

          <Link to="/">Home</Link>
          <Link to="/product-list">Shop</Link>
        </div>
      </nav>
      {/* Declare routes here, use Switch and order matters */}
     <Switch>
        {/* Switch checks ONLY the FIRST route */}

        <Route path="/product-list/:productID">
          <Item productList={products} />
        </Route>

        <Route path="/product-list">
          <ItemsList productList={products} />
        </Route>

        <Route path="/" component={Home} />

      </Switch>
      
    </div>
  );
}


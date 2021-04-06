import React from "react";
// Import "useHistory" to create link to shop
import {useHistory} from "react-router-dom"

function Home(props) {

// Declrate history and set it to useHistory()
let history = useHistory();

// Create arrow function (routeToShop) with (event) param and inside should have history.push(/item-list)

const routeToShop = (event) => {
  history.push("/product-list")
};

  return (
    <div className="home-wrapper">
      <img
        className="home-image"
        src="https://source.unsplash.com/F6-U5fGAOik"
        alt=""
      />

      {/* Add onClick with routeToShop function */}
      <button className="md-button shop-button" onClick={routeToShop}>
        Shop now!
      </button>
    </div>
  );
}

export default Home;
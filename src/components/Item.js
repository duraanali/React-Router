import React from "react";

// Import useParams from react-router-dom
import { useParams } from "react-router-dom"
// we will be importing and adding a lot of items to this component
function Item(props) {

    // Declare 'params' and set it to useParams()
    let params = useParams()

    // Find item using find() method, compare item.id to params.productID
    // params.itemID is the URL we create in App.js

    const shopItem = props.productList.find(function(product) {
      return product.id === Number(params.productID)
    })

  return (
    <div className="item-wrapper">
      <div className="item-header">
        <div className="image-wrapper">
          <img src={shopItem.imageUrl} alt={shopItem.name} />
        </div>
        <div className="item-title-wrapper">
          <h2>{shopItem.name}</h2>
          <h4>${shopItem.price}</h4>
          <p className="item-description">{shopItem.description}</p>
        </div> 
      </div>
    </div>
  );
}
export default Item;

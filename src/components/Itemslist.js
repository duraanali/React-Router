import React from "react";
// import Link from react router dom
import { Link } from "react-router-dom"

// what do we need to add to this component so we can map through items?

function ItemsList(props) {
   const { productList } = props

  return (
    <div className="items-list-wrapper">
      {productList.map((item) => (
        <div className="item-card" key={item.id}>
         {/* use the Link to create a link to each product */}

         <Link to={`/product-list/${item.id}`}>
            <img
              className="item-list-image"
              src={item.imageUrl}
              alt={item.name}
            />
            <p>{item.name}</p>
          </Link>
          <p>${item.price}</p>
        </div>
      ))}
    </div>
  );
}

export default ItemsList;

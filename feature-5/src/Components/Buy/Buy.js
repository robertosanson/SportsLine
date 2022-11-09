import React from "react";
import Child from "./Child.js";

function Buy({ items, itemId }) {
  function deleteObject() {
    items.map((item) => {
      console.log(itemId);
      return items;
    });
  }
  return (
    <p>
      <Child data="Buy" onClick={deleteObject} />
    </p>
  );
}

export default Buy;

// We have not yet fully implemented this Buy function
// We are trying to be able to select an item and then be
// able to press the "Buy" button in order to purchase the item

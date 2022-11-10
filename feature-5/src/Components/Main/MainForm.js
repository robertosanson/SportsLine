import React from "react";
import "../../styles.css";

// function that displays the items that are availble, as well as the
// Vendors that correspond to each item
const MainForm = ({ items }) => {
  //This are the list items that will be presented to the user
  let listItems = items.map((item) => (
    <div key={item.get("name").toString()} className="item">
      {/* get image of the item */}
      <img
        className="images"
        src={window.location.origin + "/pictures/items/" + item.get("picture")}
        alt={item.name}
        width="100"
      />
      <br />
      {item.get("name")} - {item.get("sport")} - ${item.get("price")} <br /> In
      Stock: {item.get("quantity")}
      <br />
      <br />
      {/* Get the information for the vendor of each item */}
      Vendor:
      <a
        href={item.get("vendor").get("homepage")}
        target="_blank"
        rel="noreferrer"
      >
        {item.get("vendor").get("name")}
      </a>
      <br />
      <img
        className="images"
        src={
          window.location.origin +
          "/pictures/logos/" +
          item.get("vendor").get("logo")
        }
        alt={item.get("vendor").get("name")}
        width="100"
      />
      {console.log(window.location.origin +
          "/pictures/logos/" +
          item.get("vendor").get("logo"))}
    </div>
  ));

  return (
    <div>
      <hr />
      These are the items that are available:
      <hr />
      <ul>{listItems}</ul>
    </div>
  );
};

export default MainForm;

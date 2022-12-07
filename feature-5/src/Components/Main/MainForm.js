import React from "react";
import "../../styles.css";
import { loadStripe } from "@stripe/stripe-js";

// function that displays the items that are availble, as well as the
// Vendors that correspond to each item
const MainForm = ({ items }) => {

  let stripePromise;
  const getStripe = () => {
    if (!stripePromise) {
      stripePromise = loadStripe(process.env.REACT_APP_STRIPE_KEY);
    }
    return stripePromise;
  };

  const redirectToCheckout = async (priceId) => {
    console.log("redirectToCheckout");
    const item = {
      price: priceId,
      quantity: 1
    };
    let checkoutOptions = {
      lineItems: [item],
      mode: "payment",
      successUrl: `${window.location.origin}/success`,
      cancelUrl: `${window.location.origin}/cancel`
      };
    const stripe = await getStripe();
    const { error } = await stripe.redirectToCheckout(checkoutOptions);
    console.log("Stripe checkout error", error);
  };

  //This are the list items that will be presented to the user
  let listItems = items.map((item) => (
    
    <div className="container">
      <div className="panel-group">
        <div className="panel panel-default">
          <div key={item.get("name").toString()} className="item">
            {/* get image of the item */}
            <img
              src={window.location.origin + "/pictures/items/" + item.get("picture")}
              alt={item.name}
              className="img-thumbnail"
              width="100"
            />
            <br />
            {item.get("name")} - {item.get("sport")} - ${item.get("price")} <br /> In
            Stock: {item.get("quantity")}
            <br />
            <br />
            <button onClick={() => {redirectToCheckout(item.get("stripeId"))}}>Buy</button>
          </div>
        </div>
      </div>
      {/* Get the information for the vendor of each item */}
      {/* Vendor: */}
      {/* <a
        href={item.get("vendor").get("homepage")}
        target="_blank"
        rel="noreferrer"
      >
        {item.get("vendor").get("name")}
      </a>
      <br /> */}
      {/* Return this next feature, bug for some reason impossible to fix */}
      {/* <img
        className="images"
        src={
          window.location.origin +
          "/pictures/logos/" +
          item.get("vendor").get("logo")
        }
        alt={item.get("vendor").get('name')}
        width="100"
      /> */}

      {

      console.log(
          item.get("vendor").get('id'))}
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

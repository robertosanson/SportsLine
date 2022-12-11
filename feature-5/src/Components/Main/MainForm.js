import React from "react";
import "../../styles.css";
import { loadStripe } from "@stripe/stripe-js";
import {useState} from "react";

// function that displays the items that are availble, as well as the
// Vendors that correspond to each item
const MainForm = ({ items, vendors }) => {

  const [sportFilter, setSportFilter] = useState("All");
  const [priceFilter, setPriceFilter] = useState(100);
  const [nameFilter, setNameFilter] = useState(100);
  const [quantityList, setQuantityList] = useState([]);

  let filters = [sportFilter, priceFilter, nameFilter];

  // from here down is the stripe implementation in order to be able to check out the items
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

  const cartCheckout = async(priceIds, quantities) => {
    let cartItems = []
    items.forEach((item) => {
      if (+window.localStorage.getItem(item.get("stripeId")) > 0){

        cartItems.push({
          price: item.get("stripeId"),
          quantity: +window.localStorage.getItem(item.get("stripeId"))
        })
      }
    });
    let checkoutOptions = {
      lineItems: cartItems,
      mode: "payment",
      successUrl: `${window.location.origin}/success`,
      cancelUrl: `${window.location.origin}/cancel`
      };
    const stripe = await getStripe();
    console.log(cartItems)
    const { error } = await stripe.redirectToCheckout(checkoutOptions);
    console.log("Stripe checkout error", error);

  }

  // Creating the shopping cart list
  var list_stripe = [];
  var list_quantity = [];
  var total = 0;

  function filterItemsBySports(sportFilter) {
    filters[0] = sportFilter
    setSportFilter(sportFilter);
  }

  function filterItemsByPrice(priceFilter) {
    filters[1] = priceFilter;
    setPriceFilter(priceFilter);
  }

  function filterItemsByName(nameFilter) {
    filters[2] = nameFilter;
    setNameFilter(nameFilter);
  }

  const addToCart = async (stripeId, quantity) => {
    let index = 0;
    let newList = [];
    // Check if the item doesn't exist in the shopping cart and add it to the shopping cart
    // and if it does appear there then add one more to the cart.
    if (!list_stripe.includes(stripeId)) {
      total = +(window.localStorage.getItem(stripeId));
      newList = quantityList;
      setQuantityList(newList + 1);
      list_stripe.push(stripeId);
      list_quantity.push(1);
      if (99 > (window.localStorage.getItem(stripeId))){
        total += 1;
        window.localStorage.setItem(stripeId, total);
      }
      else{
        alert("No more items in stock");
      }
    }
    else{
      total = +(window.localStorage.getItem(stripeId));
      index = list_stripe.indexOf(stripeId);
      if (99 > (window.localStorage.getItem(stripeId))){
        newList = quantityList;
        setQuantityList(newList + 1);
        list_quantity[index] += 1;
        total += 1;
        window.localStorage.setItem(stripeId, total);
      }
      else{
        alert("No more items in stock");
      }
    }
  }
    const removeFromCart = async (stripeId) => {
      let index = 0;
      let newList = [];
      // Removes an item from que shopping cart
        total = +(window.localStorage.getItem(stripeId));
        index = list_stripe.indexOf(stripeId);
        if (0 < (window.localStorage.getItem(stripeId))){
          newList = quantityList;
          setQuantityList(newList + 1);
          list_quantity[index] += 1;
          total -= 1;
          window.localStorage.setItem(stripeId, total);
        }
        else{
          alert("Can't remove something you don't have");
        }
    }
   

  //This are the list items that will be presented to the user
  let listItems = items.filter(item => (item.get("name").toLowerCase().includes(document.getElementById("name").value.toLowerCase()) ) 
  && item.get("price") < +document.getElementById("price").value 
  && (item.get("sport") === document.getElementById("sport").value || document.getElementById("sport").value === "All")).map((item) => (
    
    <div className="container">
      <div className="panel-group">
        <div className="panel panel-default">
          <div className="contenedor">
          <div key={item.get("name").toString()} className="item">
            {/* get image of the item */}
            <img
              src={window.location.origin + "/pictures/items/" + item.get("picture")}
              alt={item.name}
              className="img-thumbnail"
              width="150"
            />
            <br />
            {item.get("name")} - {item.get("sport")} - ${item.get("price")} <br /> 
            In Cart: {window.localStorage.getItem(item.get("stripeId")) ? window.localStorage.getItem(item.get("stripeId")) : 0}
            <br />
            <br />
            {/* Bellow are the buttons that on click will do whatever hte functions on top tell them to, basically checkout, add and remove from cart */}
            <button className="inventoryButtons" onClick={() => {redirectToCheckout(item.get("stripeId"))}}>Instant Checkout</button>
            <button className="inventoryButtons" onClick={() => {addToCart(item.get("stripeId"), item.get("quantity"))}}>Add to Cart</button>  
            <button className="inventoryButtons" onClick={() => {removeFromCart(item.get("stripeId"))}}>Remove from Cart</button>  
            <br />
            {/* Get the information for the vendor of each item */}
            {/* Vendor: */}
            <br/>
            <a
              href={item.get("vendor").get("homepage")}
              target="_blank"
              rel="noreferrer"
            >
              Item From: {item.get("vendor").get("name")}
            </a>
            <br />
            {/* Return this next feature, bug for some reason impossible to fix */}
            <img
              className="images"
              src={
                window.location.origin +
                "/pictures/logos/" +
                item.get("vendor").get("logo")
              }
              alt={item.get("vendor").get('name')}
              width="100"
            />
            </div>
          </div>
        </div>
      </div>


      

      {

      console.log(
          item.get("vendor"))}
    </div>
  ));

  return (
    <div>

      <label className="filter" for="name">Item Name:</label>
      <input type="text" id="name" name="name" onChange={() => filterItemsByName(document.getElementById("name").value)}></input>

        <label className="filter" for="sport">Choose a sport: </label>
        <select
          name="sport"
          id="sport"
          onChange={() =>
            filterItemsBySports(document.getElementById("sport").value)}
        >
          <option value="All">All</option>
          <option value="Soccer" id="Soccer">Soccer</option>
          <option value="Basketball" id="Basketball">Basketball</option>
          <option value="Baseball" id="Baseball">Baseball</option>
          <option value="Football" id="Football">Football</option>
        </select>
        

        <label className="filter" for="price">Items Under: </label>
        <select
          name="price"
          id="price"
          onChange={() =>
            filterItemsByPrice(document.getElementById("price").value)}
        >
          <option value="100">$100</option>
          <option value="50">$50</option>
          <option value="30">$30</option>
          <option value="20">$20</option>
          <option value="10">$10</option>
        </select>

      <hr />
      These are the items that are available:
      <hr />
      <ul>{listItems}</ul>
      <div>
        <button onClick={() => cartCheckout(list_stripe, list_quantity)}>Checkout</button>
      </div>
    </div>
  );
};

export default MainForm;

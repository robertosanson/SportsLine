import MainForm from "./MainForm";
import React, { useEffect, useState } from "react";
import { getAllItems } from "../../Common/Services/StoreService";
import {getAllVendor} from "../../Common/Services/StoreVendors";

const MainList = () => {
  // We create the useState for the items
  const [items, setItems] = useState([]);
  const [vendors, setVendors] = useState([]);

  // Create the useEffect for getting the items and
  // setting them
  useEffect(() => {
    getAllItems().then((items) => {
      console.log(items);
      setItems(items);
    });
  }, []);

  useEffect(() => {
    getAllVendor().then((vendors) => {
      console.log(vendors);
      setVendors(vendors);
    });
  }, []);

  return (
    <div>
      <MainForm items={items} vendors={vendors}/>
    </div>
  );
};

// We call the MainForm function and input the items and vendors

export default MainList;

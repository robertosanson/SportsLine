import MainForm from "./MainForm";
import React, { useEffect, useState } from "react";
import { getAllItems } from "../../Common/Services/StoreService";

const MainList = () => {
  // We create the useState for the items
  const [items, setItems] = useState([]);

  // Create the useEffect for getting the items and
  // setting them
  useEffect(() => {
    getAllItems().then((items) => {
      console.log(items);
      setItems(items);
    });
  }, []);

  return (
    <div>
      <MainForm items={items} />
    </div>
  );
};

// We call the MainForm function and input the items and vendors

export default MainList;

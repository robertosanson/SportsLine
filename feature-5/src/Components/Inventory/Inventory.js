import MainModule from "../Main/Main.js";
import "../../styles.css";

export default function Inventory() {
  return (
    <section>
      <h2 className="Items"> Items </h2>
      <p> Inventory Page </p>
      <MainModule />
      <hr />
    </section>
  );
}

// This page is another route that is used to show all the data
// It calls onto the MainModule which contains the MainForm
// which contains all of the data of the items and vendors

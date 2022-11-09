import React from "react";

// This page is simply creating a button that could be used for multiple pages.
export default function Child({ data, onChildClick }) {
  return (
    <div class="child">
      <button onClick={onChildClick}>{data}</button>
    </div>
  );
}

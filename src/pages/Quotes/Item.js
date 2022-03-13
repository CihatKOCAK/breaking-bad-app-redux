import React from "react";
import './styles.css'

function Item({ quote }) {
  return (
    <div key={quote.id} className="quote_item">
      <h3>
        <q>{quote.quote}</q>
      </h3>

      <p>{quote.author}</p>
    </div>
  );
}

export default Item;

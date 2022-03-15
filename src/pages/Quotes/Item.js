import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";

function Item({ quote }) {
  return (
    <div key={quote.id} className="quote_item">
      <h3>
        <Link to={`/quotes/${quote.quote_id}`}>
          <q>{quote.quote}</q>
        </Link>
      </h3>

      <p>{quote.author}</p>
    </div>
  );
}

export default Item;

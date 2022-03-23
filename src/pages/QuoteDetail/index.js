import React from "react";
import { useSelector } from "react-redux";
import { useParams, Navigate } from "react-router-dom";
import Navbar from "../../components/Navbar";

function QuoteDetail() {
  const { quote_id } = useParams();

  // const items = useSelector(quotesSelector);
  // const quote = items.find((item) => item.quote_id === Number(quote_id));

  const quote = useSelector((state) =>
    state.quotes.items.find((item) => item.quote_id === Number(quote_id))
  );

  if (!quote) {
    return <Navigate to="/quotes" />;
  }
  return (
    <div>
      <Navbar name={"Quotes:"} />
      <div className="quote_detail" style={{ width: "fit-content", margin:"50px" }}>
        <h2>{quote.quote}</h2>
        <h3 style={{ textAlign: "right" }}>-{quote.author}</h3>
        <p>{quote.series}</p>
      </div>
    </div>
  );
}

export default QuoteDetail;

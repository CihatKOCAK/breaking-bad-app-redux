import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchAllQuotes,
  quotesErrorSelector,
  quotesSelector,
  quotesStatusSelector,
} from "../../redux/quotesSlice";
import Error from "../../components/Error";
import Loading from "../../components/Loading";
import Item from "./Item";
import Navbar from "../../components/Navbar";

function Index() {
  const dispatch = useDispatch();
  const data = useSelector(quotesSelector);
  const status = useSelector(quotesStatusSelector);
  const error = useSelector(quotesErrorSelector);
  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchAllQuotes());
    }
  }, [dispatch]);

  if (error) {
    return <Error message={error} />;
  }

  console.log(data);
  return (
    <div style={{ padding: 10 }}>
      {status === "loading" && <Loading />}
      {status === "succeeded" && <Navbar name={"Quotes " + data.length} />}
      {status === "succeeded" &&
        data.map((quote) => <Item key={quote.id} quote={quote} />)}
      {status === "succeeded" && (
        <div className="quotes_info"> {data.length} quotes. </div>
      )}
    </div>
  );
}

export default Index;

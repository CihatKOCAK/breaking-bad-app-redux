import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Error from "../../components/Error";
import Loading from "../../components/Loading";
import Navbar from "../../components/Navbar";
import {
  fetchAllDeaths,
  deathsSelector,
  deathsStatusSelector,
  deathsErrorSelector,
} from "../../redux/deathsSlice";
import "./styles.css";

function Deaths() {
  const dispatch = useDispatch();
  const data = useSelector(deathsSelector);
  const status = useSelector(deathsStatusSelector);
  const error = useSelector(deathsErrorSelector);
  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchAllDeaths());
    }
  }, [dispatch]);
  if (error) {
    return <Error message={error} />;
  }
  return (
    <div style={{ padding: 10 }}>
      {status === "loading" && <Loading />}
      {status === "succeeded" && <Navbar name={"Deaths " + data.length} />}
      <div className="deathCard" >
        {status === "succeeded" &&
          data.map((death, index) => (
            <div key={index} className="card">
              <p><b>Death: </b>{death.death}</p>
              <p><b>Cause: </b>{death.cause}</p>
              <p><b>Responsible: </b>{death.responsible}</p>
              <p><b>Last Words: </b>{death.last_words}</p>
              <p>
              <b>Chapter: </b>Season: {death.season} Episode: {death.episode}
              </p>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Deaths;

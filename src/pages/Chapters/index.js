import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Error from "../../components/Error";
import Loading from "../../components/Loading";
import Navbar from "../../components/Navbar";
import {
  episodesErrorSelector,
  episodesSelector,
  episodesStatusSelector,
  fetchAllEpisodes,
} from "../../redux/episodesSlice";

function Chapters() {
  const dispatch = useDispatch();
  const data = useSelector(episodesSelector);
  const status = useSelector(episodesStatusSelector);
  const error = useSelector(episodesErrorSelector);
  console.log("data", data);
  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchAllEpisodes());
    }
  }, [dispatch]);
  if (error) {
    return <Error message={error} />;
  }
  return <div>Chapters</div>;
}

export default Chapters;

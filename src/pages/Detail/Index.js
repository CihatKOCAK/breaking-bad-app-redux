import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "../../components/Loading";

export default function Detail() {
  const { char_id } = useParams();
  const [characters, setCharacters] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios(`${process.env.REACT_APP_API_BASE_ENDPOINT}/characters/${char_id}`)
      .then((response) => {
        setCharacters(response.data[0]);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [char_id]);
  console.log(char_id);
  return (
    <div>
      {loading && <Loading />}
      {characters && (
        <div>
          <h1>{characters.name}</h1>
          <img
            src={characters.img}
            alt={characters.name}
            style={{ width: "50%" }}
          />
        </div>
      )}
      <pre>
        {characters && JSON.stringify(characters, null, 2)}
      </pre>
    </div>
  );
}

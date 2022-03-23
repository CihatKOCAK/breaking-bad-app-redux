import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "../../components/Loading";
import Navbar from "../../components/Navbar";
import "./styles.css";
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
  return (
    <div>
      {loading && <Loading />}

      {characters && (
        <>
          <Navbar name={characters.name} />
          <div className="characterCard">
            <div className="characterContainer">
              <div className="characterImage">
                <img src={characters.img} alt={characters.name} />
              </div>
              <div className="characterInfo">
                <div className="characterInfoTitle">
                  <h1>
                    {characters.name} / {characters.nickname}
                  </h1>
                </div>
                <div className="characterInfoText">
                  <p>Actor Name: {characters.portrayed}</p>
                  <p>Birthday: {characters.birthday}</p>
                  <p>Status: {characters.status}</p>
                  <p>Occupation:</p>
                  <ul>
                    {characters.occupation &&
                      characters.occupation.map((occupation) => (
                        <li>{occupation}</li>
                      ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

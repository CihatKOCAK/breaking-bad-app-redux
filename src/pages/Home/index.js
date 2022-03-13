import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./styles.css";
import { fetchCharacters } from "../../redux/characterSlice";
import Masonry from "react-masonry-css";
import Loading from "../../components/Loading";
import Error from "../../components/Error";
import { Link } from "react-router-dom";

export default function Home() {
  const characters = useSelector((state) => state.character.characters);
  const nextPage = useSelector((state) => state.character.page);
  const hasNextPage = useSelector((state) => state.character.hasNextPage);
  const status = useSelector((state) => state.character.status);
  const error = useSelector((state) => state.character.error);
  const dispatch = useDispatch();

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchCharacters());
    }
  }, [dispatch]);

  if (status === "failed") {
    return <Error message={error} />;
  }

  return (
    <div>
      <p>Characters: {characters.length}</p>
      <Masonry
        breakpointCols={4}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {characters.map((character) => (
          <div key={character.id}>
            <Link to={`/char/${character.char_id}`}>
              <img
                src={character.img}
                alt={character.name}
                className="character"
              />
              <div className="char-name">{character.name}</div>
            </Link>
          </div>
        ))}
      </Masonry>
      <div style={{ padding: "20px 0 40px 0", textAlign: "center" }}>
        {status == "loading" && <Loading />}
        {status !== "loading" && hasNextPage && (
          <button onClick={() => dispatch(fetchCharacters(nextPage))}>
            Load More {nextPage}
          </button>
        )}
        {status !== "loading" && !hasNextPage && <p>No more characters.</p>}
      </div>
    </div>
  );
}

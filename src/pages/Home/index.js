import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./styles.css";
import { fetchCharacters } from "../../redux/characterSlice";
import Masonry from "react-masonry-css";
import Loading from "../../components/Loading";
import Error from "../../components/Error";

export default function Home() {
  const characters = useSelector((state) => state.character.characters);
  const isLoading = useSelector((state) => state.character.isLoading);
  const error = useSelector((state) => state.character.error);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCharacters());
  }, [dispatch]);

  if (isLoading) {
    return <Loading />;
  }
  if (error) {
    return <Error message = {error} />
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
            <img
              src={character.img}
              alt={character.name}
              className="character"
            />
            <div className="char-name">{character.name}</div>
          </div>
        ))}
      </Masonry>
    </div>
  );
}

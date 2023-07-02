import axios from "axios";
import { useEffect, useState } from "react";
import Header from "./components/Header";
import MovieInfo from "./components/MovieInfo";
import Movies from "./components/Movies";

function App() {
  const { VITE_API_KEY } = import.meta.env;

  const [searchQuery, setSearchQuery] = useState("");
  const [moviesList, setMoviesList] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState("");

  const closeMovieInfo = () => setSelectedMovie(null);

  const clearSearchQuery = () => setSearchQuery("");

  const getData = async (search) => {
    if (searchQuery.length > 2) {
      try {
        const response = await axios.get(
          `https://www.omdbapi.com/?s=${search}&apikey=${VITE_API_KEY}`
        );
        setMoviesList(response.data.Search);
      } catch (e) {
        console.log(e.message);
      }
    } else {
      setMoviesList([]);
    }
  };

  const getQuery = (query) => {
    setSearchQuery(query);
  };
  useEffect(() => {
    getData(searchQuery);
  }, [searchQuery]);

  return (
    <div>
      <Header
        getQuery={getQuery}
        query={searchQuery}
        clearSearch={clearSearchQuery}
      />
      {selectedMovie && (
        <MovieInfo selectedMovie={selectedMovie} close={closeMovieInfo} />
      )}
      <Movies movies={moviesList} select={setSelectedMovie} />
    </div>
  );
}

export default App;

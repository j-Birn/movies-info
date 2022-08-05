import axios from "axios";
import { useEffect, useState } from "react";
import Header from "./components/Header";
import Movies from "./components/Movies";

function App() {
  const { VITE_API_KEY } = import.meta.env;

  const [searchQuery, setSearchQuery] = useState("");
  const [moviesList, setMoviesList] = useState([]);

  const getData = async (search) => {
    if (searchQuery.length > 2) {
      const response = await axios.get(
        `https://www.omdbapi.com/?s=${search}&apikey=${VITE_API_KEY}`
      );
      setMoviesList(response.data.Search);
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
      <Header getQuery={getQuery} query={searchQuery} />
      <Movies movies={moviesList} />
    </div>
  );
}

export default App;

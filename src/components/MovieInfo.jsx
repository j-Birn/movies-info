import axios from "axios";
import React, { useEffect, useState } from "react";

const MovieInfo = ({ selectedMovie, close }) => {
  const { VITE_API_KEY } = import.meta.env;
  const [movieInfo, setMovieInfo] = useState([]);

  useEffect(() => {
    axios
      .get(`https://www.omdbapi.com/?i=${selectedMovie}&apikey=${VITE_API_KEY}`)
      .then((result) => setMovieInfo(result.data));
  }, [selectedMovie]);

  return (
    <div>
      {movieInfo ? (
        <div className="flex flex-row justify-center gap-4 flex-wrap py-5 px-8 border-b-2 border-slate-500 text-white">
          <img
            src={movieInfo.Poster}
            alt="movie pic"
            className="h-[342px] rounded-xl"
          />
          <div className="flex flex-col w-2/3 m-5">
            <div className="text-2xl font-semibold capitalize">
              {movieInfo.Title}
            </div>
            <div className="text-lg font-medium my-1 capitalize">
              imdb rating:{" "}
              <span className="text-cyan-400">{movieInfo.imdbRating}</span>
            </div>
            <div className="text-lg font-medium my-1 capitalize">
              year: <span className="text-cyan-400">{movieInfo.Year}</span>
            </div>
            <div className="text-lg font-medium my-1 capitalize">
              rated: <span className="text-cyan-400">{movieInfo.Rated}</span>
            </div>
            <div className="text-lg font-medium my-1 ">
              Runtime:{" "}
              <span className="text-cyan-400">{movieInfo.Runtime}</span>
            </div>
            <div className="text-lg font-medium my-1 capitalize">
              genre: <span className="text-cyan-400">{movieInfo.Genre}</span>
            </div>
            <div className="text-lg font-medium my-1 capitalize">
              director:{" "}
              <span className="text-cyan-400">{movieInfo.Director}</span>
            </div>
            <div className="text-lg font-medium my-1 capitalize">
              actors: <span className="text-cyan-400">{movieInfo.Actors}</span>
            </div>
            <div className="text-lg font-medium my-1 ">
              Plot: <span className="text-cyan-400">{movieInfo.Plot}</span>
            </div>
          </div>
          <div className="shrink-0">
            <button onClick={close} className="rounded-full">
              <img className="w-8" src="/close.svg" alt="close" />
            </button>
          </div>
        </div>
      ) : (
        <div className="text-white">Loading...</div>
      )}
    </div>
  );
};

export default MovieInfo;

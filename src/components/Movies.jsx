import React, { memo } from "react";
import SingleMovie from "./SingleMovie";

const Movies = memo(({ movies, select }) => {
  console.log(movies);
  return (
    <div className="flex flex-row flex-wrap justify-evenly p-7 gap-4">
      {movies?.length === 0 ? (
        <div>
          <div className="">
            <img className="" src="./cinema.svg" alt="cinema icon" />
          </div>
          <span className="text-white text-4xl capitalize">no movies yet</span>
        </div>
      ) : (
        movies?.map((movie) => (
          <SingleMovie key={movie.imdbID} movie={movie} select={select} />
        ))
      )}
    </div>
  );
});

export default Movies;

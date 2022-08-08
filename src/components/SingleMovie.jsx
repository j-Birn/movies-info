import React, { memo } from "react";

const SingleMovie = memo(({ movie, select }) => {
  const { Title, Year, imdbID, Type, Poster } = movie;
  return (
    <div
      className="flex flex-col p-3 w-72 rounded-xl shadow-md shadow-cyan-400 text-white cursor-pointer"
      onClick={() => select(imdbID)}
    >
      <img src={Poster} alt="movie pic" className="h-[362px] rounded-xl" />
      <div className="text-lg font-semibold my-4">{Title}</div>
      <div className="flex justify-between">
        <div className="text-base font-medium capitalize">Year: {Year}</div>
        <div className="text-base font-medium capitalize">Type: {Type}</div>
      </div>
    </div>
  );
});

export default SingleMovie;

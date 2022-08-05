import React from "react";

const SingleMovie = ({ movie }) => {
  const { Title, Year, imdbID, Type, Poster } = movie;
  return (
    <div className="flex flex-col p-3 w-72 rounded-xl shadow-lg shadow-slate-500 text-white cursor-pointer">
      <img src={Poster} alt="movie pic" className="h-[362px]" />
      <div className="text-lg font-semibold my-4">{Title}</div>
      <div className="flex justify-between">
        <div className="text-base font-medium capitalize">Year: {Year}</div>
        <div className="text-base font-medium capitalize">Type: {Type}</div>
      </div>
    </div>
  );
};

export default SingleMovie;

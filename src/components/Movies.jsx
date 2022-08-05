import React from "react";
import SingleMovie from "./SingleMovie";

const Movies = () => {
  return (
    <div className="flex flex-wrap justify-evenly">
      <SingleMovie />
      <SingleMovie />
      <SingleMovie />
      <SingleMovie />
    </div>
  );
};

export default Movies;

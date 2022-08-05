import React from "react";

const Header = () => {
  return (
    <div className="flex flex-row justify-between bg-black text-white p-3 text-2xl font-bold">
      <div className="flex">
        <div className="w-14 h-14 rounded-xl p-1 m-2 bg-white">
          <img src="/video-camera.svg" alt="video camera" />
        </div>
        <div className="flex flex-row items-center">Movie Info App</div>
      </div>
      <div className="flex flex-row justify-between items-center p-3 bg-white rounded-xl w-2/5 mr-2">
        <input
          placeholder="Search movie"
          className="text-black text-lg border-none outline-none w-5/6"
        />

        <div className="mr-3 w-7 h-7">
          <img src="/search-icon.svg" alt="search icon" />
        </div>
      </div>
    </div>
  );
};

export default Header;

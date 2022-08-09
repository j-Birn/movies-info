import React, { memo } from "react";
import { DebounceInput } from "react-debounce-input";

const Header = memo(({ getQuery, query }) => {
  return (
    <div className="flex flex-row justify-between items-center bg-black text-white p-3 sm:text-2xl text-base font-bold">
      <div className="flex">
        <div className="w-14 h-14 rounded-xl p-1 m-2 bg-white">
          <img src="/video-camera.svg" alt="video camera" />
        </div>
        <div className="flex flex-row items-center">Movies Info App</div>
      </div>
      <div className="flex flex-row justify-between items-center p-3 bg-white rounded-xl w-2/5 mr-2 h-10 sm:h-14">
        <DebounceInput
          placeholder="Search"
          className="text-black text-lg border-none outline-none w-5/6"
          debounceTimeout={500}
          value={query}
          onChange={(e) => getQuery(e.target.value)}
        />

        <div className="mr-3 w-7 h-7">
          <img src="/search-icon.svg" alt="search icon" />
        </div>
      </div>
    </div>
  );
});

export default Header;

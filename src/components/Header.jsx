import React, { memo } from "react";
import { DebounceInput } from "react-debounce-input";

const Header = memo(({ getQuery, query, clearSearch }) => {
  return (
    <div className="flex flex-row justify-between items-center bg-black text-white p-3 sm:text-2xl text-base font-bold">
      <div className="flex">
        <div className="w-14 h-14 rounded-xl p-1 m-2 bg-white">
          <img src="/video-camera.svg" alt="video camera" />
        </div>
        <div className="flex flex-row items-center">Movies Info App</div>
      </div>
      <div className="flex flex-row justify-between items-center p-3 mr-6 bg-white rounded-xl w-2/5 mr-2 h-10 sm:h-14">
        <DebounceInput
          placeholder="search"
          className="text-black text-lg border-none outline-none w-5/6"
          debounceTimeout={500}
          value={query}
          onChange={(e) => getQuery(e.target.value)}
        />

        <div className="mr-3 w-7 h-7">
          {query ? (
            <button onClick={() => clearSearch()} className="active:scale-75">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 60 60"
                width="30px"
                height="30px"
              >
                <g id="surface36541399">
                  <path d="M 14 8 C 13.488281 8 12.976562 8.195312 12.585938 8.585938 L 8.585938 12.585938 C 7.804688 13.367188 7.804688 14.632812 8.585938 15.414062 L 23.171875 30 L 8.585938 44.585938 C 7.804688 45.367188 7.804688 46.632812 8.585938 47.414062 L 12.585938 51.414062 C 13.367188 52.195312 14.632812 52.195312 15.414062 51.414062 L 30 36.828125 L 44.585938 51.414062 C 45.367188 52.195312 46.632812 52.195312 47.414062 51.414062 L 51.414062 47.414062 C 52.195312 46.632812 52.195312 45.367188 51.414062 44.585938 L 36.828125 30 L 51.414062 15.414062 C 52.195312 14.632812 52.195312 13.367188 51.414062 12.585938 L 47.414062 8.585938 C 46.632812 7.804688 45.367188 7.804688 44.585938 8.585938 L 30 23.171875 L 15.414062 8.585938 C 15.023438 8.195312 14.511719 8 14 8 Z M 14 8 " />
                </g>
              </svg>
            </button>
          ) : (
            <img src="/search-icon.svg" alt="search icon" />
          )}
        </div>
      </div>
    </div>
  );
});

export default Header;

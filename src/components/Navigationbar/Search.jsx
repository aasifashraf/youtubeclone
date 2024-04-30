import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";

const Search = () => {
  const [Search, setSearch] = useState("");
  const handleOnChange = (e) => {
    setSearch(e.target.value);
  };
  const handleSearchInput = () => setSearch("");
  return (
    <div className="flex items-center justify-between w-full">
      <div className=" w-full">
        <input
          type="text"
          value={Search.toUpperCase()}
          placeholder="Search"
          className=" border-[1px] outline-none rounded-l-full p-1.5 text-sm h-8 w-[28rem] border-r-transparent  "
          onClick={handleSearchInput}
          onChange={handleOnChange}
        />
      </div>
      <div className="cursor-pointer rounded-r-full p-2 border-[1px] h-8 border-l-transparent hover:bg-gray-100">
        <CiSearch />
      </div>
    </div>
  );
};

export default Search;

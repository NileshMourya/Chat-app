import React from "react";
import { IoSearchSharp } from "react-icons/io5";
const SearchInput = () => {
  return (
    <form className="flex items-center gap-2 mt-2">
      <input
        type="text"
        placeholder="Search"
        className="input input-bordered rounded-full"
      />
      <button className="btn btn-circle bg-sky-500 text-white border-none">
        <IoSearchSharp className="w-6 h-6 outline-none" />
      </button>
    </form>
  );
};

export default SearchInput;

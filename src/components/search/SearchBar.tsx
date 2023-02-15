import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
const SearchBar = () => {
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const handleInput = (e: any) => {
    e.preventDefault();
    if (input) {
      navigate(`/favorit/${input}`);
      setInput("");
    }
  };
  return (
    <form className="bg-white/20 pr-3 flex" onSubmit={handleInput}>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Search Something..."
        className="outline-none bg-black/20 placeholder:text-gray-500 focus:bg-black/40 focus:text-white focus:placeholder:text-slate-200 p-2"
      />
      <button type="button" className="bg-black/60" onClick={handleInput}>
        <AiOutlineSearch className=" mx-2 text-lg  hover:text-sky-500" />
      </button>
    </form>
  );
};

export default SearchBar;

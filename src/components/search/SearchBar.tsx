import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
const SearchBar = () => {
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const handleInput = (e: any) => {
    e.preventDefault();
    if (input) {
      setInput("");
      navigate(`/favorit/${input}`);
    }
  };
  return (
    <form className="bg-white/10 pr-3 flex" onSubmit={handleInput}>
      <input type="text" value={input} onChange={(e) => setInput(e.target.value)} placeholder="Search Something..." className="focus:border  outline-none  bg-white/10 p-2" />
      <button type="button" onClick={handleInput}>
        <AiOutlineSearch className="ml-2 text-lg hover:text-blue-400" />
      </button>
    </form>
  );
};

export default SearchBar;

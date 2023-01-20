import React from "react";
import { SearchBar } from "../components";

const Favorit = () => {
  return (
    <section>
      <div className="h-screen flex justify-center items-center flex-col">
        <SearchBar />
        <h2 className="mt-10">Search Something :D</h2>
      </div>
    </section>
  );
};

export default Favorit;

import React from "react";
import { FaWaze } from "react-icons/fa";
import { Link } from "react-router-dom";

const textHover: string = "hover:underline hover:text-sky-200";
const Navbar = () => {
  return (
    <div className="flex justify-around items-center sticky top-0 bg-black/50 p-3">
      <div>
        <Link to="/" className="flex space-x-2 items-center ">
          <FaWaze className="text-2xl text-blue-400" />
          <h2 className="font-poppin text-lg font-semibold bg-gradient-to-r bg-clip-text text-transparent from-sky-300 via-sky-400 to-sky-400">Close TheDoor</h2>
        </Link>
      </div>
      <div>
        <ul className="space-x-4 text-lg ">
          <Link to="/favorit" className={`${textHover}`}>
            Favorit
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;

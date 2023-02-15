import "./App.css";
import { Navbar, SearchTerm } from "./components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import { Home, Favorit } from "./pages";

const App = () => {
  const [dark, setDark] = useState(false);
  return (
    <div className={`${dark ? "dark" : "light"} text-white bg-white/60 `}>
      <BrowserRouter>
        <Navbar />
        <div className="px-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/favorit" element={<Favorit />} />
            <Route path="/favorit/:searchTerm" element={<SearchTerm />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;

import React from "react";
import { links } from "../api/dummy";
import { Container } from "@mui/material";

const Sites = ({ setSites }: any) => {
  return (
    <Container className=" top-14">
      <div className="text-black mt-10 flex flex-wrap">
        {links.map((item) => (
          <div key={item.name} className="flex  justify-between space-x-4 mx-2 py-2 ">
            <p className="px-2 md:px-3 py-[5px] text-sky-600 md:py-2 border-sky-500 border bg-white/10 cursor-pointer hover:bg-sky-500 hover:text-white transition duration-300 capitalize " onClick={() => setSites(item.name)}>
              {item.name || "all"}
            </p>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default Sites;

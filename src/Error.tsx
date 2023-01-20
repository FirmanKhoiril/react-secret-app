import React from "react";

const Error = ({ error }: any) => {
  return (
    <div className="h-screen w-full m-auto">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has accured.</p>
      <h3>{error}</h3>
    </div>
  );
};

export default Error;

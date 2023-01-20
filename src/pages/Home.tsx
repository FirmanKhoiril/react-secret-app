import React, { useState, FC } from "react";
import { useQuery } from "react-query";
import { fetchDataPorn } from "../api/fetchDataP";
import { Card, Loading } from "../components";
import Error from "../Error";

const fetchData = async () => {
  const res = await fetchDataPorn(`search?query=anime&page=1&quality=hd&timeout=5000`);
  return res;
};
const Home = () => {
  const { data, isFetching, isLoading, error, isError } = useQuery("porn", fetchData, {
    refetchOnWindowFocus: false,
  });

  if (isLoading && isFetching) return <Loading />;
  const porns = data?.data?.data?.map((item: any) => item);

  if (isError) return <Error error={error} />;
  return (
    <div>
      {porns?.map((link: object, idx: number) => (
        <Card datas={link} key={idx} />
      ))}
    </div>
  );
};

export default Home;

import React, { useState, FC } from "react";
import { useQuery } from "react-query";
import { fetchDataPorn } from "../api/fetchDataP";
import { Card, Loading, Sites } from "../components";
import Error from "../Error";
import { Pagination, Container } from "@mui/material";

const Home = () => {
  const [page, setPage] = useState(1);
  const [sites, setSites] = useState("");

  const fetchData = async () => {
    const res = await fetchDataPorn(`search?query=anime&site=${sites}&page=${page}&quality=hd&timeout=5000`);
    return res;
  };
  const { data, isFetching, isSuccess, isLoading, error, isError } = useQuery(["porn", page, sites], fetchData, {
    refetchOnWindowFocus: false,
  });

  if (isLoading && isFetching) return <Loading />;
  const porns = data?.data?.data?.map((item: any) => item);

  if (isError) return <Error error={error} />;
  return (
    <Container>
      <Sites setSites={setSites} />
      {isSuccess && (
        <>
          <Pagination count={10} size={"small"} onChange={(e, value) => setPage(value)} defaultPage={1} className="my-10 flex justify-center" shape="rounded" color="primary" />
          {porns?.map((link: object, idx: number) => (
            <Card datas={link} key={idx} />
          ))}
          <Pagination count={10} onChange={(e, value) => setPage(value)} defaultPage={1} className="my-10 flex justify-center" size="small" shape="rounded" color="primary" />
        </>
      )}
    </Container>
  );
};

export default Home;

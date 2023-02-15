import React, { useState } from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { fetchDataPorn } from "../../api/fetchDataP";
import Error from "../../Error";
import { Loading, Card, Sites } from "../../components";
import { Pagination, Container } from "@mui/material";

const SearchTerm = () => {
  const [page, setPage] = useState(1);
  const [sites, setSites] = useState<string>("");
  const { searchTerm } = useParams();

  const fetchDataSearch = async () => {
    const res = await fetchDataPorn(`search?query=${searchTerm}&site=${sites}&page=${page}&quality=hd&timeout=2000`);
    return res;
  };

  const { data, isError, isSuccess, error, isFetching, isLoading } = useQuery(["search", searchTerm, page, sites], fetchDataSearch, {
    refetchOnWindowFocus: false,
  });
  const porns = data?.data?.data?.map((item: any) => item);

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

      {isError && <Error error={error} />}
      {isLoading && isFetching && <Loading />}
    </Container>
  );
};

export default SearchTerm;

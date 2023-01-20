import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { fetchDataPorn } from "../../api/fetchDataP";
import Error from "../../Error";
import { Loading, Card } from "../../components";

const SearchTerm = () => {
  const { searchTerm } = useParams();

  const fetchDataSearch = async () => {
    const res = await fetchDataPorn(`search?query=${searchTerm}&page=1&quality=hd&timeout=2000`);
    return res;
  };

  const { data, isError, error, isFetching, isLoading } = useQuery(["search", searchTerm], fetchDataSearch, {
    refetchOnWindowFocus: false,
  });
  if (isLoading && isFetching) return <Loading />;
  const porns = data?.data?.data?.map((item: any) => item);

  if (isError) return <Error error={error} />;

  return (
    <div>
      <h2 className=" text-center text-sky-500 font-poppin text-2xl mt-1">Result for {searchTerm} :)</h2>
      {porns?.map((link: object, idx: number) => (
        <Card datas={link} key={idx} />
      ))}
    </div>
  );
};

export default SearchTerm;

import { useRouter } from "next/router";
import React from "react";

const Search = () => {
  const router = useRouter();
  if (router.query) {
    console.log(query);
  }
  return <div>Search</div>;
};

export default Search;

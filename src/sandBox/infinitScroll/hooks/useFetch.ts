import { useState } from "react";
import { base_url } from "../utils/constant";

export const useFetch = (skip, setSkip) => {
  const [apiData, setApiData] = useState([]);
  async function getData() {
    const res = await fetch(`${base_url}limit=${10}&skip=${skip}`);
    const result = await res.json();
    setApiData((prev) => [...prev, ...result.todos]);
  }

  const handleScroll = (e) => {
    if (e.target.scrollHeight - e.target.scrollTop === e.target.clientHeight) {
      setSkip((prev) => prev + 10);
    }
  };

  return { apiData, getData, handleScroll };
};

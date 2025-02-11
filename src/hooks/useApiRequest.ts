import { useState } from "react";

const useApiRequest = (url: string, method = "GET") => {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const getData = async (options: any = {}) => {
    setLoading(true);
    const token = window.localStorage.getItem("token");
    const res = await fetch(url, {
      method,
      ...options,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    const data = await res.json();

    setData(data);
    setLoading(false);
  };

  return { data, loading, getData };
};

export default useApiRequest;

import { useEffect, useState } from "react";

const useApiRequest = (url: string, method = "GET", options = {}) => {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<any>(null);

  const getData = async () => {
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

  useEffect(() => {
    try {
      getData();
    } catch (error) {
      setError(error);
    }
  }, [url]);

  return { data, loading, error };
};

export default useApiRequest;

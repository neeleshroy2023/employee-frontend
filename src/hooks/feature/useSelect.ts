import { useEffect, useState } from "react";
import useApiRequest from "../useApiRequest";
import API_KEYS from "../../api/keys";

export const useSelect = () => {
  const [age, setAge] = useState("");
  const { data, getData, error, loading } = useApiRequest(
    `${import.meta.env.VITE_HOST_URL}${API_KEYS?.departments}`
  );

  console.log("BasicSelectData", data);

  useEffect(() => {
    const abc = async () => {
      await getData();
    };
    abc();
  }, []);

  return {data, error, loading}
};

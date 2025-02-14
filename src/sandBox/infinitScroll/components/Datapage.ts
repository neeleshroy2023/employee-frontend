import { useEffect, useState } from "react";
import { useFetch } from "../hooks/useFetch";

const DataPage = () => {
  const [skip, setSkip] = useState(0);
  const { apiData, getData, handleScroll } = useFetch(skip, setSkip);

  useEffect(() => {
    async function abc() {
      await getData();
    }
    abc();
  }, [skip]);

  return (
    <div className="inf-scroll" onscroll={handleScroll}>
      {apiData.map((item) => (
        <h1>{item.todo}</h1>
      ))}
    </div>
  );
};

export default DataPage;

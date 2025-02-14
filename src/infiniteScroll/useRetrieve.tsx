import { useState } from "react";

const useRetrieve = (skip: any, setSkip: any) => {
  const [data1, setData1] = useState([]);
  console.log(data1);

  async function retrieveData() {
    const response = await fetch(
      `https://dummyjson.com/todos?limit=10&skip=${skip}`
    );
    const data2 = await response.json();

    setData1((prev): any => [...prev, ...data2.todos]);
  }

  const detectScroll = (e: any) => {
    console.log("prajwal");
    if (e.target.scrollHeight - e.target.scrollTop === e.target.clientHeight) {
      console.log("prajwal");
      setSkip((prev: any) => prev + 10);
    }
  };

  return { data1, retrieveData, detectScroll };
};
export default useRetrieve;

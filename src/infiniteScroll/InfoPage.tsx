import { useEffect, useState } from "react";
import useRetrieve from "./useRetrieve";
const InfoPage = () => {
  const [skip, setSkip] = useState(0);
  const { data1, retrieveData, detectScroll } = useRetrieve(skip, setSkip);

  useEffect(() => {
    async function abc() {
      await retrieveData();
    }
    abc();
  }, [skip]);

  return (
    <div className="scroll-box" onScroll={detectScroll}>
      {data1.map((task: any, index: any) => (
        <h2 key={index}>{task.todo}</h2>
      ))}
    </div>
  );
};

export default InfoPage;

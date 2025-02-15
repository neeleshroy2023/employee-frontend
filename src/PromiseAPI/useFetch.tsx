import { useState, useEffect } from "react";
import axios from "axios";
export const useFetch = () => {
  const [data, setData] = useState([]);

  console.log(data);

  useEffect(() => {
    const getData = async () => {
      const story = await axios.get(
        "https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty"
      );

      const promises = story.data
        .slice(0, 10)
        .map((storyId) =>
          axios.get(
            `https://hacker-news.firebaseio.com/v0/item/${storyId}.json?print=pretty`
          )
        );
      const promisesettled = await Promise.allSettled(promises);
      setData(promisesettled);
    };
    getData();
  }, []);
  return { data };
};

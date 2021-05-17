import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import NewsItem from "./NewsItem/NewsItem";
import { getNewsData } from "../../redux/Comments/action";
const Comments = () => {
  const [HackerNewsData, setHackerNewsData] = useState([]);
  const dispatch = useDispatch();
  const data = useSelector((store) => store.Comments.NewsData);
  useEffect(() => {
    const fetchData = () => {
      fetch(
        "https://hn.algolia.com/api/v1/search_by_date?tags=comment&&hitsPerPage=30"
      )
        .then((results) => results.json())
        .then((data) => {
          console.log(`data`, data);
          dispatch(getNewsData(data.hits));
          setHackerNewsData(data.hits);
        });
    };
    if (HackerNewsData.length == 0 && data.length == 0) {
      fetchData();
    }
  }, []);
  useEffect(() => {
    setHackerNewsData(data);
  }, [data]);
  return (
    <div>
      {HackerNewsData.map((item) => {
        return (
          <NewsItem
            key={HackerNewsData.indexOf(item)}
            id={HackerNewsData.indexOf(item)}
            data={item}
          />
        );
      })}
    </div>
  );
};

export default Comments;

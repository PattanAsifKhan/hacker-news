import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import NewsItem from "./NewsItem/NewsItem";
import { getNewsData } from "../../redux/LatestNews/action";

const News = () => {
  const [LatestNewsData, setLatestNewsData] = useState([]);
  const dispatch = useDispatch();
  const data = useSelector((store) => store.LatestNews.NewsData);

  useEffect(() => {
    const fetchData = () => {
      fetch(
        "https://hn.algolia.com/api/v1/search_by_date?tags=story&&hitsPerPage=50"
      )
        .then((results) => results.json())
        .then((data) => {
          dispatch(getNewsData(data.hits));
        });
    };
    if (LatestNewsData.length == 0 && data.length == 0) {
      fetchData();
    }
  }, []);

  useEffect(() => {
    setLatestNewsData(data);
  }, [data]);
  return (
    <div>
      {LatestNewsData.map((item) => {
        return (
          <NewsItem
            key={LatestNewsData.indexOf(item)}
            id={LatestNewsData.indexOf(item)}
            data={item}
          />
        );
      })}
    </div>
  );
};

export default News;

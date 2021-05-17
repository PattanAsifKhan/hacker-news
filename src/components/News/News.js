import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import NewsItem from "./NewsItem/NewsItem";
import { getNewsData } from "../../../src/redux/News/action";

const News = () => {
  var pageNumber = 1;
  const GetMoreData = () => {
    fetch(
      `https://hn.algolia.com/api/v1/search_by_date?tags=front_page&&hitsPerPage=30&page=${pageNumber++}`
    )
      .then((results) => results.json())
      .then((data) => {
        console.log(`data`, data);
        dispatch(getNewsData(data.hits));
        setHackerNewsData(data.hits);
      });
  };
  const [HackerNewsData, setHackerNewsData] = useState([]);
  const dispatch = useDispatch();
  const data = useSelector((store) => store.News.NewsData);

  useEffect(() => {
    const fetchData = () => {
      fetch(
        "https://hn.algolia.com/api/v1/search_by_date?tags=front_page&&hitsPerPage=30"
      )
        .then((results) => results.json())
        .then((data) => {
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
      <div onClick={GetMoreData} style={MoreKeyWordStyle}>
        More
      </div>
    </div>
  );
};

const MoreKeyWordStyle = {
  fontFamily: "Verdana, Geneva, sans-serif",
  fontSize: "10pt",
  border: "2px solid black",
  width: "50px",
  cursor: "pointer",
};
export default News;

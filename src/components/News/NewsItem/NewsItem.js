import React from "react";
import { useDispatch } from "react-redux";
import { updatePoints, removeNewsItem } from "../../../redux/News/action";
import "./NewsItem.scss";

const NewsItem = (props) => {
  const { id, data } = props;
  const { title, url, author, num_comments, points } = data;
  const dispatch = useDispatch();
  return (
    <div className="news-main">
      <div className="heading-main">
        <span className="main-id">{id + 1}</span>
        <span className="ticker" onClick={() => dispatch(updatePoints(id))}>
          &#9650;
        </span>
        <a href="/" className="title">
          {title}
        </a>
        <a href="/" className="link">
          ({url})
        </a>
      </div>
      <div className="details">
        <div className="points"> {points} points by</div>
        <a href="/">{author} </a>
        <a href="/">time | </a>
        <div
          style={{ cursor: "pointer" }}
          onClick={() => dispatch(removeNewsItem(id))}
        >
          hide |
        </div>
        <a href="/">{num_comments} comments </a>
      </div>
    </div>
  );
};

export default NewsItem;

import React from "react";
import { useDispatch } from "react-redux";
import { updatePoints, removeNewsItem } from "../../../redux/Comments/action";
import "./NewsItem.scss";

const NewsItem = (props) => {
  const { id, data } = props;
  const {
    story_title,
    author,
    num_comments,
    points,
    created_at_i,
    story_url,
    comment_text,
  } = data;
  let current_time = new Date().getTime().toString();
  let timediff = ((current_time - created_at_i) / 1000) % 60;
  let time = Math.round(timediff / 24);
  const dispatch = useDispatch();
  return (
    <div className="news-main">
      <div className="heading-main">
        <span className="main-id">{id + 1}</span>
        <span className="ticker" onClick={() => dispatch(updatePoints(id))}>
          &#9650;
        </span>
        <a href="/" className="title">
          {story_title && story_title.length > 0 ? story_title : comment_text}
        </a>
        <a href={story_url} className="link">
          ({story_url})
        </a>
      </div>
      <div className="details">
        <div className="points"> {points || 0} points by</div>
        <a href="/">{author} </a>
        <a href="/">{time} hours ago | </a>
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

import {
  GET_COMMENTS,
  ADD_POINTS_COMMENTS,
  REMOVE_COMMENT_POINT,
} from "./types";

export const getNewsData = (data) => {
  return {
    type: GET_COMMENTS,
    payload: data,
  };
};

export const updatePoints = (id) => {
  return {
    type: ADD_POINTS_COMMENTS,
    payload: id,
  };
};
export const removeNewsItem = (id) => {
  return {
    type: REMOVE_COMMENT_POINT,
    payload: id,
  };
};

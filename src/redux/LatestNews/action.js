import { GET_NEWS, ADD_POINTS, REMOVE_ITEM } from "./types";

export const getNewsData = (data) => {
  return {
    type: GET_NEWS,
    payload: data,
  };
};

export const updatePoints = (id) => {
  return {
    type: ADD_POINTS,
    payload: id,
  };
};
export const removeNewsItem = (id) => {
  return {
    type: REMOVE_ITEM,
    payload: id,
  };
};

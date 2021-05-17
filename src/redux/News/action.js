import {
  GET_LATEST_NEWS,
  ADD_POINTS_LATEST,
  REMOVE_ITEM_LATEST,
  LOADING,
} from "./types";

export const getNewsData = (data) => {
  return {
    type: GET_LATEST_NEWS,
    payload: data,
  };
};

export const updatePoints = (id) => {
  return {
    type: ADD_POINTS_LATEST,
    payload: id,
  };
};
export const removeNewsItem = (id) => {
  return {
    type: REMOVE_ITEM_LATEST,
    payload: id,
  };
};
export const Loading = (data) => {
  return {
    type: LOADING,
    payload: data,
  };
};

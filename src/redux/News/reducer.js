import {
  GET_LATEST_NEWS,
  ADD_POINTS_LATEST,
  REMOVE_ITEM_LATEST,
  LOADING,
} from "./types";
const initialState = {
  NewsData: [],
  Loading: false,
};

const getPointsAfterAdd = (state, id) => {
  const updatedState = [...state.NewsData];
  updatedState[id].points += 1;
  return updatedState;
};

const removeNewsItem = (state, id) => {
  const updatedState = [...state.NewsData];
  updatedState.splice(id, 1);
  return updatedState;
};

const newsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_LATEST_NEWS:
      return {
        ...state,
        NewsData: action.payload,
      };
    case ADD_POINTS_LATEST:
      return {
        ...state,
        NewsData: getPointsAfterAdd(state, action.payload),
      };
    case REMOVE_ITEM_LATEST:
      return {
        ...state,
        NewsData: removeNewsItem(state, action.payload),
      };
    case LOADING:
      return {
        ...state,
        LOADING: action.payload,
      };
    default:
      return state;
  }
};
export default newsReducer;

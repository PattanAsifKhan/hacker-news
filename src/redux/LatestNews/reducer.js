import { GET_NEWS, ADD_POINTS, REMOVE_ITEM } from "./types";
const initialState = {
  NewsData: [],
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
    case GET_NEWS:
      return {
        ...state,
        NewsData: action.payload,
      };
    case ADD_POINTS:
      return {
        ...state,
        NewsData: getPointsAfterAdd(state, action.payload),
      };
    case REMOVE_ITEM:
      return {
        ...state,
        NewsData: removeNewsItem(state, action.payload),
      };
    default:
      return state;
  }
};
export default newsReducer;

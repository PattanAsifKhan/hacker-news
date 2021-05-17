import {
  GET_COMMENTS,
  ADD_POINTS_COMMENTS,
  REMOVE_COMMENT_POINT,
} from "./types";
const initialState = {
  NewsData: [],
};

const getPointsAfterAdd = (state, id) => {
  const updatedState = [...state.NewsData];
  console.log(`reaching her`);
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
    case GET_COMMENTS:
      return {
        ...state,
        NewsData: action.payload,
      };
    case ADD_POINTS_COMMENTS:
      return {
        ...state,
        NewsData: getPointsAfterAdd(state, action.payload),
      };
    case REMOVE_COMMENT_POINT:
      return {
        ...state,
        NewsData: removeNewsItem(state, action.payload),
      };
    default:
      return state;
  }
};
export default newsReducer;

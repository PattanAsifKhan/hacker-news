import { createStore, combineReducers, compose } from "redux";
import NewsReducer from "./News/reducer";
import LatestNewsReducer from "./LatestNews/reducer";
import CommentsReducer from "./Comments/reducer";

const reducer = combineReducers({
  News: NewsReducer,
  LatestNews: LatestNewsReducer,
  Comments: CommentsReducer,
});
const enhancers = compose(
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const store = createStore(reducer, enhancers);

export default store;

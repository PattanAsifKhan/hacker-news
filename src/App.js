import React from "react";
import "./App.scss";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import News from "./components/News/News";
import Welcome from "./components/welcome/Welcome";
import LatestNews from "./components/LatestNews/LatestNews";
import store from "../src/redux/ConfigureStore";
import { Provider } from "react-redux";
import Footer from "./common/Footer/Footer";
import Comments from "./components/Comments/Comments";
export default function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="app-body">
          <div className="nav-bar-hacker-news">
            <Link
              to="/"
              style={{
                fontSize: "12px",
                marginRight: "20px",
                marginBottom: "2px",
                fontWeight: "1000",
                fontFamily: "Verdana, Geneva, sans-serif",
              }}
            >
              Hacker News
            </Link>
            <Link to="/welcome">welcome |</Link>
            <Link to="/new"> new |</Link>
            <Link to="/threads"> threads |</Link>
            <Link to="/past"> past |</Link>
            <Link to="/comments"> comments |</Link>
            <Link to="/ask"> ask |</Link>
            <Link to="/show"> show |</Link>
            <Link to="/jobs"> jobs</Link>
          </div>

          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/welcome">
              <Welcome />
            </Route>
            <Route path="/new">
              <LatestNews />
            </Route>
            <Route path="/comments">
              <Comments />
            </Route>
            <Route path="/">
              <News />
            </Route>
          </Switch>
          <Footer />
        </div>
      </Router>
    </Provider>
  );
}

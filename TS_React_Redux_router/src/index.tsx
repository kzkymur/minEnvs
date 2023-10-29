import React from "react";
import { Provider } from "react-redux";
import { render } from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "@/component/Home";
import Enter from "@/component/Enter";
import store from "@/store";

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Route path="/">
            <Home />
          </Route>
          <Route path="/Enter">
            <Enter />
          </Route>
        </Router>
      </Provider>
    );
  }
}

render(<App />, document.getElementById("app"));

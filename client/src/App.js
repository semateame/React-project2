import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from "react-router-dom";
import AppNavbar from "../src/components/AppNavbar";
import { loadUser } from "./store/action/authAction";
import { store } from "./index";

import "./App.css";

class App extends React.Component {
  componentDidMount() {
    store.dispatch(loadUser());
  }

  render() {
    return (
      <BrowserRouter>
        <AppNavbar />
      </BrowserRouter>
    );
  }
}

export default App;

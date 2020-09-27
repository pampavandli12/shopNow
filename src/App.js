import React from "react";
import "./App.css";
import { Layout } from "./hoc/Layout/Layout";
import { Product } from "./components/Product/Product";
import { Signin } from "./containers/signin/Signin";
// Router
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/product">
          <Product />
        </Route>
        <Route path="/signin">
          <Signin />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;

import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { Provider } from "react-redux";

import "./App.css";

import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Item from "./containers/Item/Item";
import Cart from "./containers/Cart/Cart";
import Auth from "./components/Auth/Auth";
import Checkout from "./containers/Checkout/Checkout";
import { store } from "./store/store";

class App extends React.Component {
  renderWithAuthCheck = (ComponentToRender) => {
    const isUserLoggedIn = store.getState().user.isLoggedIn;
    console.log(store.getState())
    return !!isUserLoggedIn ? <ComponentToRender /> : <Redirect to="/login" />;
  };
  render() {
    return (
      <div className="App">
        <Provider store={store}>
          <BrowserRouter>
            <Header />
            <Switch>
              <Route path="/login" exact component={Auth} />
              <Route
                path="/shopping"
                exact
                render={() => this.renderWithAuthCheck(Home)}
              />
              <Route
                path="/shopping/item/:id"
                exact
                render={() => this.renderWithAuthCheck(Item)}
              />
              <Route
                path="/shopping/cart"
                exact
                render={() => this.renderWithAuthCheck(Cart)}
              />
              <Route
                path="/checkout"
                exact
                render={() => this.renderWithAuthCheck(Checkout)}
              />
              <Redirect to="/shopping" />
            </Switch>
          </BrowserRouter>
        </Provider>
      </div>
    );
  }
}

export default App;

import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { Provider } from "react-redux";

import "./App.css";

import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Item from "./containers/Item/Item";
import Cart from "./containers/Cart/Cart";
import { store } from "./store/store";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Provider store={store}>
          <BrowserRouter>
            <Header />
            <Switch>
              <Route path="/shopping" exact component={Home} />
              <Route path="/shopping/item/:id" exact component={Item} />
              <Route path="/shopping/cart" exact component={Cart} />
              <Redirect to="/shopping" />
            </Switch>
          </BrowserRouter>
        </Provider>
      </div>
    );
  }
}

export default App;

import * as React from "react";
import { render } from "react-dom";
import { Link, Route, BrowserRouter, Switch } from 'react-router-dom';
import Index from "./pages/index";
import Classify from "./pages/classify";
import ShoppingCart from "./pages/shopping-cart";
import UserCenter from "./pages/user-center";
import './common/common.scss';

const rootEl = document.getElementById("root");

render(
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Index}></Route>
            <Route path="/classify" component={Classify} ></Route>
            <Route path="/shopping-cart" component={ShoppingCart}></Route>
            <Route path="/user-center" component={UserCenter}></Route>
        </Switch>
    </BrowserRouter>,
    rootEl
);

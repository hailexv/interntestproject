import * as React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import {App} from "../components/App";
import HomePage from "./HomePage";
import {Provider} from 'react-redux';
import store from "../store";


const Routes = () => {
    return (
        <BrowserRouter>

            <Switch>


                <Route exact path="/" render={() => <HomePage />} />
                <Route exact path="/ab" render={() => <App />} />
            </Switch>

        </BrowserRouter>
    );
};

export default Routes;
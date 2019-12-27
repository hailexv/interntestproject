import * as React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import {Navigation} from "../components/Navigation";
import {App} from "../components/App";


const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>

                <Route exact path="/" render={() => <Navigation />} />
                <Route exact path="/ab" render={() => <App />} />
            </Switch>
        </BrowserRouter>
    );
};

export default Routes;
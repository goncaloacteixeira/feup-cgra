import React from "react";
import { Route, Switch } from "react-router-dom";

import LandingPage from "./LandingPage";
import ExercisesPage from "./ExercisesPage";

const Main = () => (
    <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/exercises" component={ExercisesPage} />
    </Switch>
);

export default Main;
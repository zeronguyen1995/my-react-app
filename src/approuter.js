import React from "react";
import { Switch, Route } from "react-router-dom";
import Homepage from "./components/homepage/homepagecontainer.js";
import Todo from "./components/todo/todoContainer.js";
const AppRouter = () =>
{
    return (
        <Switch>
            <Route exact path='/' component={Homepage} />
            <Route exact path='/todoList' component={Todo} />
        </Switch>
    );
}
export default AppRouter;